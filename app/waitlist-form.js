"use client";

import { useState } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState({ status: "idle", msg: "" });

  async function onSubmit(e) {
    e.preventDefault();
    if (!/\S+@\S+\.\S+/.test(email)) {
      setState({ status: "err", msg: "That email doesn't look right." });
      return;
    }
    setState({ status: "loading", msg: "" });
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error || "Something went wrong.");
      setState({ status: "ok", msg: "You're in. Check your inbox for Monday's hook." });
      setEmail("");
    } catch (err) {
      setState({ status: "err", msg: String(err.message || err) });
    }
  }

  return (
    <>
      <form className="email-form" onSubmit={onSubmit}>
        <input
          className="email-input"
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
        />
        <button className="cta cta-primary" type="submit" disabled={state.status === "loading"}>
          {state.status === "loading" ? "Joining..." : "Join the list"}
        </button>
      </form>
      {state.msg && (
        <div className={`form-msg ${state.status === "ok" ? "ok" : "err"}`}>{state.msg}</div>
      )}
    </>
  );
}
