import Image from "next/image";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import CursorLight from "@/components/CursorLight";
import HeroVisual from "@/components/HeroVisual";
import { profile, stats, skills, projects, experience, education } from "@/lib/data";

export default function Home() {
  return (
    <>
      <div className="blobs" aria-hidden="true">
        <span className="blob b1" />
        <span className="blob b2" />
        <span className="blob b3" />
      </div>
      <CursorLight />
      <Nav />
      <main id="top">
        <section className="hero container">
          <div className="hero-copy">
            <p className="greeting">Hi, I&apos;m</p>
            <h1>{profile.name}</h1>
            <p className="role">{profile.title}</p>
            <p className="lead">{profile.intro}</p>
            <div className="actions">
              <a className="btn btn-primary" href="#projects">View my projects</a>
              <a className="btn btn-secondary" href={profile.resume} download>Download resume</a>
            </div>
            <div className="socials">
              <a className="icon-btn" href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">GH</a>
              <a className="icon-btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">in</a>
              <a className="icon-btn" href={`mailto:${profile.email}`} aria-label="Send an email">@</a>
            </div>
          </div>
          <div className="hero-media">
            <div className="photo surface">
              <Image src={profile.photo} alt={profile.photoAlt} width={900} height={1200} priority sizes="(max-width: 860px) 80vw, 420px" />
            </div>
            <HeroVisual />
          </div>
        </section>

        <Reveal className="container">
          <div className="stats surface" role="list">
            {stats.map((s) => (
              <div className="stat" role="listitem" key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <section id="about" className="container section">
          <Reveal>
            <div className="surface about">
              <h2>Turning ideas into real solutions</h2>
              <div>
                {profile.about.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <section id="skills" className="container section">
          <h2 className="section-title">Tools I work with</h2>
          <div className="grid skills">
            {skills.map((g, i) => (
              <Reveal key={g.group} delay={i * 0.05}>
                <div className="surface card">
                  <h3>{g.group}</h3>
                  <ul className="chips">
                    {g.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="projects" className="container section">
          <h2 className="section-title">Projects</h2>
          <div className="grid projects">
            {projects.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.08}>
                <article className="surface card lift project">
                  <div className="proj-visual">
                    <Image src={p.image} alt={p.imageAlt} fill sizes="(max-width: 960px) 90vw, 360px" style={{ objectFit: "cover", objectPosition: p.position }} />
                  </div>
                  <h3>{p.name}</h3>
                  <p>{p.description}</p>
                  <a className="btn btn-secondary" href={p.repo} target="_blank" rel="noopener noreferrer" aria-label={`${p.name} on GitHub (opens in a new tab)`}>
                    View on GitHub
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="experience" className="container section">
          <h2 className="section-title">Experience</h2>
          {experience.map((e) => (
            <Reveal key={e.role}>
              <div className="surface card">
                <h3>{e.role}</h3>
                <p className="meta">{e.company}, {e.period}</p>
                <ul className="bullets">
                  {e.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </section>

        <section id="education" className="container section">
          <h2 className="section-title">Education</h2>
          <Reveal>
            <div className="surface card">
              <h3>{education.degree}</h3>
              <p className="meta">{education.school}</p>
              <p>{education.period}</p>
              <p>{education.detail}</p>
            </div>
          </Reveal>
        </section>

        <section id="contact" className="container section">
          <Reveal>
            <div className="surface contact">
              <div>
                <h2>Let&apos;s build something great</h2>
                <p>Have a project in mind or want to collaborate? Send me a message.</p>
                <div className="actions">
                  <a className="btn btn-primary" href={`mailto:${profile.email}`}>Email me</a>
                  <a className="btn btn-secondary" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  <a className="btn btn-secondary" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
              <div className="contact-info">
                <p>{profile.email}</p>
                <p>{profile.location}</p>
                <p><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">linkedin.com/in/summukh-parsai-41460226b</a></p>
                <p><a href={profile.github} target="_blank" rel="noopener noreferrer">github.com/summukhparsai</a></p>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <footer className="footer container">
        <p>© {new Date().getFullYear()} {profile.name}</p>
      </footer>
    </>
  );
}
