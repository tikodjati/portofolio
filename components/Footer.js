"use client";
import Link from "next/link";
import { CONTACT, ME, UI_COPY } from "../data/content";
import { useSite } from "./SiteProvider";

export default function Footer() {
  const { lang } = useSite();
  const t = UI_COPY[lang];

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <p>
            © 2026 {ME.name}. {t.footer.builtWith}
          </p>
        </div>
        <div className="footer-links">
          <Link href="/learn" className="editorial-link">
            /learn
          </Link>
          {CONTACT.map((c) => (
            <a
              key={c.n}
              href={c.u}
              target={c.u.startsWith("http") ? "_blank" : undefined}
              rel={c.u.startsWith("http") ? "noopener noreferrer" : undefined}
              className="editorial-link"
            >
              {c.n}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
