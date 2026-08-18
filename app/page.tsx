import Link from "next/link";
import { labs } from "@/lib/labs";
import "./portfolio.css";

const EMAIL = "danielrippervitorino@gmail.com";
const PHONE_HREF = "tel:+5519983413233";
const PHONE_TEXT = "+55 (19) 98341-3233";
const GITHUB = "https://github.com/iDanielrv";
const LINKEDIN = "https://www.linkedin.com/in/daniel-ripperv";

export default function Home() {
  return (
    <div className="wrap">
      <header className="bar">
        <div className="bar-mark">DANIEL RIPPER VITORINO</div>
        <ul className="bar-nav">
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </header>

      {/* ── HERO ── */}
      <section className="hero">
        <h1>
          Four years shipping software that <em>stayed</em> shipped.
        </h1>
        <div className="hero-facts">
          <span>
            <b>Fullstack</b> · React, Next.js, Node.js, Nest.js
          </span>
          <span>
            <b>GMT-3</b> · overlap with US Eastern
          </span>
          <span>
            <b>Available</b> as contractor (PJ) · remote
          </span>
        </div>
        <div className="hero-cta">
          <a className="btn btn-solid" href="#work">
            See the work
          </a>
          <a className="btn btn-ghost" href={`mailto:${EMAIL}`}>
            Get in touch
          </a>
        </div>
      </section>

      {/* ── SELECTED WORK ── */}
      <h2 className="sec-label" id="work">
        Selected work
      </h2>

      <article className="case reveal">
        <div className="case-num">01</div>
        <div className="case-body">
          <h3>Hybriun — custom software, end to end</h3>
          <div className="case-role">
            Fullstack Developer · 2024 — Present · Remote
          </div>
          <p>
            Requirements gathering through post-go-live support, across several
            production projects at once. Built a reusable component layer that
            became the default starting point for every new interface.
          </p>
          <div className="stack">
            <span>Nest.js</span>
            <span>TypeScript</span>
            <span>React</span>
            <span>Next.js</span>
            <span>Prisma</span>
            <span>MySQL</span>
          </div>
        </div>
        <div className="result">
          <span className="result-big">~30%</span>
          <span className="result-cap">
            less delivery time on new interfaces, from the shared component
            layer
          </span>
        </div>
      </article>

      <article className="case reveal">
        <div className="case-num">02</div>
        <div className="case-body">
          <h3>Hyundai Autoever — internal corporate systems</h3>
          <div className="case-role">Fullstack Developer · 2022 — 2024</div>
          <p>
            Internal tooling for corporate users at a global automotive group,
            in an environment with structured QA, code review and Git Flow.
            Integrated third-party REST APIs and internal microservices to
            replace manual operational steps.
          </p>
          <div className="stack">
            <span>Vue.js</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>MongoDB</span>
          </div>
        </div>
        <div className="result">
          <span className="result-big is-word">Enterprise</span>
          <span className="result-cap">
            two years inside a global automotive group, with QA, code review and
            Git Flow as the norm
          </span>
        </div>
      </article>

      <article className="case reveal">
        <div className="case-num">03</div>
        <div className="case-body">
          <h3>Labs — storefront studies</h3>
          <div className="case-role">
            Self-directed · art direction &amp; front-end
          </div>
          <p>
            Landing pages for Brazilian local businesses — butcher, pet shop,
            dental practice, psychology, barbershop and more. Hand-written HTML
            and CSS, with no framework and no component library.
          </p>
          <div className="stack">
            <span>HTML</span>
            <span>CSS</span>
            <span>SVG</span>
            <span>Art direction</span>
          </div>
          <Link className="case-link" href="/labs">
            Open the gallery <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="result">
          <span className="result-big">{labs.length}</span>
          <span className="result-cap">
            complete pages, each a different art direction — the visual range on
            display
          </span>
        </div>
      </article>

      {/* ── EXPERIENCE ── */}
      <h2 className="sec-label" id="experience">
        Experience
      </h2>

      <div className="exp reveal">
        <div className="exp-meta">
          <span className="exp-company">Hybriun</span>
          2024 — Present
          <br />
          Brazil (Remote)
        </div>
        <div>
          <p className="exp-role">Fullstack Developer</p>
          <ul className="exp-bullets">
            <li>
              Deliver end-to-end custom software — requirements gathering,
              architecture, development, testing, and post-go-live support
            </li>
            <li>
              Build RESTful APIs with Nest.js (TypeScript) and responsive
              interfaces with React/Next.js, reducing delivery time by ~30% with
              reusable components
            </li>
            <li>
              Design and version MySQL databases with Prisma ORM, ensuring safe
              migrations and referential integrity
            </li>
            <li>
              Integrate generative AI (GitHub Copilot) into the development
              workflow, boosting productivity and code consistency
            </li>
            <li>
              Maintain and evolve multiple production projects simultaneously,
              prioritizing incident fixes and new features
            </li>
          </ul>
        </div>
      </div>

      <div className="exp reveal">
        <div className="exp-meta">
          <span className="exp-company">Hyundai Autoever</span>
          2022 — 2024
          <br />
          Brazil
        </div>
        <div>
          <p className="exp-role">Fullstack Developer</p>
          <ul className="exp-bullets">
            <li>
              Developed and maintained internal systems with Vue.js on the
              frontend and Node.js/Express on the backend, serving corporate
              users
            </li>
            <li>
              Collaborated with cross-functional teams in an environment with
              structured QA, code review, and Git Flow processes
            </li>
            <li>
              Integrated third-party REST APIs and internal microservices,
              modernizing operational processes
            </li>
            <li>
              Implemented features with MongoDB/Mongoose for flexible
              non-relational data storage
            </li>
          </ul>
        </div>
      </div>

      {/* ── SKILLS ── */}
      <h2 className="sec-label" id="skills">
        Skills
      </h2>

      <div className="skills-group reveal">
        <p className="skills-cat">Technical stack</p>
        <div className="skills-grid">
          {[
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "Vue.js",
            "Node.js",
            "Nest.js",
            "Express.js",
            "Prisma ORM",
            "MySQL",
            "MongoDB",
            "REST APIs",
            "HTML5",
            "CSS3",
            "Tailwind CSS",
          ].map((s) => (
            <span className="chip" key={s}>
              {s}
            </span>
          ))}
        </div>
      </div>

      <div className="skills-group reveal">
        <p className="skills-cat">Tools &amp; workflow</p>
        <div className="skills-grid">
          {[
            "Git",
            "GitHub",
            "GitHub Copilot",
            "DBeaver",
            "ClickUp",
            "VS Code",
            "Docker",
            "Postman",
          ].map((s) => (
            <span className="chip" key={s}>
              {s}
            </span>
          ))}
        </div>
      </div>

      <div className="skills-group reveal">
        <p className="skills-cat">Soft skills</p>
        <div className="skills-grid">
          {[
            "Autonomy & Ownership",
            "Client Communication",
            "Problem Solving",
            "End-to-end Delivery",
            "Continuous Learning",
          ].map((s) => (
            <span className="chip" key={s}>
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* ── EDUCATION · LANGUAGES · CONTACT ── */}
      <h2 className="sec-label" id="contact">
        Education, languages &amp; contact
      </h2>

      <div className="cols3 reveal">
        <div>
          <h3>Education</h3>
          <ul className="deflist">
            <li>
              Bachelor&apos;s in Computer Science <span>Expected 2026</span>
            </li>
            <li>
              Faculdade de Americana <span>FAM</span>
            </li>
          </ul>
        </div>

        <div>
          <h3>Languages</h3>
          <ul className="deflist">
            <li>
              Portuguese <span>Native</span>
            </li>
            <li>
              English <span>Advanced</span>
            </li>
          </ul>
        </div>

        <div>
          <h3>Contact</h3>
          <ul className="deflist">
            <li>
              <a href={`mailto:${EMAIL}`}>Email</a> <span>{EMAIL}</span>
            </li>
            <li>
              <a href={PHONE_HREF}>Phone</a> <span>{PHONE_TEXT}</span>
            </li>
            <li>
              <a href={GITHUB} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>{" "}
              <span>iDanielrv</span>
            </li>
            <li>
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>{" "}
              <span>daniel-ripperv</span>
            </li>
          </ul>
        </div>
      </div>

      <footer className="foot">
        <span>Daniel Ripper Vitorino — Fullstack Developer</span>
        <span>Americana, São Paulo — Brazil · Available for work</span>
      </footer>
    </div>
  );
}
