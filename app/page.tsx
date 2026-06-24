"use client";

import { useEffect, useRef } from "react";
import "./portfolio.css";

export default function Home() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;

    let mx = 0,
      my = 0,
      rx = 0,
      ry = 0;
    let raf = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = `${mx - 5}px`;
      cursor.style.top = `${my - 5}px`;
    };
    document.addEventListener("mousemove", handleMouseMove);

    function animRing() {
      rx += (mx - rx - 16) * 0.12;
      ry += (my - ry - 16) * 0.12;
      ring!.style.left = `${rx}px`;
      ring!.style.top = `${ry}px`;
      raf = requestAnimationFrame(animRing);
    }
    animRing();

    const hoverEls = document.querySelectorAll<HTMLElement>("a, button, .skill-chip");
    const onEnter = () => {
      cursor.style.transform = "scale(2.5)";
      ring.style.width = "48px";
      ring.style.height = "48px";
    };
    const onLeave = () => {
      cursor.style.transform = "scale(1)";
      ring.style.width = "32px";
      ring.style.height = "32px";
    };
    hoverEls.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    const revealEls = document.querySelectorAll<HTMLElement>(".reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("visible"), i * 80);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    revealEls.forEach((el) => obs.observe(el));

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(raf);
      hoverEls.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
      obs.disconnect();
    };
  }, []);

  return (
    <>
      <div className="cursor" id="cursor" ref={cursorRef}></div>
      <div className="cursor-ring" id="cursorRing" ref={ringRef}></div>

      {/* NAV */}
      <nav>
        <div className="nav-logo">
          D<span>.</span>RV
        </div>
        <ul className="nav-links">
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* HERO */}
      <section id="hero">
        <div className="hero-grid"></div>
        <div className="hero-glow"></div>
        <div className="hero-glow2"></div>
        <div className="hero-content">
          <div className="hero-eyebrow">
            <div className="eyebrow-line"></div>
            <span>Available for opportunities</span>
          </div>

          <h1 className="hero-name">
            Daniel
            <br />
            <em>RV</em>
          </h1>

          <p className="hero-title">
            <span>Fullstack Developer</span> &nbsp;·&nbsp; React &nbsp;·&nbsp; Next.js &nbsp;·&nbsp; Nest.js
            <span className="blink"></span>
          </p>

          <p className="hero-summary">
            3+ years building complete web applications — from requirements to deployment. Combining
            corporate-scale discipline with agile startup delivery.
          </p>

          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.9 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.72 6.72l1.16-1.16a2 2 0 0 1 2.11-.45c.9.32 1.85.52 2.81.7a2 2 0 0 1 1.72 2.01z" />
              </svg>
              Get in touch
            </a>
            <a href="#experience" className="btn btn-ghost">
              View experience →
            </a>
          </div>

          <div className="hero-contacts">
            <a href="mailto:danielrippervitorino@gmail.com" className="contact-chip">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              danielrippervitorino@gmail.com
            </a>
            <a href="https://github.com/iDanielrv" target="_blank" className="contact-chip">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              github.com/iDanielrv
            </a>
            <a href="https://linkedin.com/in/seu-perfil" target="_blank" className="contact-chip">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              linkedin.com/in/daniel-ripperv
            </a>
            <span className="contact-chip">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Americana, SP — Brazil
            </span>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <div className="inner">
          <div className="section-header reveal">
            <span className="section-num">01</span>
            <h2 className="section-title">Skills</h2>
            <div className="section-line"></div>
          </div>

          <div className="skills-category reveal">
            <div className="skills-cat-label">Technical Stack</div>
            <div className="skills-grid">
              <div className="skill-chip">JavaScript</div>
              <div className="skill-chip">TypeScript</div>
              <div className="skill-chip">React</div>
              <div className="skill-chip">Next.js</div>
              <div className="skill-chip">Vue.js</div>
              <div className="skill-chip">Node.js</div>
              <div className="skill-chip">Nest.js</div>
              <div className="skill-chip">Express.js</div>
              <div className="skill-chip">Prisma ORM</div>
              <div className="skill-chip">MySQL</div>
              <div className="skill-chip">MongoDB</div>
              <div className="skill-chip">REST APIs</div>
              <div className="skill-chip">HTML5</div>
              <div className="skill-chip">CSS3</div>
              <div className="skill-chip">Tailwind CSS</div>
            </div>
          </div>

          <div className="skills-category reveal">
            <div className="skills-cat-label" style={{ color: "var(--accent2)" }}>
              Tools &amp; Workflow
            </div>
            <div className="skills-grid">
              <div className="skill-chip tool">Git</div>
              <div className="skill-chip tool">GitHub</div>
              <div className="skill-chip tool">GitHub Copilot</div>
              <div className="skill-chip tool">DBeaver</div>
              <div className="skill-chip tool">ClickUp</div>
              <div className="skill-chip tool">VS Code</div>
              <div className="skill-chip tool">Docker</div>
              <div className="skill-chip tool">Postman</div>
            </div>
          </div>

          <div className="skills-category reveal">
            <div className="skills-cat-label" style={{ color: "var(--accent3)" }}>
              Soft Skills
            </div>
            <div className="skills-grid">
              <div className="skill-chip soft">Autonomy &amp; Ownership</div>
              <div className="skill-chip soft">Client Communication</div>
              <div className="skill-chip soft">Problem Solving</div>
              <div className="skill-chip soft">End-to-end Delivery</div>
              <div className="skill-chip soft">Continuous Learning</div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience">
        <div className="inner">
          <div className="section-header reveal">
            <span className="section-num">02</span>
            <h2 className="section-title">Experience</h2>
            <div className="section-line"></div>
          </div>

          <div className="exp-list">
            <div className="exp-item reveal">
              <div className="exp-meta">
                <div className="exp-period">2024 — Present</div>
                <div className="exp-company">Hybriun</div>
                <div className="exp-location">Brazil (Remote)</div>
              </div>
              <div className="exp-body">
                <div className="exp-role">Fullstack Developer</div>
                <ul className="exp-bullets">
                  <li>
                    Deliver end-to-end custom software — requirements gathering, architecture, development, testing,
                    and post-go-live support
                  </li>
                  <li>
                    Build RESTful APIs with Nest.js (TypeScript) and responsive interfaces with React/Next.js,
                    reducing delivery time by ~30% with reusable components
                  </li>
                  <li>
                    Design and version MySQL databases with Prisma ORM, ensuring safe migrations and referential
                    integrity
                  </li>
                  <li>
                    Integrate generative AI (GitHub Copilot) into the development workflow, boosting productivity and
                    code consistency
                  </li>
                  <li>
                    Maintain and evolve multiple production projects simultaneously, prioritizing incident fixes and
                    new features
                  </li>
                </ul>
              </div>
            </div>

            <div className="exp-item reveal">
              <div className="exp-meta">
                <div className="exp-period">2022 — 2024</div>
                <div className="exp-company">Hyundai Autoever</div>
                <div className="exp-location">Brazil</div>
              </div>
              <div className="exp-body">
                <div className="exp-role">Fullstack Developer</div>
                <ul className="exp-bullets">
                  <li>
                    Developed and maintained internal systems with Vue.js on the frontend and Node.js/Express on the
                    backend, serving corporate users
                  </li>
                  <li>
                    Collaborated with cross-functional teams in an environment with structured QA, code review, and
                    Git Flow processes
                  </li>
                  <li>
                    Integrated third-party REST APIs and internal microservices, modernizing operational processes
                  </li>
                  <li>Implemented features with MongoDB/Mongoose for flexible non-relational data storage</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education">
        <div className="inner">
          <div className="section-header reveal">
            <span className="section-num">03</span>
            <h2 className="section-title">Education</h2>
            <div className="section-line"></div>
          </div>

          <div className="edu-card reveal">
            <div>
              <div className="edu-degree">Bachelor&apos;s in Computer Science</div>
              <div className="edu-inst">Faculdade de Americana (FAM)</div>
            </div>
            <div className="edu-period">2022 — 2026</div>
          </div>

          <div style={{ marginTop: "60px" }}>
            <div className="section-header reveal" style={{ marginBottom: "32px" }}>
              <span className="section-num" style={{ fontSize: "10px" }}>
                04
              </span>
              <h2 className="section-title" style={{ fontSize: "clamp(1.2rem, 3vw, 1.8rem)" }}>
                Languages
              </h2>
              <div className="section-line"></div>
            </div>
            <div className="lang-grid reveal">
              <div className="lang-card">
                <div className="lang-name">Portuguese</div>
                <div className="lang-level">Native</div>
              </div>
              <div className="lang-card">
                <div className="lang-name">English</div>
                <div className="lang-level">Advanced</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="inner">
          <div className="section-header reveal">
            <span className="section-num">05</span>
            <h2 className="section-title">Contact</h2>
            <div className="section-line"></div>
          </div>

          <div className="contact-grid reveal">
            <a href="mailto:danielrv@gmail.com" className="contact-card">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <div>
                <div className="contact-card-label">Email</div>
                <div className="contact-card-value">danielrippervitorino@gmail.com</div>
              </div>
            </a>

            <a href="tel:+5519111113233" className="contact-card">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.9 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.72 6.72l1.16-1.16a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.01z" />
              </svg>
              <div>
                <div className="contact-card-label">Phone</div>
                <div className="contact-card-value">+55 (19) 98341-3233</div>
              </div>
            </a>

            <a href="https://github.com/iDanielrv" target="_blank" className="contact-card">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              <div>
                <div className="contact-card-label">GitHub</div>
                <div className="contact-card-value">github.com/iDanielrv</div>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/daniel-ripperv" target="_blank" className="contact-card">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <div>
                <div className="contact-card-label">LinkedIn</div>
                <div className="contact-card-value">linkedin.com/in/daniel-ripperv</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-text">
          © 2025 <span>Daniel RV</span> — Fullstack Developer
        </div>
        <div className="footer-text">Americana, São Paulo — Brazil</div>
      </footer>
    </>
  );
}
