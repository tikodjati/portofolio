"use client";
import { Fragment } from "react";
import Link from "next/link";
import {
  CERTS,
  CONTACT,
  EDUCATION,
  EXP,
  ME,
  PROJECTS,
  SKILLS,
  TOOL_STRIP,
  UI_COPY,
} from "../data/content";
import { LEARN_COPY, TRACK_OVERVIEW } from "../data/learn";
import { useSite } from "../components/SiteProvider";
import Status from "../components/Status";
import Terminal from "../components/Terminal";

export default function HomePage() {
  const { lang } = useSite();
  const t = UI_COPY[lang];
  const lt = LEARN_COPY[lang];

  return (
    <main id="main-content" tabIndex={-1}>
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-main">
              <Status location={ME.location} label={t.hero.statusLabel} />
              <h1 className="hero-title">{ME.name}.</h1>
              <p className="hero-role">{ME.roleLine[lang]}</p>
              <p className="hero-bio">{ME.bio[lang]}</p>

              <div className="hero-actions">
                <Link href="/learn" className="btn-primary">
                  {t.hero.ctaLearn}
                </Link>
                <a href="#projects" className="btn-secondary">
                  {t.hero.ctaProjects}
                </a>
                <a href="#terminal" className="btn-secondary">
                  {t.hero.ctaTerminal}
                </a>
              </div>

              <div className="hero-social-row" aria-label={t.contact.linksLabel}>
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

            <figure className="hero-portrait-frame">
              <div className="hero-portrait-img-wrap">
                <img
                  src="/foto.jpg"
                  alt={t.hero.avatarAlt}
                  width="400"
                  height="400"
                  fetchPriority="high"
                  className="hero-portrait-img"
                />
              </div>
              <figcaption className="hero-portrait-caption">
                <span>{t.hero.avatarCaption}</span>
                <span>@tikodjati</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <div className="tool-strip" aria-label={t.toolsLabel}>
        <div className="container">
          <div className="tool-strip-inner">
            <span className="tool-strip-label">{t.toolsLabel}:</span>
            {TOOL_STRIP.map((tool, idx) => (
              <Fragment key={tool}>
                <span className="tool-item">{tool}</span>
                {idx < TOOL_STRIP.length - 1 && (
                  <span className="tool-sep" aria-hidden="true">
                    /
                  </span>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </div>

      <section id="about" className="band-plain">
        <div className="container-narrow">
          <p className="section-eyebrow">{t.about.eyebrow}</p>
          <div className="narrative-stack">
            <h2 className="narrative-heading">{t.about.heading}</h2>
            {t.about.paragraphs.map((p, idx) => (
              <p key={idx} className="narrative-p">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section id="credentials" className="band-subtle">
        <div className="container">
          <div className="edu-cert-grid">
            <div>
              <h2 className="meta-heading">{t.about.educationLabel}</h2>
              <div className="edu-card">
                <p className="edu-inst">{EDUCATION.institution}</p>
                <p className="edu-degree">{EDUCATION.degree[lang]}</p>
                <p className="edu-meta">
                  {EDUCATION.period} · {EDUCATION.location}
                </p>
                <p className="edu-meta">{EDUCATION.focus[lang]}</p>
              </div>

              <div className="skills-compact-groups">
                {SKILLS.map((group) => (
                  <div key={group.level.en}>
                    <p className="skill-group-title">{group.level[lang]}</p>
                    <div className="tag-list">
                      {group.tags.map((tag) => (
                        <span key={tag} className="tag-chip">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="meta-heading">{t.about.certsLabel}</h2>
              <ul className="cert-list">
                {CERTS.map((c) => (
                  <li key={c.credentialId} className="cert-item">
                    <p className="cert-name">{c.name}</p>
                    <p className="cert-meta">
                      {c.org} · {c.year}
                    </p>
                    <p className="cert-id">
                      {t.about.credentialIdLabel}: {c.credentialId}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="learn-snapshot" className="band-plain">
        <div className="container">
          <div className="learn-preview-header">
            <div>
              <p className="section-eyebrow">{t.learnPreview.eyebrow}</p>
              <h2 className="section-heading">{t.learnPreview.heading}</h2>
              <p className="section-lead">{t.learnPreview.subtitle}</p>
            </div>
            <Link href="/learn" className="btn-primary">
              {t.learnPreview.cta}
            </Link>
          </div>

          <div className="learn-track-rows">
            {TRACK_OVERVIEW.map((tr) => (
              <Link key={tr.id} href={`/learn${tr.anchor}`} className="learn-track-row">
                <div>
                  <div className="track-row-title">{tr.name}</div>
                  <div className="track-row-updated">
                    {t.learnPreview.updatedLabel}: {tr.updated}
                  </div>
                </div>
                <p className="track-row-summary">{tr.summary[lang]}</p>
                <div>
                  <span
                    className={`status-pill ${
                      tr.status === "in_progress" ? "is-active" : ""
                    }`}
                  >
                    {tr.metric} · {lt.statusLabels[tr.status]}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="band-subtle">
        <div className="container">
          <p className="section-eyebrow">{t.projects.eyebrow}</p>
          <h2 className="section-heading">{t.projects.heading}</h2>
          <p className="section-lead">{t.projects.subtitle}</p>

          <div className="projects-grid">
            {PROJECTS.map((p) => (
              <article key={p.file} className="project-card">
                <div className="project-card-top">
                  <span className="project-file">{p.file}</span>
                  <span className="project-cat">{p.category}</span>
                </div>
                <h3 className="project-title">{p.name}</h3>
                <p className="project-desc">{p.desc[lang]}</p>
                <div className="tag-list" style={{ marginBottom: "16px" }}>
                  {p.tech.map((tech) => (
                    <span key={tech} className="tag-chip">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-footer">
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <span>{t.projects.inspect}</span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="M7 17 17 7M9 7h8v8" />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="band-plain">
        <div className="container">
          <p className="section-eyebrow">{t.experience.eyebrow}</p>
          <h2 className="section-heading">{t.experience.heading}</h2>
          <p className="section-lead">{t.experience.subtitle}</p>

          <div className="work-list">
            {EXP.map((e) => (
              <article key={`${e.role}-${e.org}`} className="work-row">
                <div className="work-date">{e.time}</div>
                <div>
                  <div className="work-role-header">
                    <h3 className="work-role">{e.role}</h3>
                    {e.now && (
                      <span className="status-pill is-active">{t.experience.currentBadge}</span>
                    )}
                  </div>
                  <p className="work-org">{e.org}</p>
                  <ul className="work-bullets">
                    {e.pts[lang].map((pt, idx) => (
                      <li key={idx}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="terminal" className="band-subtle">
        <div className="container">
          <p className="section-eyebrow">{t.terminal.eyebrow}</p>
          <h2 className="section-heading">{t.terminal.heading}</h2>
          <p className="section-lead">{t.terminal.subtitle}</p>
          <Terminal />
        </div>
      </section>

      <section id="contact" className="band-plain">
        <div className="container">
          <div className="contact-layout">
            <p className="section-eyebrow">{t.contact.eyebrow}</p>
            <h2 className="section-heading">{t.contact.heading}</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "16px" }}>
              {t.contact.paragraphs.map((p, idx) => (
                <p key={idx} className="section-lead">
                  {p}
                </p>
              ))}
            </div>

            <div className="contact-email-wrap">
              <p className="contact-field-label">{t.contact.emailLabel}</p>
              <a href={`mailto:${ME.email}`} className="contact-email">
                {ME.email}
              </a>
            </div>

            <div className="contact-links">
              {CONTACT.filter((c) => c.n !== "Email").map((c) => (
                <a
                  key={c.n}
                  href={c.u}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-link"
                >
                  {c.n}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
