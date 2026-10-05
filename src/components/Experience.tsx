import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const Experience = () => {
  const reduceMotion = useReducedMotion();
  const [showAll, setShowAll] = useState(false);

  const experiences = [
    {
      company: "Upwork",
      meta: "Remote",
      role: "Senior Software Developer (Freelance / Contract)",
      date: "2025 — Present",
      range: "Sep 2025 – Present",
      stack: "React · Next.js · Node.js · Python · client delivery",
      bullets: [
        "Rising Talent with 100% Job Success Score — one job from Top Rated",
        "Engineer full-stack web and mobile apps for global clients",
        "Scope, ship, and document features across diverse codebases",
      ],
    },
    {
      company: "Kiburan Trading",
      meta: "Hybrid",
      role: "Software Team Lead (Contract)",
      date: "2024 — 2025",
      range: "Jun 2024 – Sep 2025",
      stack: "React Native · CI/CD · mentoring",
      bullets: [
        "Led code reviews and mentored 3 junior engineers",
        "Configured GitHub Actions CI/CD, cutting deploy time by 60%",
        "Owned mobile delivery and modular architecture practices",
      ],
    },
    {
      company: "Diamond Tech",
      meta: "Onsite",
      role: "Full-Stack Developer (Full-Time)",
      date: "2024 — 2025",
      range: "Mar 2024 – Aug 2025",
      stack: "React · Node · MongoDB · PostgreSQL · JWT · WebSockets",
      bullets: [
        "Built realtime web app and admin analytics for 500+ concurrent users",
        "Designed JWT auth and cut API latency by 40% via query work",
        "Refactored legacy code for maintainability and scale",
      ],
    },
    {
      company: "MonaMary LLC",
      meta: "Remote",
      role: "Senior Mobile Engineer (Contract)",
      date: "2025",
      range: "Jan 2025 – Jun 2025",
      stack: "React Native · SQLite · offline-first · subscriptions",
      bullets: [
        "Architected 3 cross-platform apps with offline-first SQLite caching",
        "Cut crash rates by 35% with stricter error handling",
        "Integrated subscription pipelines generating $5k+ monthly recurring revenue",
      ],
    },
    {
      company: "Sage Institute of Technology",
      meta: "Teaching",
      role: "MERN & Mobile Tutor",
      date: "2024",
      range: "Summer 2024 · 3 months",
      stack: "MERN · React Native · AI fundamentals · mentoring",
      bullets: [
        "Taught a 3-month summer MERN course for aspiring developers",
        "Trained 20+ students in MERN stack and React Native",
        "Introduced 10+ students to AI and data science fundamentals",
      ],
    },
    {
      company: "Octanet",
      meta: "Internship",
      role: "Python Development Intern",
      date: "2023",
      range: "Oct 2023 – Dec 2023",
      stack: "Python · Django · REST",
      bullets: [
        "Built Django REST APIs for an e-commerce platform",
        "Automated reporting that saved 10+ hours weekly",
      ],
    },
  ];

  const INITIAL_COUNT = 4;
  const visible = showAll ? experiences : experiences.slice(0, INITIAL_COUNT);
  const hiddenCount = experiences.length - INITIAL_COUNT;

  return (
    <section id="experience" className="section-pad border-t border-border">
      <div className="site-container">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-label">02 / experience</p>
          <h2 className="section-title">Roles and outcomes</h2>
          <p className="section-lede">
            Product work, freelancing, and teaching — ownership, delivery, and
            measurable results.
          </p>
        </motion.div>

        <div className="mt-14">
          {visible.map((exp, idx) => (
            <motion.article
              key={exp.company}
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.35, delay: idx * 0.04, ease: [0.22, 1, 0.36, 1] }}
              className="group grid gap-4 border-t border-border py-8 first:border-t-0 sm:grid-cols-[6.5rem_1fr] sm:gap-10 md:grid-cols-[7rem_1fr_11rem] xl:gap-14"
            >
              <p className="meta pt-1 text-primary">{exp.date}</p>

              <div>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-lg font-semibold tracking-tight transition-colors group-hover:text-primary">
                    {exp.company}
                  </h3>
                  <span className="meta">{exp.meta}</span>
                </div>
                <p className="mt-1 text-sm text-foreground/80">{exp.role}</p>
                <p className="meta mt-2">{exp.stack}</p>
                <p className="mt-1 text-xs text-muted-foreground sm:hidden">{exp.range}</p>
                <ul className="mt-5 space-y-2.5">
                  {exp.bullets.map((b) => (
                    <li
                      key={b}
                      className="relative pl-4 text-sm leading-6 text-muted-foreground before:absolute before:left-0 before:top-[0.55em] before:h-1 before:w-1 before:rounded-full before:bg-primary/50"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="meta hidden pt-1 text-right md:block">{exp.range}</p>
            </motion.article>
          ))}
        </div>

        {hiddenCount > 0 && (
          <div className="mt-4 border-t border-border pt-6">
            <Button variant="outline" onClick={() => setShowAll((s) => !s)}>
              {showAll ? "Show less" : `Show ${hiddenCount} more roles`}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
