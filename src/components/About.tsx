import { motion, useReducedMotion } from "framer-motion";

export const About = () => {
  const reduceMotion = useReducedMotion();

  const principles = [
    {
      index: "01",
      title: "Interfaces that ship",
      body: "React Native and Expo products with offline support, subscriptions, and store-ready releases.",
    },
    {
      index: "02",
      title: "Systems end-to-end",
      body: "React/Next frontends with Node or Django backends — typed APIs, Postgres, and deploy pipelines.",
    },
    {
      index: "03",
      title: "Ownership over output",
      body: "Crash reduction, CI/CD, mentoring juniors, and keeping codebases maintainable after launch.",
    },
  ];

  return (
    <section id="about" className="section-pad border-t border-border">
      <div className="site-container">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20"
        >
          <div>
            <p className="section-label">01 / about</p>
            <h2 className="section-title max-w-sm">
              Building software with clear ownership
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-muted-foreground sm:text-[1.05rem]">
            <p>
              I'm a full-stack engineer focused on{" "}
              <span className="text-foreground">React Native</span> and modern
              web stacks. I ship production apps with monetization, real-time
              features, and offline-first behavior.
            </p>
            <p>
              I hold a{" "}
              <span className="text-foreground">B.Sc. in Software Engineering</span>{" "}
              from Adama Science and Technology University and currently live in{" "}
              <span className="text-foreground">Addis Ababa</span>. I've led small
              mobile teams, mentored juniors, and tightened CI/CD so releases stay
              reliable.
            </p>
            <p>
              Through <span className="text-foreground">WebSmart Inc.</span> I've
              built scholarship tooling for students and organized the 2024
              Adama Tech Challenge.
            </p>
          </div>
        </motion.div>

        <div className="mt-16 grid gap-px overflow-hidden rounded border border-border bg-border sm:grid-cols-3">
          {principles.map((item, i) => (
            <motion.div
              key={item.index}
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="bg-card p-6 sm:p-7"
            >
              <p className="meta text-primary">{item.index}</p>
              <h3 className="mt-4 text-base font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
