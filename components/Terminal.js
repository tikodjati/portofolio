"use client";
import { useEffect, useRef, useState } from "react";

const PS = "root@backtrack:~#";

export default function Terminal({ d }) {
  const [log, setLog] = useState([
    { c: "", o: "BackTrack Linux 5 R3 - Terminal Shell v3.2.6\nKetik 'help' untuk melihat daftar perintah sistem." },
  ]);
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
    const list = (arr) => arr.map((x) => "  [+] " + x).join("\n");
    let o;
    switch (c.toLowerCase()) {
      case "help":
        o = [
          "PERINTAH SISTEM BACKTRACK:",
          "  whoami      Informasi identitas operator",
          "  skills      Keahlian teknis & pengujian penetrasi",
          "  certs       Daftar sertifikasi keamanan siber",
          "  projects    Repositori tools & riset exploit",
          "  writeups    Catatan analisis keamanan & CTF",
          "  contact     Saluran komunikasi terbuka",
          "  ls          Tampilkan daftar file direktori saat ini",
          "  cat <file>  Baca isi file (contoh: cat whoami.txt)",
          "  clear       Bersihkan buffer terminal",
        ].join("\n");
        break;
      case "whoami":
        o = `[IDENTITAS OPERATOR]\nNama : ${d.name}\nBio  : ${d.bio}`;
        break;
      case "skills":
        o = list(d.skills);
        break;
      case "certs":
        o = list(d.certs);
        break;
      case "projects":
        o = list(d.projects);
        break;
      case "writeups":
        o = d.writeups.length ? list(d.writeups) : "  [-] Tidak ada writeup di direktori ini.";
        break;
      case "contact":
        o = d.contact.map((x) => `  [>] ${x.n.padEnd(12)}: ${x.u}`).join("\n");
        break;
      case "ls":
        o = "-rw-r--r--  1 root root  whoami.txt\ndrwxr-xr-x  2 root root  skills/\ndrwxr-xr-x  2 root root  certs/\ndrwxr-xr-x  2 root root  projects/\ndrwxr-xr-x  2 root root  writeups/\n-rw-------  1 root root  .secret";
        break;
      case "cat":
        o =
          a[0] === ".secret"
            ? "[ENCRYPTED PAYLOAD] Coba ketik: flag"
            : a[0] === "whoami.txt"
            ? `${d.name}\n${d.bio}`
            : `cat: ${a[0] || "?"}: file tidak ditemukan atau gunakan perintah di 'help'`;
        break;
      case "flag":
        o = "FLAG{b4cktr4ck_l1nux_st34lth_0p3r4t0r}\n[+] Selamat! Kamu berhasil menemukan easter egg ini.\n[+] Tangkap layar (screenshot) ini dan bagikan ke Kartiko!";
        break;
      case "sudo":
        o = `root shell sudah aktif di host backtrack. Kamu sudah memiliki izin tertinggi pada sistem ${d.name}.`;
        break;
      case "clear":
        setLog([]);
        return;
      default:
        o = `bash: ${c}: command not found. Ketik 'help' untuk daftar perintah.`;
    }
    setLog((l) => [...l, { c: cmd, o }]);
  };

  return (
    <div className="term" onClick={() => inp.current && inp.current.focus()}>
      <div className="term-bar">
        <div className="term-dots">
          <span className="tdot tdot-red" />
          <span className="tdot tdot-gray" />
          <span className="tdot tdot-white" />
        </div>
        <div className="term-title">bash - root@backtrack: ~ (80x24)</div>
        <div className="term-meta">SHELL://TTY1</div>
      </div>
      <div className="termbox" ref={box}>
        {log.map((l, i) => (
          <div key={i} className="term-line-block">
            {l.c !== "" && (
              <div className="term-cmd-row">
                <span className="ps">{PS}</span> {l.c}
              </div>
            )}
            <pre className="term-pre">{l.o}</pre>
          </div>
        ))}
      </div>
      <div className="termin">
        <span className="ps">{PS}</span>
        <input
          ref={inp}
          value={v}
          aria-label="Terminal interaktif"
          autoComplete="off"
          autoCapitalize="off"
          spellCheck={false}
          onChange={(e) => setV(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              run(v);
              setV("");
            }
          }}
        />
      </div>
    </div>
  );
}

