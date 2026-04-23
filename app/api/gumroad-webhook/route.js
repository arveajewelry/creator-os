import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    const form = await req.formData().catch(async () => {
      const t = await req.text();
      return new URLSearchParams(t);
    });
    const payload = Object.fromEntries(form.entries());

    const email = (payload.email || "").toLowerCase();
    const productId = payload.product_id || payload.permalink || "";
    const price = payload.price || payload.sale_price || "0";
    const orderId = payload.order_number || payload.sale_id || "";
    const refunded = payload.refunded === "true";

    if (!email) {
      return NextResponse.json({ ok: false, error: "missing email" }, { status: 400 });
    }

    const expectedSecret = process.env.GUMROAD_PING_SECRET;
    const givenSecret = new URL(req.url).searchParams.get("secret") || req.headers.get("x-gumroad-signature") || "";
    if (expectedSecret && givenSecret && givenSecret !== expectedSecret) {
      return NextResponse.json({ ok: false, error: "bad signature" }, { status: 401 });
    }

    const PRODUCT_TO_LIST = {
      [process.env.GUMROAD_TRIPWIRE_ID || "tripwire"]: process.env.KLAVIYO_POSTBUY_TRIPWIRE_LIST_ID,
      [process.env.GUMROAD_FLAGSHIP_ID || "flagship"]: process.env.KLAVIYO_POSTBUY_FLAGSHIP_LIST_ID,
      [process.env.GUMROAD_DFY_ID || "dfy"]: process.env.KLAVIYO_POSTBUY_DFY_LIST_ID,
    };
    const listId = PRODUCT_TO_LIST[productId] || process.env.KLAVIYO_POSTBUY_DEFAULT_LIST_ID;
    const key = process.env.KLAVIYO_PRIVATE_KEY;

    if (!key || !listId) {
      console.warn("[gumroad-webhook] missing klaviyo env. payload:", { email, productId, price, orderId });
      return NextResponse.json({ ok: true, relay: "logged_only" });
    }

    const headers = {
      Authorization: `Klaviyo-API-Key ${key}`,
      accept: "application/vnd.api+json",
      "content-type": "application/vnd.api+json",
      revision: "2024-10-15",
    };

    const profileBody = {
      data: { type: "profile", attributes: { email, properties: { last_product_purchased: productId, last_order_number: orderId, last_purchase_price: Number(price) / 100, refunded, source: "gumroad" } } },
    };
    const createRes = await fetch("https://a.klaviyo.com/api/profiles/", { method: "POST", headers, body: JSON.stringify(profileBody) });
    let profileId = null;
    if (createRes.ok) { const j = await createRes.json().catch(() => ({})); profileId = j?.data?.id || null; }
    else if (createRes.status === 409) {
      const lookup = await fetch(`https://a.klaviyo.com/api/profiles/?filter=equals(email,"${encodeURIComponent(email)}")`, { headers });
      const j = await lookup.json().catch(() => ({})); profileId = j?.data?.[0]?.id || null;
    }
    if (!profileId) return NextResponse.json({ ok: false, error: "profile_failed" }, { status: 502 });

    if (!refunded) {
      await fetch(`https://a.klaviyo.com/api/lists/${listId}/relationships/profiles/`, { method: "POST", headers, body: JSON.stringify({ data: [{ type: "profile", id: profileId }] }) });
    }

    const eventBody = { data: { type: "event", attributes: { metric: { data: { type: "metric", attributes: { name: refunded ? "Refunded Purchase" : "Purchased" } } }, profile: { data: { type: "profile", id: profileId } }, properties: { product_id: productId, order_number: orderId, price: Number(price) / 100 }, time: new Date().toISOString() } } };
    await fetch("https://a.klaviyo.com/api/events/", { method: "POST", headers, body: JSON.stringify(eventBody) });

    return NextResponse.json({ ok: true, profileId, productId, listId });
  } catch (e) {
    return NextResponse.json({ ok: false, error: String(e).slice(0, 300) }, { status: 500 });
  }
}

export async function GET() { return NextResponse.json({ ok: true, hint: "POST from Gumroad ping only." }); }
