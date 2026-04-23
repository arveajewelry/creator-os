import "./globals.css";
import WaitlistForm from "./waitlist-form.js";
import Countdown from "./countdown.js";

function getCheckoutUrls() {
  return {
    tripwire: process.env.CHECKOUT_TRIPWIRE_URL || "https://buy.stripe.com/test_eVaaIkcEhaKK9mofYY",
    flagship: process.env.CHECKOUT_FLAGSHIP_URL || "https://buy.stripe.com/test_7sIcQs7jX4mmbuw9AA",
    dfy:      process.env.CHECKOUT_DFY_URL      || "https://buy.stripe.com/test_14k3fS7jXcSS6aceUU",
  };
}

function getLaunchTimestamp() {
  const explicit = process.env.LAUNCH_UTC_ISO;
  if (explicit) return explicit;
  const d = new Date(Date.now() + 72 * 3600 * 1000);
  return d.toISOString();
}

export default function Page() {
  const urls = getCheckoutUrls();
  const launchIso = getLaunchTimestamp();

  return (
    <>
      <nav>
        <div className="nav-inner">
          <a href="#top" className="logo grad-gold">Creator OS</a>
          <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
            <a href="#pricing" className="cta cta-ghost" style={{ padding: "10px 18px", fontSize: 14 }}>Buy now</a>
          </div>
        </div>
      </nav>

      <section className="section pulse-bg grain" id="top" style={{ paddingTop: 64, paddingBottom: 64, position: "relative" }}>
        <div className="container-x">
          <div className="hero-stack rise rise-1">
            <Countdown iso={launchIso} />
            <h1 className="h1">The content engine <span className="grad-gold">that runs itself.</span></h1>
            <p className="lead" style={{ maxWidth: 680 }}>500 proven hooks. 240 Veo prompts. An autonomous publishing engine that turns ideas into ready-to-post Reels while you sleep. Built by a solo founder who shipped 900 plus viral videos in one year.</p>
            <div className="cta-row">
              <a href={urls.flagship} className="cta cta-primary">Get Creator OS for $97 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg></a>
              <a href="#pricing" className="cta cta-ghost">See all plans</a>
            </div>
            <div className="mini-proof">
              <span><b>900+</b> viral reels shipped</span>
              <span><b>14M+</b> organic views</span>
              <span><b>30-day</b> money-back guarantee</span>
            </div>
          </div>

          <div style={{ marginTop: 56 }} className="rise rise-3">
            {process.env.VSL_EMBED_URL ? (
              <div className="vsl-box">
                <iframe src={process.env.VSL_EMBED_URL} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen title="Creator OS demo" />
              </div>
            ) : (
              <div className="vsl-box">
                <div className="vsl-placeholder">
                  <div>
                    <div className="vsl-play" aria-hidden><svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div>
                    <div style={{ fontSize: 15, fontWeight: 600, color: "#f5f5f7", marginBottom: 6 }}>30-second demo coming this week</div>
                    <div style={{ fontSize: 13, color: "#80808a" }}>Set VSL_EMBED_URL env var to swap in the hosted video</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="section-sm" style={{ paddingTop: 40, paddingBottom: 40 }}>
        <div className="container-x">
          <div className="trust-row">
            <span>As featured on:</span><span style={{ opacity: 0.5 }}>Creator tools roundup</span><span style={{ opacity: 0.5 }}>Indie Hackers</span><span style={{ opacity: 0.5 }}>TikTok FYP</span><span style={{ opacity: 0.5 }}>Twitter / X</span>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="section">
        <div className="container-x">
          <div className="rise rise-1" style={{ maxWidth: 820 }}>
            <div className="eyebrow">The reality</div>
            <h2 className="h2" style={{ marginTop: 16 }}>You know what works. You just don't have time to do it every day.</h2>
            <p className="lead" style={{ marginTop: 20 }}>Every creator hits the same wall. You spend 4 hours writing one hook, 2 hours filming, 3 hours editing, then sit there at 11pm wondering what to post tomorrow. The algorithm punishes gaps. Your competitors post daily and compound. You're doing it solo, and it's killing you.</p>
            <p className="lead" style={{ marginTop: 16 }}>Creator OS is the system I built for myself after burning out three times. It treats content like a production line, not an art project.</p>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="section" id="features">
        <div className="container-x">
          <div className="eyebrow">What's inside</div>
          <h2 className="h2" style={{ marginTop: 16, maxWidth: 720 }}>Everything you need, nothing you don't.</h2>
          <div className="grid-3" style={{ marginTop: 48 }}>
            {FEATURES.map((f, i) => (
              <div key={i} className="glass rise" style={{ padding: 28, borderRadius: 18, display: "flex", flexDirection: "column", gap: 16 }}>
                <div className="feature-icon">{f.icon}</div>
                <div>
                  <div className="h3" style={{ marginBottom: 8 }}>{f.title}</div>
                  <div className="lead" style={{ fontSize: 16 }}>{f.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="section-sm" style={{ paddingTop: 40, paddingBottom: 40 }}>
        <div className="container-x">
          <div className="grid-4">
            <div className="stat"><div className="n">500</div><div className="l">Hooks in the vault</div></div>
            <div className="stat"><div className="n">240</div><div className="l">Veo prompts ready to ship</div></div>
            <div className="stat"><div className="n">30</div><div className="l">Reel scripts, plug-and-play</div></div>
            <div className="stat"><div className="n">1</div><div className="l">Founder, running it all solo</div></div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="section" id="pricing">
        <div className="container-x">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="eyebrow">Pricing</div>
            <h2 className="h2" style={{ marginTop: 16 }}>Pick the tier that matches your stage.</h2>
            <p className="lead" style={{ marginTop: 16, maxWidth: 640, marginInline: "auto" }}>Start small. Grow into it. All tiers include the 30-day money-back guarantee.</p>
          </div>
          <div className="grid-3">
            <div className="pricing-card">
              <div>
                <div className="tiny" style={{ marginBottom: 8, letterSpacing: "0.08em", textTransform: "uppercase", color: "#80808a" }}>Starter</div>
                <div className="h3">Hooks Vault</div>
                <div className="serif" style={{ fontSize: 48, lineHeight: 1, marginTop: 12 }}>$17 <span style={{ fontSize: 16, color: "#80808a" }}>once</span></div>
              </div>
              <div style={{ height: 1, background: "rgba(255,255,255,0.08)" }} />
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                {TRIPWIRE_BULLETS.map((b, i) => (<li key={i} style={{ display: "flex", gap: 10 }}><span className="check" aria-hidden>&#10003;</span><span>{b}</span></li>))}
              </ul>
              <a href={urls.tripwire} className="cta cta-ghost" style={{ width: "100%", justifyContent: "center" }}>Get the vault</a>
              <div className="tiny">24-page PDF. Instant download. Lifetime updates.</div>
            </div>

            <div className="pricing-card popular">
              <div className="badge-pop">Most popular</div>
              <div>
                <div className="tiny" style={{ marginBottom: 8, letterSpacing: "0.08em", textTransform: "uppercase", color: "#ffd27d" }}>Recommended</div>
                <div className="h3">Creator OS Playbook</div>
                <div className="serif" style={{ fontSize: 56, lineHeight: 1, marginTop: 12 }}><span className="grad-gold">$97</span> <span style={{ fontSize: 16, color: "#80808a" }}>once</span></div>
              </div>
              <div style={{ height: 1, background: "rgba(232,168,79,0.2)" }} />
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                {FLAGSHIP_BULLETS.map((b, i) => (<li key={i} style={{ display: "flex", gap: 10 }}><span className="check" aria-hidden>&#10003;</span><span>{b}</span></li>))}
              </ul>
              <a href={urls.flagship} className="cta cta-primary" style={{ width: "100%", justifyContent: "center" }}>Get Creator OS</a>
              <div className="tiny">33-page playbook + 3 bonuses, worth $291. Instant download.</div>
            </div>

            <div className="pricing-card">
              <div>
                <div className="tiny" style={{ marginBottom: 8, letterSpacing: "0.08em", textTransform: "uppercase", color: "#80808a" }}>Done for you</div>
                <div className="h3">Creator OS + Setup</div>
                <div className="serif" style={{ fontSize: 48, lineHeight: 1, marginTop: 12 }}>$497 <span style={{ fontSize: 16, color: "#80808a" }}>once</span></div>
              </div>
              <div style={{ height: 1, background: "rgba(255,255,255,0.08)" }} />
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                {DFY_BULLETS.map((b, i) => (<li key={i} style={{ display: "flex", gap: 10 }}><span className="check" aria-hidden>&#10003;</span><span>{b}</span></li>))}
              </ul>
              <a href={urls.dfy} className="cta cta-ghost" style={{ width: "100%", justifyContent: "center" }}>Book a setup call</a>
              <div className="tiny">Limited to 5 new clients per month. Sold out months happen.</div>
            </div>
          </div>

          <div style={{ marginTop: 56, display: "flex", justifyContent: "center" }}>
            <div className="guarantee-badge">
              <div className="guarantee-seal"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s-8-4-8-12V5l8-3 8 3v5c0 8-8 12-8 12z"/><path d="m9 12 2 2 4-4"/></svg></div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 16 }}>30-day money-back guarantee</div>
                <div className="tiny">Use it, test it, ship it. If it doesn't earn its price, email me - full refund, no questions.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="section" id="founder">
        <div className="container-x">
          <div className="eyebrow">From the founder</div>
          <h2 className="h2" style={{ marginTop: 16, maxWidth: 720 }}>Built by a creator who got tired of burning out.</h2>
          <div className="founder-card" style={{ marginTop: 40 }}>
            <div className="founder-avatar">A</div>
            <div>
              <div className="h3" style={{ marginBottom: 8 }}>Armeen, founder of Arvea</div>
              <p className="lead" style={{ fontSize: 16 }}>I shipped 900 plus videos in a year. Some flopped, some went viral, most did their job. Along the way I built an autonomous pipeline that now writes, films, edits, and publishes while I sleep. Creator OS is that pipeline, packaged. No fluff, no guru talk. The exact hooks, prompts, scripts, and system I use to run Arvea solo. If you're a creator who wants output without the grind, this was made for you.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="section" id="faq">
        <div className="container-x" style={{ maxWidth: 820 }}>
          <div className="eyebrow">FAQ</div>
          <h2 className="h2" style={{ marginTop: 16, marginBottom: 32 }}>Answers to the real questions.</h2>
          {FAQ.map((q, i) => (
            <details key={i} className="faq-item">
              <summary className="faq-summary">{q.q} <span style={{ color: "#80808a", fontSize: 20 }}>+</span></summary>
              <div className="faq-answer">{q.a}</div>
            </details>
          ))}
        </div>
      </section>

      <div className="divider" />

      <section className="section" id="waitlist">
        <div className="container-x" style={{ maxWidth: 720 }}>
          <div className="eyebrow">Not ready to buy yet?</div>
          <h2 className="h2" style={{ marginTop: 16 }}>Get a free hook on Monday.</h2>
          <p className="lead" style={{ marginTop: 16, marginBottom: 24 }}>One proven hook, one prompt, one script each week. No spam. Unsubscribe anytime.</p>
          <WaitlistForm />
        </div>
      </section>

      <footer>
        <div className="container-x" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div className="tiny">&copy; {new Date().getFullYear()} Creator OS by Arvea Jewelry, LLC. All rights reserved.</div>
          <div className="tiny" style={{ display: "flex", gap: 20 }}><a href="/terms">Terms</a><a href="/privacy">Privacy</a><a href="mailto:support@arveajewelry.com">Support</a></div>
        </div>
      </footer>
    </>
  );
}

const FEATURES = [
  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 8.5 12 3l10 5.5V16l-10 5.5L2 16z"/><path d="M2 8.5 12 14l10-5.5"/><path d="M12 14v7.5"/></svg>, title: "500 proven hooks", body: "Every hook tested on real audiences. Copy, paste, tweak, ship. Organized by niche, emotion, and format." },
  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="3"/><path d="m10 9 5 3-5 3z"/></svg>, title: "240 Veo prompts", body: "Drop into Veo 3 and render cinematic 8-second clips. Aspect 9:16, ready for Shorts, Reels, TikTok." },
  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M9 13h6"/><path d="M9 17h6"/></svg>, title: "30 reel scripts", body: "Plug-and-play scripts for opens, listicles, POVs, before-afters. Zero staring at a blank page." },
  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>, title: "Orion Lite setup", body: "A tiny autonomous engine you can host free on Vercel. Publishes to YouTube Shorts on a cron." },
  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>, title: "Monetization playbook", body: "Turn views into income. Affiliate, product, sponsorship. Exact templates, rates, and pitches." },
  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 7 9 18l-5-5"/></svg>, title: "90-day shipping plan", body: "Week-by-week checklist. Day one to viral. What to post, when, and why." },
];

const TRIPWIRE_BULLETS = [
  "500 hooks, organized by niche and emotion",
  "Swipe-and-ship format with blank slots for your angle",
  "Updated monthly with new tested hooks",
  "Delivered as a polished 24-page PDF",
];

const FLAGSHIP_BULLETS = [
  "Everything in Hooks Vault (500 hooks)",
  "240 cinematic Veo 3 prompts",
  "30 plug-and-play reel scripts",
  "Orion Lite: autonomous publishing engine",
  "Monetization playbook + templates",
  "90-day day-by-day shipping plan",
  "Private community of shipping creators",
  "Lifetime updates",
];

const DFY_BULLETS = [
  "Everything in Creator OS ($97 tier)",
  "We deploy Orion Lite on your Vercel",
  "We wire your YouTube + TikTok OAuth",
  "We seed your first 30 videos",
  "60-minute strategy call",
  "Two weeks of async Slack support",
];

const FAQ = [
  { q: "What exactly do I get?", a: "A 33-page Creator OS playbook (PDF), a 24-page Hooks Vault (PDF), a 22-page Veo prompt library (PDF), a 20-page Orion Lite setup guide (PDF), and 30 ready-to-shoot reel scripts (PDF). Plus a bonus VSL script and a DFY landing copy template. All delivered to your inbox within 30 seconds of purchase." },
  { q: "I'm a total beginner. Will this work for me?", a: "Yes. The 90-day shipping plan starts at day zero. If you can type in a browser, you can run this. Orion Lite runs free on Vercel's hobby tier." },
  { q: "I'm an experienced creator. Is this too basic?", a: "The Hooks Vault alone saves most creators 6 plus hours per week. The Orion Lite engine removes publishing as a chore. Most buyers are already making content and want to compound." },
  { q: "Will this work outside of a specific niche?", a: "The hooks and scripts are niche-agnostic. We include niche-specific variations for fashion, fitness, finance, productivity, coaching, and ecom." },
  { q: "Is the 30-day guarantee real?", a: "Real. Email support at arveajewelry.com within 30 days and we refund no questions asked. No forms, no calls, no pressure." },
  { q: "Do I need AI tools or a big budget?", a: "No. The system works with free tools (CapCut, Canva, ChatGPT free tier). If you want to use Veo 3 for cinematic clips, that's a separate optional subscription." },
  { q: "How long until I see results?", a: "Most buyers ship their first reel within 48 hours. Algorithmic lift usually kicks in around the 30-day mark if you're shipping daily. The goal is compounding, not one lucky hit." },
  { q: "What happens when I click buy?", a: "Secure checkout, instant PDF delivery to your email, and a 3-email onboarding sequence so you don't get lost in the files." },
];
