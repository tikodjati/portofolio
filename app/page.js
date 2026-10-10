import { Fragment } from "react";
import Section from "../components/Section";
import Typing from "../components/Typing";
import Avatar from "../components/Avatar";
import Status from "../components/Status";
import Counter from "../components/Counter";
import Terminal from "../components/Terminal";
import Scramble from "../components/Scramble";
import { ME, PROFILE, STATS, SKILLS, CERTS, PROJECTS, WRITEUPS, EXP, CONTACT } from "../data/content";

const NAV = ["whoami", "skills", "certs", "projects", "writeups", "experience", "terminal", "contact"];

export default function Home() {
  const term = {
    name: ME.name,
    bio: ME.bio,
    skills: SKILLS.flatMap((g) => (g.items ? g.items.map((i) => i.n) : g.tags)),
    certs: CERTS.map((c) => `${c.name} (${c.org}, ${c.year})`),
    projects: PROJECTS.map((p) => `${p.file}: ${p.name}`),
    writeups: WRITEUPS.map((w) => `${w.title} [${w.cat}]`),
    contact: CONTACT,
  };

  return (
    <>
      <nav>
        <div className="nav-brand">
          <span className="nav-prompt">root@backtrack:~#</span>
          <b>~/{ME.name.toLowerCase().replace(/\s+/g, "-")}</b>
        </div>
        <div className="nav-links">
          {NAV.map((s) => (
            <a key={s} href={"#" + s}>
              <span className="bracket">[</span>{s}<span className="bracket">]</span>
            </a>
          ))}
        </div>
        <div className="nav-meta">
          <span className="nav-badge">BT5-R3 // SEC</span>
        </div>
      </nav>

      <main>
        <section className="hero">
          <div className="hero-row">
            <div className="hero-text">
              <Status location={ME.location} />
              <h1 className="glitch" data-text={ME.name}>
                <Scramble text={ME.name} />
              </h1>
              <div className="hero-role-line">
                <span className="role-prefix">&gt;</span>
                <Typing words={ME.roles} />
              </div>
              <p className="lead">{ME.bio}</p>
              <div className="btns">
                <a className="btn btn-primary" href="#projects">
                  <span className="btn-icon">&gt;</span> Lihat project
                </a>
                <a className="btn btn-alt" href="#terminal">
                  <span className="btn-icon">$</span> Coba terminal
                </a>
              </div>
            </div>
            <Avatar name={ME.name} />
          </div>
        </section>

        <Section id="whoami" cmd="cat whoami.txt">
          <div className="kv-card">
            <dl className="kv">
              {PROFILE.map(([k, v]) => (
                <div className="kv-row" key={k}>
                  <dt><span className="dt-bullet">&gt;</span> {k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="stats">
            {STATS.map((s, idx) => (
              <div className="stat" key={s.l}>
                <div className="stat-header">
                  <span className="stat-index">0{idx + 1}</span>
                  <span className="stat-dot" />
                </div>
                <b><Counter to={s.v} />{s.plus ? "+" : ""}</b>
                <span>{s.l}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section id="skills" cmd="./skills --verbose">
          <div className="skills-container">
            {SKILLS.map((g) => (
              <div className="skill-card" key={g.level}>
                <div className="skill-head">
                  <span className="skill-tier-badge">{g.level}</span>
                </div>
                {g.items && (
                  <div className="skill-bars">
                    {g.items.map((i) => (
                      <div className="bar" key={i.n}>
                        <span className="bar-label">{i.n}</span>
                        <div className="bar-track">
                          <i style={{ "--v": i.v + "%" }} />
                        </div>
                        <b className="bar-val">{i.v}%</b>
                      </div>
                    ))}
                  </div>
                )}
                {g.tags && (
                  <div className="tags skill-tags">
                    {g.tags.map((t) => (
                      <span className="tag" key={t}>{t}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Section>

        <Section id="certs" cmd="ls ~/certs/">
          <div className="grid">
            {CERTS.map((c) => (
              <div className="card cert-card" key={c.name}>
                <div className="card-topline">
                  <span className="cert-pill">VERIFIED CREDENTIAL</span>
                  <span className="card-sub">{c.year}</span>
                </div>
                <h3>{c.name}</h3>
                <div className="meta cert-org">
                  <span className="org-label">ISSUER:</span> {c.org}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" cmd="ls -la ~/projects/">
          <div className="grid">
            {PROJECTS.map((p) => (
              <div className="card project-card" key={p.file}>
                <div className="card-topline">
                  <div className="file-chip">
                    <span className="file-dot" />
                    <span className="file-name">{p.file}</span>
                  </div>
                  <span className="card-status-badge">TOOL</span>
                </div>
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <div className="tags project-tags">
                  {p.tech.map((t) => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>
                <div className="card-action">
                  <a className="project-link-btn" href={p.link} target="_blank" rel="noopener noreferrer">
                    <span>Lihat detail</span>
                    <span className="arrow-sym">&rarr;</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* <Section id="writeups" cmd="ls ~/writeups/">
          <div className="grid">
            {WRITEUPS.map((w) => (
              <div className="card" key={w.title}>
                <h3>{w.title}</h3>
                <div className="meta">{w.ev} | {w.cat} | {w.date}</div>
                <p><a href={w.link}>Baca writeup</a></p>
              </div>
            ))}
          </div>
        </Section> */}

        <Section id="experience" cmd="ls -l /experience/">
          <div className="tl">
            {EXP.map((e) => (
              <div key={e.role} className={`tl-item ${e.now ? "now" : ""}`}>
                <div className="tl-card">
                  <div className="tl-header">
                    {e.now && <span className="badge">OPERASI AKTIF SAAT INI</span>}
                    <h3>{e.role}</h3>
                    <div className="meta">{e.org} &bull; {e.time}</div>
                  </div>
                  <ul>
                    {e.pts.map((p) => (
                      <li key={p}>
                        <span className="li-arrow">&rarr;</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="terminal" cmd="./terminal --interactive">
          <p className="lead" style={{ marginTop: 0 }}>
            Ketik <b>help</b> untuk melihat perintah yang tersedia. Temukan petunjuk tersembunyi di dalam sistem.
          </p>
          <Terminal d={term} />
        </Section>

        <Section id="contact" cmd="./contact_me.sh">
          <div className="contact-wrapper">
            <div className="btns contact-btns">
              {CONTACT.map((c) => (
                <a className="btn contact-btn" key={c.n} href={c.u} target="_blank" rel="noopener noreferrer">
                  <span className="btn-bracket">[</span> {c.n} <span className="btn-bracket">]</span>
                </a>
              ))}
            </div>
            <div className="terminal-echo">
              <span className="ps">root@backtrack:~#</span> echo &quot;Tetap penasaran. Bongkar hanya dengan izin.&quot;
            </div>
          </div>
        </Section>
      </main>

      <footer>
        <div className="footer-wrap">
          <div className="footer-meta">
            © 2026 {ME.name} &bull; BackTrack Security Portfolio // Built with Next.js
          </div>
          <div className="footer-tags">
            <span className="ft-badge">DISTRO: BACKTRACK 5.3</span>
            <span className="ft-badge">ARCH: x86_64</span>
            <span className="ft-badge">STATUS: STEALTH</span>
          </div>
        </div>
      </footer>
    </>
  );
}
