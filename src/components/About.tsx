import { motion, useReducedMotion } from "framer-motion";

export const About = () => {
  const reduceMotion = useReducedMotion();

  const focus = [
    {
      title: "Mobile production",
      description:
        "React Native and Expo apps with offline support, push notifications, and store-ready releases.",
    },
    {
      title: "Full-stack delivery",
      description:
        "React/Next frontends with Node or Django backends, typed APIs, and Postgres or MongoDB.",
    },
    {
      title: "Product ownership",
      description:
        "Subscriptions, crash reduction, CI/CD, and mentoring — shipping work that stays maintainable.",
    },
  ];

  return (
    <section id="about" className="section-pad border-t border-border">
      <div className="site-container">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.35 }}
        >
          <p className="section-label">01 — About</p>
          <h2 className="section-title">Building production software with clear ownership</h2>
        </motion.div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="space-y-4 text-base leading-relaxed text-muted-foreground"
          >
            <p>
              I'm a full-stack software engineer focused on{" "}
              <span className="text-foreground">React Native</span> and modern
              web stacks. I ship production apps with monetization, real-time
              features, and offline-first behavior.
            </p>
            <p>
              I'm completing a{" "}
              <span className="text-foreground">B.Sc. in Software Engineering</span>{" "}
              at Adama Science and Technology University. I've led small mobile
              teams, mentored juniors, and improved CI/CD so releases are faster
              and more reliable.
            </p>
            <p>
              Through{" "}
              <span className="text-foreground">WebSmart Inc.</span> I've built
              scholarship tooling for students and organized the 2024 Adama Tech
              Challenge.
            </p>
            <a
              href="#contact"
              className="inline-block pt-2 text-sm font-medium text-foreground underline-offset-4 hover:underline"
            >
              Get in touch
            </a>
          </motion.div>

          <motion.ul
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.35, delay: 0.08 }}
            className="space-y-6 border-l border-border pl-5"
          >
            {focus.map((item) => (
              <li key={item.title}>
                <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};
