"use client";
import { useEffect, useRef, useState } from "react";
import { CERTS, CONTACT, ME, PROJECTS, SKILLS, UI_COPY } from "../data/content";
import { TRACK_OVERVIEW } from "../data/learn";
import { useSite } from "./SiteProvider";

const PS = "kartiko@portofolio:~$";

export default function Terminal() {
  const { lang } = useSite();
  const t = UI_COPY[lang];

  const [log, setLog] = useState([{ cmd: "", out: t.terminal.welcome }]);
  const [inputVal, setInputVal] = useState("");
  const boxRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    setLog([{ cmd: "", out: UI_COPY[lang].terminal.welcome }]);
  }, [lang]);

  useEffect(() => {
    if (log.length > 1 && boxRef.current) {
      boxRef.current.scrollTop = boxRef.current.scrollHeight;
    }
  }, [log]);

  const execute = (raw) => {
    const trimmed = raw.trim();
    if (!trimmed) return;
    const [cmd, ...args] = trimmed.split(/\s+/);
    const list = (arr) => arr.map((x) => `  - ${x}`).join("\n");
    let out = "";

    switch (cmd.toLowerCase()) {
      case "help":
        out = [
          "COMMANDS:",
          "  whoami      Operator summary",
          "  learn       /learn progress (Solana, CPTS, AWS Red Team)",
          "  skills      Technical focus areas",
          "  certs       Verified certifications",
          "  projects    Public security repositories",
          "  contact     Open contact channels",
          "  ls          List virtual notebook files",
          "  cat <file>  Read file (whoami.txt, .secret)",
          "  clear       Reset output buffer",
        ].join("\n");
        break;
      case "whoami":
        out = `${ME.name} (${ME.location})\n${ME.bio[lang]}`;
        break;
      case "learn":
        out = TRACK_OVERVIEW.map(
          (tr) => `  [${tr.metric}] ${tr.name} (${tr.updated})`
        ).join("\n");
        break;
      case "skills":
        out = list(SKILLS.flatMap((g) => g.tags));
        break;
      case "certs":
        out = list(
          CERTS.map((c) => `${c.name} [ID: ${c.credentialId}] (${c.org}, ${c.year})`)
        );
        break;
      case "projects":
        out = list(PROJECTS.map((p) => `${p.file}: ${p.name}`));
        break;
      case "contact":
        out = CONTACT.map((c) => `  ${c.n.padEnd(10)}: ${c.u}`).join("\n");
        break;
      case "ls":
        out = "whoami.txt   learn/   skills/   certs/   projects/   .secret";
        break;
      case "cat":
        if (args[0] === ".secret") {
          out = "[PAYLOAD] Try command: flag";
        } else if (args[0] === "whoami.txt") {
          out = `${ME.name}\n${ME.bio[lang]}`;
        } else {
          out = `cat: ${args[0] || "<missing>"}: file not found (try 'whoami.txt' or '.secret')`;
        }
        break;
      case "flag":
        out = "FLAG{m0n0chr0m3_n0t3b00k_s3cur1ty_r3s34rch}";
        break;
      case "clear":
        setLog([]);
        return;
      default:
        out = `sh: ${cmd}: command not found. Type 'help' for valid commands.`;
    }

    setLog((prev) => [...prev, { cmd: trimmed, out }]);
  };

  return (
    <div className="shell-box">
      <div className="shell-bar">
        <span>tty1 // {PS}</span>
        <div className="shell-quick-cmds" role="group" aria-label="Quick commands">
          {["help", "learn", "certs", "projects", "clear"].map((preset) => (
            <button
              key={preset}
              type="button"
              className="shell-chip-btn"
              onClick={() => execute(preset)}
            >
              {preset}
            </button>
          ))}
        </div>
      </div>

      <div
        className="shell-output"
        ref={boxRef}
        onClick={() => inputRef.current?.focus()}
        aria-live="polite"
      >
        {log.length === 0 ? (
          <p className="shell-pre">Buffer cleared. Type &apos;help&apos; or select a command above.</p>
        ) : (
          log.map((entry, idx) => (
            <div key={idx} className="shell-entry">
              {entry.cmd !== "" && (
                <div className="shell-cmd-line">
                  {PS} {entry.cmd}
                </div>
              )}
              <pre className="shell-pre">{entry.out}</pre>
            </div>
          ))
        )}
      </div>

      <form
        className="shell-form"
        onSubmit={(e) => {
          e.preventDefault();
          execute(inputVal);
          setInputVal("");
        }}
      >
        <label htmlFor="portfolio-shell-input" className="shell-prompt">
          {PS}
        </label>
        <input
          id="portfolio-shell-input"
          ref={inputRef}
          type="text"
          className="shell-input"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder={t.terminal.placeholder}
          autoComplete="off"
          autoCapitalize="off"
          spellCheck={false}
        />
        <button type="submit" className="btn-secondary">
          {t.terminal.runLabel}
        </button>
      </form>
    </div>
  );
}
