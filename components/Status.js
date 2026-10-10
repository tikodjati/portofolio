"use client";
import { useEffect, useState } from "react";

export default function Status({ location }) {
  const [t, setT] = useState("--:--:--");
  useEffect(() => {
    const f = () =>
      setT(
        new Date()
          .toLocaleTimeString("id-ID", { hour12: false, timeZone: "Asia/Jakarta" })
          .replace(/\./g, ":")
      );
    f();
    const id = setInterval(f, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="status">
      <span className="status-pill status-live">
        <i className="dot" />
        <span>SYSTEM ONLINE</span>
      </span>
      <span className="status-pill status-loc">
        <span className="status-dim">LOC:</span> {location}
      </span>
      <span className="status-pill status-time">
        <span className="status-dim">TIME:</span> {t} WIB
      </span>
    </div>
  );
}

