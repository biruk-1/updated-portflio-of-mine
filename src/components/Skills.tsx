import { motion, useReducedMotion } from "framer-motion";

export const Skills = () => {
  const reduceMotion = useReducedMotion();

  const skillCategories = [
    {
      category: "Mobile",
      skills: [
        "React Native",
        "Expo",
        "Redux",
        "RevenueCat",
        "WebSockets",
        "In-App Purchases",
        "Firebase",
        "Offline-First",
      ],
    },
    {
      category: "Frontend",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "HTML/CSS",
        "Tailwind CSS",
        "Responsive Design",
        "PWA",
      ],
    },
    {
      category: "Backend",
      skills: [
        "Node.js",
        "Express",
        "Django",
        "Python",
        "REST APIs",
        "MongoDB",
        "PostgreSQL",
        "SQLite",
      ],
    },
    {
      category: "Tools & DevOps",
      skills: [
        "Git / GitHub",
        "Docker",
        "DigitalOcean",
        "CI/CD",
        "Vercel",
        "GitHub Actions",
        "Agile/Scrum",
      ],
    },
  ];

  return (
    <section id="skills" className="section-pad border-t border-border">
      <div className="site-container">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.35 }}
        >
          <p className="section-label">03 — Skills</p>
          <h2 className="section-title">Tools I use in production</h2>
          <p className="section-lede">
            Stack I can defend in an interview and ship with on a real team.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              className="space-y-3"
            >
              <h3 className="text-sm font-semibold text-foreground">{category.category}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {category.skills.join(" · ")}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
