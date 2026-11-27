"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE, UI_COPY } from "../data/content";
import { useSite } from "./SiteProvider";

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme, lang, setLang, openSearch } = useSite();
  const [menuOpen, setMenuOpen] = useState(false);
  const triggerRef = useRef(null);
  const t = UI_COPY[lang];

  const isLearn = pathname === "/learn" || pathname === "/learn/";

  const navLinks = [
    { href: "/#about", label: t.nav.about, active: false },
    { href: "/#projects", label: t.nav.projects, active: false },
    { href: "/#experience", label: t.nav.experience, active: false },
    { href: "/learn", label: t.nav.learn, active: isLearn },
    { href: "/#contact", label: t.nav.contact, active: false },
  ];

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        triggerRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <a href="#main-content" className="skip-link">
        {t.skipLink}
      </a>

      <nav className="nav-inner" aria-label="Main navigation">
        <Link href="/" className="nav-brand">
          <span className="nav-brand-mark" aria-hidden="true">
            k
          </span>
          <span>{SITE.brand}</span>
        </Link>

        <div className="nav-center">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link ${item.active ? "is-active" : ""}`}
              aria-current={item.active ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="nav-actions">
          <button
            type="button"
            className="search-trigger"
            onClick={openSearch}
            aria-label={`${t.nav.search} (Ctrl+K)`}
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
            <span className="search-trigger-label">{t.nav.search}</span>
            <kbd className="kbd-chip">Ctrl+K</kbd>
          </button>

          <div className="nav-desktop-controls">
            <div className="segmented-control" role="group" aria-label={t.nav.langToggleLabel}>
              <button
                type="button"
                className="segmented-btn"
                aria-pressed={lang === "id"}
                onClick={() => setLang("id")}
              >
                ID
              </button>
              <button
                type="button"
                className="segmented-btn"
                aria-pressed={lang === "en"}
                onClick={() => setLang("en")}
              >
                EN
              </button>
            </div>

            <button
              type="button"
              className="icon-btn"
              onClick={toggleTheme}
              aria-label={t.nav.themeToggleLabel}
              aria-pressed={theme === "dark"}
            >
              {theme === "light" ? (
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
                </svg>
              ) : (
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                </svg>
              )}
              <span className="mono" style={{ fontSize: "12px" }}>
                {theme === "light" ? t.nav.themeDark : t.nav.themeLight}
              </span>
            </button>
          </div>

          <button
            ref={triggerRef}
            type="button"
            className="icon-btn mobile-menu-trigger"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-drawer"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              {menuOpen ? (
                <path d="M6 6l12 12M18 6 6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
            <span>{menuOpen ? t.nav.menuClose : t.nav.menuOpen}</span>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div id="mobile-nav-drawer" className="mobile-drawer">
          <div className="mobile-drawer-links">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`mobile-drawer-link ${item.active ? "is-active" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
          <div className="mobile-drawer-controls">
            <div className="segmented-control" role="group" aria-label={t.nav.langToggleLabel}>
              <button
                type="button"
                className="segmented-btn"
                aria-pressed={lang === "id"}
                onClick={() => setLang("id")}
              >
                ID
              </button>
              <button
                type="button"
                className="segmented-btn"
                aria-pressed={lang === "en"}
                onClick={() => setLang("en")}
              >
                EN
              </button>
            </div>

            <button
              type="button"
              className="icon-btn"
              onClick={toggleTheme}
              aria-label={t.nav.themeToggleLabel}
              aria-pressed={theme === "dark"}
            >
              <span className="mono" style={{ fontSize: "12px" }}>
                {theme === "light" ? t.nav.themeDark : t.nav.themeLight}
              </span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
