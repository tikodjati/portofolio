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
        <b>~/{ME.name.toLowerCase().replace(/\s+/g, "-")}</b>
        {NAV.map((s) => <a key={s} href={"#" + s}>{s}</a>)}
      </nav>

      <main>
        <section className="hero">
          <div className="hero-row">
            <div className="hero-text">
              <Status location={ME.location} />
              <h1 className="glitch"><Scramble text={ME.name} /></h1>
              <Typing words={ME.roles} />
              <p className="lead">{ME.bio}</p>
              <div className="btns">
                <a className="btn" href="#projects">Lihat project</a>
                <a className="btn alt" href="#terminal">Coba terminal</a>
              </div>
            </div>
            <Avatar name={ME.name} />
          </div>
        </section>

        <Section id="whoami" cmd="cat whoami.txt">
          <dl className="kv">
            {PROFILE.map(([k, v]) => (<Fragment key={k}><dt>{k}</dt><dd>{v}</dd></Fragment>))}
          </dl>
          <div className="stats">
            {STATS.map((s) => (
              <div className="stat" key={s.l}>
                <b><Counter to={s.v} />{s.plus ? "+" : ""}</b>
                <span>{s.l}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section id="skills" cmd="./skills --verbose">
          {SKILLS.map((g) => (
            <div className="skill" key={g.level}>
              <h3>[{g.level}]</h3>
              {g.items && g.items.map((i) => (
                <div className="bar" key={i.n}>
                  <span>{i.n}</span>
                  <i style={{ "--v": i.v + "%" }} />
                  <b>{i.v}%</b>
                </div>
              ))}
              {g.tags && <div className="tags">{g.tags.map((t) => <span className="tag" key={t}>{t}</span>)}</div>}
            </div>
          ))}
        </Section>

        <Section id="certs" cmd="ls ~/certs/">
          <div className="grid">
            {CERTS.map((c) => (
              <div className="card" key={c.name}>
                <h3>{c.name}</h3>
                <div className="meta">{c.org}, {c.year}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" cmd="ls -la ~/projects/">
          <div className="grid">
            {PROJECTS.map((p) => (
              <div className="card" key={p.file}>
                <div className="meta">{p.file}</div>
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <div className="tags" style={{ marginBottom: 10 }}>{p.tech.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
                <a href={p.link}>Lihat detail</a>
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
              <div key={e.role} className={e.now ? "now" : ""}>
                {e.now && <span className="badge">POSISI SAAT INI</span>}
                <h3>{e.role}</h3>
                <div className="meta">{e.org} | {e.time}</div>
                <ul>{e.pts.map((p) => <li key={p}>{p}</li>)}</ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="terminal" cmd="./terminal --interactive">
          <p className="lead" style={{ marginTop: 0 }}>Coba ketik <b>help</b>. Ada satu easter egg tersembunyi.</p>
          <Terminal d={term} />
        </Section>

        <Section id="contact" cmd="./contact_me.sh">
          <div className="btns">
            {CONTACT.map((c) => (
              <a className="btn" key={c.n} href={c.u} target="_blank" rel="noopener noreferrer">{c.n}</a>
            ))}
          </div>
          <p className="meta" style={{ marginTop: 20 }}>echo "Tetap penasaran. Bongkar hanya dengan izin."</p>
        </Section>
      </main>

      <footer>© 2026 {ME.name}. Security Portfolio, dibuat dengan Next.js.</footer>
    </>
  );
}
