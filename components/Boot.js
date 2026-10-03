"use client";
import { useEffect, useState } from "react";

const LINES = [
  ["ok", "[ OK ] loading kernel modules"],
  ["ok", "[ OK ] mounting /dev/portfolio"],
  ["ok", "[ OK ] starting glitch.service"],
  ["ok", "[ OK ] establishing secure channel"],
  ["warn", "[WARN] unauthorized curiosity detected"],
  ["ok", "[ OK ] access granted. welcome."],
];

export default function Boot() {
  const [show, setShow] = useState(true);
  const [n, setN] = useState(0);

  useEffect(() => {
    let seen = false;
    try { seen = sessionStorage.getItem("booted") === "1"; } catch (e) {}
    if (seen || window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setShow(false); return; }
    const done = () => { try { sessionStorage.setItem("booted", "1"); } catch (e) {} setShow(false); };
    const id = setInterval(() => setN((x) => x + 1), 260);
    const key = (e) => { if (e.key === "Escape" || e.key === "Enter") done(); };
    window.addEventListener("keydown", key);
    window.__bootDone = done;
    return () => { clearInterval(id); window.removeEventListener("keydown", key); };
  }, []);

  useEffect(() => {
    if (n > LINES.length + 2 && window.__bootDone) window.__bootDone();
  }, [n]);

  if (!show) return null;
  return (
    <div className="boot" onClick={() => window.__bootDone && window.__bootDone()} role="status">
      {LINES.slice(0, n).map(([k, t]) => <p key={t} className={k}>{t}</p>)}
      <small>Klik atau tekan Enter untuk melewati</small>
    </div>
  );
}
