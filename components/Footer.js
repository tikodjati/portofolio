"use client";
import Link from "next/link";
import { CONTACT, ME } from "../data/content";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <p>© 2026 {ME.name}</p>
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
