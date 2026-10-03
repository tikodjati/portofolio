"use client";
import { useEffect, useState } from "react";

export default function Status({ location }) {
  const [t, setT] = useState("--:--:--");
  useEffect(() => {
    const f = () => setT(new Date().toLocaleTimeString("id-ID", { hour12: false, timeZone: "Asia/Jakarta" }).replace(/\./g, ":"));
    f();
    const id = setInterval(f, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="status">
      <span><i className="dot" />SYSTEM ONLINE</span>
      <span>{location}</span>
      <span>{t} WIB</span>
    </div>
  );
}
