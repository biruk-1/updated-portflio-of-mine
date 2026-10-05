import { motion, useReducedMotion } from "framer-motion";

export const Skills = () => {
  const reduceMotion = useReducedMotion();

  const groups = [
    {
      key: "01",
      domain: "mobile",
      title: "Mobile engineering",
      description: "Store-ready React Native products with offline sync and subscriptions.",
      skills: ["React Native", "Expo", "Redux", "RevenueCat", "WebSockets", "Firebase", "Offline-first"],
    },
    {
      key: "02",
      domain: "frontend",
      title: "Web interfaces",
      description: "Typed React/Next interfaces with responsive systems and production polish.",
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Responsive UI", "PWA"],
    },
    {
      key: "03",
      domain: "backend",
      title: "APIs & data",
      description: "Services and persistence behind the products I ship.",
      skills: ["Node.js", "Express", "Django", "Python", "REST", "MongoDB", "PostgreSQL"],
    },
    {
      key: "04",
      domain: "ops",
      title: "Delivery",
      description: "CI/CD and hosting so releases stay predictable.",
      skills: ["Git", "Docker", "GitHub Actions", "CI/CD", "Vercel", "DigitalOcean", "Agile"],
    },
  ];

  return (
    <section id="skills" className="section-pad border-t border-border">
      <div className="site-container">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="section-label">03 / skills</p>
            <h2 className="section-title">Technical profile</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-muted-foreground md:text-right">
            Stack I ship with on real teams — grouped by how I use it, not as a keyword dump.
          </p>
        </motion.div>

        <div className="mt-12 divide-y divide-border border-y border-border">
          {groups.map((group, index) => (
            <motion.div
              key={group.domain}
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-5 py-8 sm:grid-cols-[7rem_1fr] lg:grid-cols-[7rem_14rem_1fr] sm:gap-8 lg:gap-10"
            >
              <p className="meta text-primary pt-1">{group.key}</p>
              <div>
                <p className="meta">{group.domain}</p>
                <h3 className="mt-2 text-base font-semibold tracking-tight">{group.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground lg:hidden">
                  {group.description}
                </p>
              </div>
              <div className="sm:col-span-2 lg:col-span-1">
                <p className="mb-4 hidden text-sm leading-6 text-muted-foreground lg:block">
                  {group.description}
                </p>
                <p className="text-sm leading-7 text-foreground/85">
                  {group.skills.join("  ·  ")}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
