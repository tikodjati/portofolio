"use client";
import { useEffect, useState } from "react";

export default function Status({ location, label }) {
  const [timeStr, setTimeStr] = useState("--:--:--");

  useEffect(() => {
    const updateClock = () =>
      setTimeStr(
        new Date()
          .toLocaleTimeString("id-ID", { hour12: false, timeZone: "Asia/Jakarta" })
          .replace(/\./g, ":")
      );
    updateClock();
    const id = setInterval(updateClock, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="hero-status-line">
      <span className="status-indicator">
        <span className="status-dot" aria-hidden="true" />
        <span>{label}</span>
      </span>
      <span aria-hidden="true">/</span>
      <span>{location}</span>
      <span aria-hidden="true">/</span>
      <span>{timeStr} WIB</span>
    </div>
  );
}
