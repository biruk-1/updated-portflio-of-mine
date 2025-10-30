import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Smartphone, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CodeAnimation } from "./CodeAnimation";
import profileImage from "@/assets/profile.png";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Mesh Background */}
      <div className="absolute inset-0 bg-mesh opacity-30" />

      {/* Animated Orbs - More subtle */}
      <motion.div
        className="absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent/8 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-primary/20"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-medium">Freelancing on Upwork</span>
                </motion.div>

                <motion.h1
                  className="text-6xl sm:text-7xl md:text-8xl font-bold font-poppins leading-tight"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <span className="text-gradient">Biruk Chali</span>
                </motion.h1>

                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <h2 className="text-3xl sm:text-4xl font-semibold flex items-center gap-3">
                    <Code2 className="h-8 w-8 text-primary" />
                    Full-Stack Developer
                  </h2>
                  <div className="flex items-center gap-3 text-2xl sm:text-3xl font-semibold text-secondary">
                    <Smartphone className="h-7 w-7" />
                    <span className="text-gradient-accent">Mobile Expert</span>
                  </div>
                </motion.div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl"
              >
                Crafting beautiful cross-platform mobile experiences with{" "}
                <span className="text-primary font-semibold">React Native</span>
                {" "}and building modern web applications. Turning ideas into reality,
                one line of code at a time.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-wrap items-center gap-4"
              >
                <Button
                  size="lg"
                  className="font-semibold group bg-gradient-to-r from-primary to-secondary hover:shadow-2xl hover:shadow-primary/50 transition-all"
                  onClick={() => scrollToSection("projects")}
                >
                  View My Work
                  <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="font-semibold border-2 hover:border-primary hover:text-primary"
                  onClick={() => scrollToSection("contact")}
                >
                  Get In Touch
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex items-center gap-6 pt-4"
              >
                {[
                  { icon: Github, href: "https://github.com/birukchali", label: "GitHub" },
                  { icon: Linkedin, href: "https://linkedin.com/in/birukchali", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:birukchali86@gmail.com", label: "Email" },
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl glass-effect flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-effect transition-all"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Right Content - Profile Image & Code Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden lg:flex flex-col items-center gap-8"
            >
              {/* Profile Image */}
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-xl opacity-40" />
                <img
                  src={profileImage}
                  alt="Biruk Chali"
                  className="relative w-64 h-64 object-cover rounded-3xl border-4 border-border shadow-2xl"
                />
              </motion.div>
              
              {/* Code Animation */}
              <CodeAnimation />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <button
          onClick={() => scrollToSection("about")}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          aria-label="Scroll down"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-1.5">
            <motion.div
              className="w-1 h-2 bg-current rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </button>
      </motion.div>
    </section>
  );
};
