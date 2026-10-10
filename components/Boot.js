"use client";
import { useEffect, useState } from "react";

const LINES = [
  ["sys", "BackTrack 5 R3 (Revolution) Kernel 3.2.6-bt5 #1 SMP PREEMPT x86_64"],
  ["sys", "Initializing Offensive Security Distribution Environment..."],
  ["ok", "[  OK  ] Initializing hardware crypto modules and entropy engine"],
  ["ok", "[  OK  ] Mounting /dev/portfolio on /mnt/kartiko-workspace (ext4)"],
  ["ok", "[  OK  ] Loading network-recon & penetration testing toolchains"],
  ["warn", "[ WARN ] Promiscuous packet filtering detected: stealth active"],
  ["ok", "[  OK  ] Security clearance verified: KARTIKO DAMAR JATI"],
  ["ok", "[  OK  ] Starting tty1 interactive shell: root@backtrack:~#"],
];

export default function Boot() {
  const [show, setShow] = useState(true);
  const [n, setN] = useState(0);

  useEffect(() => {
    let seen = false;
    try { seen = sessionStorage.getItem("booted") === "1"; } catch (e) {}
    if (seen || window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setShow(false); return; }
    const done = () => { try { sessionStorage.setItem("booted", "1"); } catch (e) {} setShow(false); };
    const id = setInterval(() => setN((x) => x + 1), 220);
    const key = (e) => { if (e.key === "Escape" || e.key === "Enter" || e.key === " ") done(); };
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
      <div className="boot-terminal">
        <div className="boot-header">
          <span className="boot-distro">BACKTRACK LINUX 5.3 // OFFENSIVE SECURITY</span>
          <span className="boot-sub">[ TTY1 INITIALIZATION ]</span>
        </div>
        <div className="boot-lines">
          {LINES.slice(0, n).map(([k, t], idx) => (
            <p key={idx} className={`boot-line ${k}`}>{t}</p>
          ))}
        </div>
        <div className="boot-footer">
          <span className="boot-prompt">[ Tekan ENTER atau KLIK di mana saja untuk melewati ]</span>
        </div>
      </div>
    </div>
  );
}

