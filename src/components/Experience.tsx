import { motion, useReducedMotion } from "framer-motion";

export const Experience = () => {
  const reduceMotion = useReducedMotion();

  const experiences = [
    {
      company: "Kiburan Trading",
      meta: "Hybrid",
      role: "Mobile App Team Lead",
      date: "Jun 2024 – Present",
      bullets: [
        "Led UI/UX overhaul, improving app store rating from 3.8 to 4.6",
        "Mentored 3 junior developers in React Native best practices",
        "Implemented CI/CD pipeline, reducing deployment time by 60%",
      ],
    },
    {
      company: "Diamond Tech",
      meta: "Onsite · Contract",
      role: "Full-Stack Developer",
      date: "Mar 2025 – Aug 2025",
      bullets: [
        "Built real-time betting platform handling 500+ concurrent users",
        "Implemented JWT authentication and WebSocket communication",
        "Optimized MongoDB queries reducing API response time by 40%",
      ],
    },
    {
      company: "MonaMary LLC",
      meta: "Remote",
      role: "Mobile & Full-Stack Developer",
      date: "Jan 2025 – Jun 2025",
      bullets: [
        "Developed 3 cross-platform React Native apps with offline-first capabilities",
        "Integrated RevenueCat subscriptions for in-app monetization",
        "Reduced crash rates by 35% through error boundary implementation",
      ],
    },
    {
      company: "Octanet",
      meta: "Remote · Internship",
      role: "Python Development Intern",
      date: "Oct 2023 – Dec 2023",
      bullets: [
        "Developed REST APIs for an e-commerce platform using Django",
        "Automated report generation saving 10+ weekly work hours",
      ],
    },
  ];

  return (
    <section id="experience" className="section-pad border-t border-border">
      <div className="site-container">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.35 }}
        >
          <p className="section-label">02 — Experience</p>
          <h2 className="section-title">Roles and impact</h2>
          <p className="section-lede">
            Product teams where I owned delivery, mentoring, and measurable outcomes.
          </p>
        </motion.div>

        <div className="mt-12 divide-y divide-border border-y border-border">
          {experiences.map((exp, idx) => (
            <motion.article
              key={exp.company}
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.3, delay: idx * 0.03 }}
              className="grid gap-4 py-8 sm:grid-cols-[9rem_1fr] sm:gap-8"
            >
              <p className="text-sm text-muted-foreground sm:pt-0.5">{exp.date}</p>
              <div>
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <h3 className="text-base font-semibold text-foreground">{exp.company}</h3>
                  <span className="text-sm text-muted-foreground">{exp.meta}</span>
                </div>
                <p className="mt-1 text-sm text-foreground/80">{exp.role}</p>
                <ul className="mt-4 space-y-2">
                  {exp.bullets.map((b) => (
                    <li
                      key={b}
                      className="relative pl-4 text-sm leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-[0.55em] before:h-1 before:w-1 before:rounded-full before:bg-border"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
