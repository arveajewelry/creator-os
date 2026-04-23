import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    const body = await req.json().catch(() => ({}));
    const email = (body.email || "").trim().toLowerCase();
    if (!/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json({ ok: false, error: "Invalid email." }, { status: 400 });
    }

    const key = process.env.KLAVIYO_PRIVATE_KEY;
    const listId = process.env.KLAVIYO_CREATOR_OS_LIST_ID;

    if (!key || !listId) {
      console.warn("[waitlist] KLAVIYO_PRIVATE_KEY or KLAVIYO_CREATOR_OS_LIST_ID missing. Email:", email);
      return NextResponse.json({ ok: true, relay: "logged_only" });
    }

    const headers = {
      Authorization: `Klaviyo-API-Key ${key}`,
      accept: "application/vnd.api+json",
      "content-type": "application/vnd.api+json",
      revision: "2024-10-15",
    };

    const profileBody = {
      data: {
        type: "profile",
        attributes: { email, properties: { source: "creator_os_landing" } },
      },
    };
    const createRes = await fetch("https://a.klaviyo.com/api/profiles/", {
      method: "POST",
      headers,
      body: JSON.stringify(profileBody),
    });
    let profileId = null;
    if (createRes.ok) {
      const j = await createRes.json().catch(() => ({}));
      profileId = j?.data?.id || null;
    } else if (createRes.status === 409) {
      const lookup = await fetch(
        `https://a.klaviyo.com/api/profiles/?filter=equals(email,"${encodeURIComponent(email)}")`,
        { headers }
      );
      const j = await lookup.json().catch(() => ({}));
      profileId = j?.data?.[0]?.id || null;
    } else {
      const t = await createRes.text();
      return NextResponse.json({ ok: false, error: `profile_error ${createRes.status}: ${t.slice(0, 200)}` }, { status: 502 });
    }

    if (!profileId) {
      return NextResponse.json({ ok: false, error: "No profile id resolved." }, { status: 502 });
    }

    const subBody = { data: [{ type: "profile", id: profileId }] };
    const subRes = await fetch(
      `https://a.klaviyo.com/api/lists/${listId}/relationships/profiles/`,
      { method: "POST", headers, body: JSON.stringify(subBody) }
    );
    if (!subRes.ok && subRes.status !== 409) {
      const t = await subRes.text();
      return NextResponse.json({ ok: false, error: `subscribe_error ${subRes.status}: ${t.slice(0, 200)}` }, { status: 502 });
    }

    return NextResponse.json({ ok: true, profileId });
  } catch (e) {
    return NextResponse.json({ ok: false, error: String(e).slice(0, 300) }, { status: 500 });
  }
}
