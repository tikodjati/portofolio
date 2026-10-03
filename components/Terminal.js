"use client";
import { useEffect, useRef, useState } from "react";

const PS = "guest@portfolio:~$";

export default function Terminal({ d }) {
  const [log, setLog] = useState([{ c: "", o: "Selamat datang. Ketik 'help' untuk melihat perintah." }]);
  const [v, setV] = useState("");
  const box = useRef(null);
  const inp = useRef(null);

  useEffect(() => {
    if (log.length > 1 && box.current) box.current.scrollTop = box.current.scrollHeight;
  }, [log]);

  const run = (raw) => {
    const cmd = raw.trim();
    if (!cmd) return;
    const [c, ...a] = cmd.split(/\s+/);
    const list = (arr) => arr.map((x) => "- " + x).join("\n");
    let o;
    switch (c.toLowerCase()) {
      case "help": o = ["whoami    profil singkat", "skills    daftar skill", "certs     sertifikasi", "projects  daftar project", "writeups  daftar writeup", "contact   kontak", "clear     bersihkan layar"].join("\n"); break;
      case "whoami": o = `${d.name}\n${d.bio}`; break;
      case "skills": o = list(d.skills); break;
      case "certs": o = list(d.certs); break;
      case "projects": o = list(d.projects); break;
      case "writeups": o = list(d.writeups); break;
      case "contact": o = d.contact.map((x) => `${x.n}: ${x.u}`).join("\n"); break;
      case "ls": o = "whoami.txt  skills/  certs/  projects/  writeups/  .secret"; break;
      case "cat": o = a[0] === ".secret" ? "Coba ketik: flag" : `cat: ${a[0] || "?"}: gunakan perintah di 'help'`; break;
      case "flag": o = "FLAG{wh1t3_h4t_w3lc0m3_t0_my_s1t3}\nSelamat, kamu menemukan easter egg. Boleh kirim screenshot-nya ke aku."; break;
      case "sudo": o = `kamu tidak ada di file sudoers. Insiden ini akan dilaporkan ke ${d.name}.`; break;
      case "clear": setLog([]); return;
      default: o = `${c}: command not found. Ketik 'help'.`;
    }
    setLog((l) => [...l, { c: cmd, o }]);
  };

  return (
    <div className="term" onClick={() => inp.current && inp.current.focus()}>
      <div className="termbox" ref={box}>
        {log.map((l, i) => (
          <div key={i}>
            {l.c !== "" && <div><span className="ps">{PS}</span> {l.c}</div>}
            <pre>{l.o}</pre>
          </div>
        ))}
      </div>
      <div className="termin">
        <span className="ps">{PS}</span>
        <input
          ref={inp} value={v} aria-label="Terminal interaktif"
          autoComplete="off" autoCapitalize="off" spellCheck={false}
          onChange={(e) => setV(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") { run(v); setV(""); } }}
        />
      </div>
    </div>
  );
}
