import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.webp";

export const Hero = () => {
  const reduceMotion = useReducedMotion();

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="home" className="section-pad min-h-[88vh] flex items-center">
      <div className="site-container w-full">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            <p className="text-sm text-muted-foreground">
              Open to full-time roles · Remote / Ethiopia
            </p>

            <div className="flex items-center gap-4 lg:hidden">
              <img
                src={profileImage}
                alt="Biruk Chali"
                className="h-16 w-16 rounded-md object-cover border border-border"
              />
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-[3.25rem] md:leading-[1.1]">
                Biruk Chali
              </h1>
              <p className="text-lg text-foreground/80 sm:text-xl">
                React Native & Full-Stack Engineer
              </p>
            </div>

            <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-[1.05rem]">
              I build production mobile and web applications with React Native,
              Expo, React/Next.js, and Node — including subscriptions,
              real-time features, and offline-first workflows.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Button size="lg" onClick={() => scrollToSection("projects")}>
                View work
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")}>
                Contact
              </Button>
              <Button size="lg" variant="ghost" asChild>
                <a href="/Biruk-Chali-Resume.pdf" download>
                  <Download className="h-4 w-4" />
                  Resume
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-5 pt-2 text-sm text-muted-foreground">
              <a
                href="https://github.com/biruk-1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
              >
                <Github className="h-4 w-4" strokeWidth={1.75} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/biruk-tessema-105521231/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
              >
                <Linkedin className="h-4 w-4" strokeWidth={1.75} />
                LinkedIn
              </a>
              <a
                href="mailto:birukchali86@gmail.com"
                className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4" strokeWidth={1.75} />
                Email
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="hidden lg:block"
          >
            <div className="relative overflow-hidden rounded-md border border-border bg-card">
              <img
                src={profileImage}
                alt="Biruk Chali"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 border-t border-border bg-card/95 px-4 py-3">
                <p className="text-sm font-medium">Biruk Chali</p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Mobile · Full-stack · Adama / Remote
                </p>
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("projects");
                  }}
                  className="mt-2 inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Selected projects
                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
