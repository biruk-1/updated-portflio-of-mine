import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Experience = () => {
  const experiences = [
    {
      company: "MonaMary LLC (Remote)",
      role: "Mobile APP Developer and Full-Stack Website Developer",
      date: "Jan 2025 - Jun 2025",
      bullets: [
        "Developed 3 cross-platform React Native apps with offline-first capabilities",
        "Integrated RevenueCat subscriptions generating $5k+ monthly revenue",
        "Reduced crash rates by 35% through error boundary implementation",
      ],
    },
    {
      company: "Diamond Tech (Onsite)",
      role: "Full-Stack Developer",
      date: "Mar 2025 - Present",
      bullets: [
        "Built real-time betting platform handling 500+ concurrent users",
        "Implemented JWT authentication and WebSocket communication",
        "Optimized MongoDB queries reducing API response time by 40%",
      ],
    },
    {
      company: "Kiburan Trading (Hybrid)",
      role: "Mobile App Team Lead",
      date: "Jun 2024 – Present",
      bullets: [
        "Led UI/UX overhaul, improving app store rating from 3.8 to 4.6",
        "Mentored 3 junior developers in React Native best practices",
        "Implemented CI/CD pipeline, reducing deployment time by 60%",
      ],
    },
    {
      company: "Octanet (Remote)",
      role: "Python Development Intern",
      date: "Oct 2023 - Dec 2023",
      bullets: [
        "Developed REST APIs for e-commerce platform using Django",
        "Automated report generation saving 10+ weekly work hours",
      ],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const item = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="experience" className="py-20 sm:py-32 relative overflow-hidden">
      <motion.div
        className="absolute top-0 left-10 w-96 h-96 bg-primary/6 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-block mb-4">
              <span className="text-6xl">💼</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              Professional <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Roles, responsibilities and impact across companies and projects
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-6"
          >
            {experiences.map((exp, idx) => (
              <motion.div key={idx} variants={item}>
                <Card className="p-6 glass-effect border-border hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-effect">
                          <Briefcase className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">{exp.company}</h3>
                          <p className="text-sm text-muted-foreground">{exp.role}</p>
                        </div>
                      </div>
                    </div>

                    <div className="text-sm text-muted-foreground text-right">{exp.date}</div>
                  </div>

                  <div className="mt-4">
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                      {exp.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            ))}

            <motion.div variants={item} className="text-center mt-4">
              <p className="text-sm text-muted-foreground">
                Currently also freelancing on <span className="font-semibold">Upwork</span>.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
