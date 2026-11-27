"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { CERTS, EXP, PROJECTS, UI_COPY } from "../data/content";
import { AWS_RED_TEAM_TRACK, CPTS_TRACK, RUST_MODULES, TRACK_OVERVIEW } from "../data/learn";
import { useSite } from "./SiteProvider";

export default function SearchDialog() {
  const dialogRef = useRef(null);
  const inputRef = useRef(null);
  const router = useRouter();
  const { searchOpen, closeSearch, lang } = useSite();
  const t = UI_COPY[lang];

  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const dlg = dialogRef.current;
    if (!dlg) return;
    if (searchOpen) {
      if (!dlg.open) dlg.showModal();
      requestAnimationFrame(() => inputRef.current?.focus());
    } else if (dlg.open) {
      dlg.close();
    }
  }, [searchOpen]);

  useEffect(() => {
    const trimmed = query.trim();
    if (!trimmed) {
      setDebouncedQuery("");
      setIsSearching(false);
      return;
    }
    setIsSearching(true);
    const timer = setTimeout(() => {
      setDebouncedQuery(trimmed.toLowerCase());
      setIsSearching(false);
    }, 150);
    return () => clearTimeout(timer);
  }, [query]);

  const index = useMemo(() => {
    const items = [];

    TRACK_OVERVIEW.forEach((tr) => {
      items.push({
        id: `track-${tr.id}`,
        group: t.search.groups.learn,
        title: `${tr.name} (${tr.metric})`,
        desc: tr.summary[lang],
        href: `/learn${tr.anchor}`,
        keywords: `${tr.name} ${tr.metric} ${tr.summary[lang]}`,
      });
    });

    RUST_MODULES.forEach((m) => {
      items.push({
        id: `rust-${m.num}`,
        group: t.search.groups.learn,
        title: `Rust ${m.num}: ${m.title} [${m.status}]`,
        desc: m.topics,
        href: `/learn#module-${m.num}`,
        keywords: `rust solana audit ${m.num} ${m.title} ${m.topics} ${m.files.join(" ")} ${
          m.auditorFocus ? m.auditorFocus[lang] : ""
        }`,
      });
    });

    CPTS_TRACK.domains.forEach((d, idx) => {
      items.push({
        id: `cpts-${idx}`,
        group: t.search.groups.learn,
        title: `CPTS: ${d.name[lang]}`,
        desc: d.detail[lang],
        href: "/learn#track-cpts",
        keywords: `cpts htb pentest ${d.name[lang]} ${d.detail[lang]}`,
      });
    });

    AWS_RED_TEAM_TRACK.plannedAreas.forEach((a, idx) => {
      items.push({
        id: `aws-${idx}`,
        group: t.search.groups.learn,
        title: `AWS Red Team: ${a.title}`,
        desc: a.detail[lang],
        href: "/learn#track-aws",
        keywords: `aws red team carts cloud iam ${a.title} ${a.detail[lang]}`,
      });
    });

    PROJECTS.forEach((p) => {
      items.push({
        id: `proj-${p.file}`,
        group: t.search.groups.project,
        title: `${p.name} (${p.file})`,
        desc: p.desc[lang],
        href: "/#projects",
        keywords: `${p.name} ${p.file} ${p.tech.join(" ")} ${p.desc[lang]}`,
      });
    });

    CERTS.forEach((c) => {
      items.push({
        id: `cert-${c.credentialId}`,
        group: t.search.groups.cert,
        title: c.name,
        desc: `${c.org} (${c.year})`,
        href: "/#credentials",
        keywords: `${c.name} ${c.org} ${c.credentialId} ${c.year}`,
      });
    });

    EXP.forEach((e, idx) => {
      items.push({
        id: `exp-${idx}`,
        group: t.search.groups.experience,
        title: `${e.role} @ ${e.org}`,
        desc: e.time,
        href: "/#experience",
        keywords: `${e.role} ${e.org} ${e.time} ${e.pts[lang].join(" ")}`,
      });
    });

    return items;
  }, [lang, t]);

  const results = useMemo(() => {
    if (!debouncedQuery) return index.slice(0, 7);
    return index
      .filter((item) => item.keywords.toLowerCase().includes(debouncedQuery))
      .slice(0, 10);
  }, [index, debouncedQuery]);

  const handleSelect = (href) => {
    closeSearch();
    setQuery("");
    router.push(href);
  };

  return (
    <dialog
      ref={dialogRef}
      className="search-dialog"
      aria-label={t.nav.search}
      onClose={closeSearch}
      onClick={(e) => {
        if (e.target === dialogRef.current) closeSearch();
      }}
    >
      <div className="search-dialog-head">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
        <label htmlFor="notebook-search-input" className="search-dialog-label">
          {t.nav.search}
        </label>
        <input
          id="notebook-search-input"
          ref={inputRef}
          type="search"
          className="search-dialog-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t.search.placeholder}
          autoComplete="off"
          spellCheck={false}
        />
        <button type="button" className="sidebar-toggle-btn" onClick={closeSearch}>
          ESC
        </button>
      </div>

      <div className="search-dialog-body" aria-live="polite">
        {isSearching ? (
          <div className="search-state-msg">{t.search.searching}</div>
        ) : results.length === 0 ? (
          <div className="search-state-msg">
            <strong style={{ color: "var(--text)" }}>{t.search.emptyTitle}</strong>
            <span>{t.search.emptyHint}</span>
            <button
              type="button"
              className="btn-secondary"
              onClick={() => {
                setQuery("");
                inputRef.current?.focus();
              }}
            >
              {t.search.reset}
            </button>
          </div>
        ) : (
          <div className="search-result-list">
            {results.map((item) => (
              <button
                key={item.id}
                type="button"
                className="search-result-item"
                style={{ textAlign: "left", background: "transparent", width: "100%" }}
                onClick={() => handleSelect(item.href)}
              >
                <span className="search-result-meta">{item.group}</span>
                <span className="search-result-title">{item.title}</span>
                <span className="search-result-desc">{item.desc}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="search-dialog-foot">
        <span>{t.search.shortcutHint}</span>
        <span>Ctrl+K / Cmd+K</span>
      </div>
    </dialog>
  );
}
