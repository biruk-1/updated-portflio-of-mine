import { motion } from "framer-motion";
import { Code2, Laptop, Lightbulb, Smartphone, Zap, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

export const About = () => {
  const highlights = [
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "Expert in React Native & cross-platform development",
      gradient: "from-primary to-secondary",
    },
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable solutions",
      gradient: "from-secondary to-accent",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimized apps with blazing-fast load times",
      gradient: "from-accent to-primary",
    },
    {
      icon: Laptop,
      title: "Full-Stack",
      description: "Modern web technologies & backend systems",
      gradient: "from-primary via-secondary to-accent",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Always exploring new tech and best practices",
      gradient: "from-secondary to-primary",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Love crafting delightful user experiences",
      gradient: "from-accent to-secondary",
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
    <section id="about" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-mesh opacity-20" />
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
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
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-6xl">👨‍💻</span>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Building the future of mobile and web applications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  I'm a <span className="text-primary font-semibold">Full-Stack Software Engineer</span> with <span className="text-secondary font-semibold">3+ years</span> of experience building production-ready mobile and web applications. I specialize in <span className="text-primary font-semibold">React Native</span> and have deployed 5+ applications with monetization systems generating thousands in revenue.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Currently pursuing my <span className="font-semibold">B.Sc. in Software Engineering</span> at Adama Science and Technology University (GPA: 3.34/4.0), I balance academic excellence with real-world development experience. I've led teams, mentored junior developers, and optimized CI/CD pipelines for faster, more reliable deployments.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  As the founder of <span className="font-semibold">WebSmart Inc.</span>, I've helped 50+ students secure scholarships and organized the 2024 Adama Tech Challenge with 150+ participants. I'm also an active open-source maintainer with 3 React Native libraries totaling 500+ downloads.
                </p>
              </div>
              <motion.div
                className="pt-4"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a
                  href="#contact"
                  className="inline-flex items-center text-primary font-semibold text-lg group"
                >
                  Let's build something amazing together
                  <motion.span
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {highlights.map((highlight, index) => (
                <motion.div key={index} variants={item}>
                  <Card
                    className="p-6 h-full glass-effect border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${highlight.gradient} flex items-center justify-center mb-4 glow-effect`}
                    >
                      <highlight.icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {highlight.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {highlight.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
