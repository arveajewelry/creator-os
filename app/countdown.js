"use client";

import { useEffect, useState } from "react";

export default function Countdown({ iso }) {
  const target = new Date(iso).getTime();
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  const ms = Math.max(0, target - now);
  const h = Math.floor(ms / 3600000);
  const m = Math.floor((ms % 3600000) / 60000);
  const s = Math.floor((ms % 60000) / 1000);

  if (ms <= 0) {
    return (
      <div className="count-pill">
        <span className="shimmer" style={{ fontWeight: 800 }}>LIVE NOW</span>
      </div>
    );
  }

  return (
    <div className="count-pill">
      <span>Launching in</span>
      <b>{String(h).padStart(2, "0")}h {String(m).padStart(2, "0")}m {String(s).padStart(2, "0")}s</b>
    </div>
  );
}
