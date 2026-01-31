import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Globe, Database, Wrench } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      category: "Mobile Development",
      icon: Smartphone,
      skills: [
        "React Native",
        "Expo",
        "Redux",
        "RevenueCat",
        "WebSockets",
        "In-App Purchases",
        "Firebase",
        "Offline-First Apps",
      ],
    },
    {
      category: "Frontend",
      icon: Globe,
      skills: [
        "React",
        "Next.js",
        "JavaScript",
        "HTML/CSS",
        "Redux",
        "GraphQL",
        "Responsive Design",
        "PWA",
      ],
    },
    {
      category: "Backend",
      icon: Database,
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
      icon: Wrench,
      skills: [
        "Git / GitHub",
        "Docker",
        "DigitalOcean",
        "CI/CD Pipelines",
        "Vercel",
        "GitHub Actions",
        "Agile/Scrum",
        "C++",
      ],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-20 sm:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              className="inline-block mb-4"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-6xl">🚀</span>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              Skills & <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Technologies and tools I work with
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div key={categoryIndex} variants={item}>
                <Card className="p-6 h-full border border-border/50 hover:border-border transition-colors bg-card/50 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                      <category.icon className="h-5 w-5 text-foreground/70" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {category.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: skillIndex * 0.03,
                          duration: 0.2,
                        }}
                      >
                        <Badge
                          variant="outline"
                          className="px-3 py-1.5 text-xs font-normal bg-background/50 hover:bg-muted/50 border-border/50 text-foreground/80 cursor-default transition-colors"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
