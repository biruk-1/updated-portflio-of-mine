import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Globe, Database, Wrench } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      category: "Mobile Development",
      icon: Smartphone,
      gradient: "from-primary to-secondary",
      skills: [
        { name: "React Native", level: 95 },
        { name: "Expo", level: 93 },
        { name: "Redux", level: 90 },
        { name: "RevenueCat", level: 88 },
        { name: "WebSockets", level: 87 },
        { name: "In-App Purchases", level: 90 },
        { name: "Firebase", level: 88 },
        { name: "Offline-First Apps", level: 85 },
      ],
    },
    {
      category: "Frontend",
      icon: Globe,
      gradient: "from-secondary to-accent",
      skills: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "JavaScript", level: 96 },
        { name: "HTML/CSS", level: 94 },
        { name: "Redux", level: 90 },
        { name: "GraphQL", level: 85 },
        { name: "Responsive Design", level: 93 },
        { name: "PWA", level: 87 },
      ],
    },
    {
      category: "Backend",
      icon: Database,
      gradient: "from-accent to-primary",
      skills: [
        { name: "Node.js", level: 92 },
        { name: "Express", level: 90 },
        { name: "Django", level: 85 },
        { name: "Python", level: 84 },
        { name: "REST APIs", level: 93 },
        { name: "MongoDB", level: 90 },
        { name: "PostgreSQL", level: 88 },
        { name: "SQLite", level: 86 },
      ],
    },
    {
      category: "Tools & DevOps",
      icon: Wrench,
      gradient: "from-primary via-secondary to-accent",
      skills: [
        { name: "Git / GitHub", level: 94 },
        { name: "Docker", level: 82 },
        { name: "DigitalOcean", level: 85 },
        { name: "CI/CD Pipelines", level: 87 },
        { name: "Vercel", level: 88 },
        { name: "GitHub Actions", level: 83 },
        { name: "Agile/Scrum", level: 90 },
        { name: "C++", level: 78 },
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
    <section id="skills" className="py-20 sm:py-32 relative overflow-hidden bg-muted/30">
      {/* Background Gradient */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/5 to-transparent"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              A comprehensive toolkit for building world-class applications
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div key={categoryIndex} variants={item}>
                <Card className="p-8 h-full glass-effect border-border hover:border-primary/50 transition-all duration-300 group">
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center glow-effect`}
                    >
                      <category.icon className="h-7 w-7 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold group-hover:text-gradient transition-all">
                      {category.category}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">
                            {skill.name}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${category.gradient} rounded-full`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1,
                              delay: skillIndex * 0.1,
                              ease: "easeOut",
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Tech Stack Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold mb-6">Currently Working With</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["React Native", "React", "Node.js", "Express", "Next.js", "MongoDB", "Expo", "Firebase", "Django", "Python"].map(
                (tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Badge
                      variant="secondary"
                      className="px-4 py-2 text-base font-medium bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 hover:border-primary/50 cursor-default"
                    >
                      {tech}
                    </Badge>
                  </motion.div>
                )
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
