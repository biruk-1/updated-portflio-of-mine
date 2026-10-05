import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

import hotelImage from "@/assets/hotel.webp";
import ticketsImage from "@/assets/ticket.webp";
import conveneImage from "@/assets/convene.webp";
import consultImage from "@/assets/conseltuncy.webp";
import castingImage from "@/assets/casting.webp";
import alRajaaImage from "@/assets/al-rajaa.webp";
import fitnessImage from "@/assets/fitness.webp";
import adminDashboard from "@/assets/adminDashboard.webp";

type Project = {
  title: string;
  summary: string;
  outcome?: string;
  tech: string[];
  github: string;
  live: string | null;
  image: string;
  type: "Mobile" | "Web";
  featured?: boolean;
};

export const Projects = () => {
  const reduceMotion = useReducedMotion();
  const [showAll, setShowAll] = useState(false);

  const projects: Project[] = [
    {
      title: "Kiburan Rwanda",
      summary:
        "Public web product for Kiburan Trading — TypeScript/React site that presents the company brand and business offering.",
      outcome: "Live production deploy used as the company website.",
      tech: ["TypeScript", "React", "Vite"],
      github: "https://github.com/biruk-1/kiburan-ruwanda-v3",
      live: "https://kiburan-ruwanda-v3.vercel.app",
      image: hotelImage,
      type: "Web",
      featured: true,
    },
    {
      title: "Live Betting & Football Platform",
      summary:
        "Full-stack real-time betting and live football web app with JWT auth, WebSockets, and concurrent session handling.",
      outcome: "Designed for 500+ concurrent users under live match load.",
      tech: ["TypeScript", "React", "Node.js", "MongoDB", "WebSockets"],
      github: "https://github.com/biruk-1/up-work-betting-website",
      live: null,
      image: adminDashboard,
      type: "Web",
      featured: true,
    },
    {
      title: "Study Abroad Dashboard",
      summary:
        "Full-stack dashboard for counselors managing study-abroad applications and status workflows.",
      outcome: "Typed Next.js + Node pipeline for operations teams.",
      tech: ["Next.js", "Node.js", "TypeScript"],
      github: "https://github.com/biruk-1/study-abroad-dashboard",
      live: null,
      image: consultImage,
      type: "Web",
      featured: true,
    },
    {
      title: "WebSmart Landing",
      summary:
        "Marketing site for WebSmart Technology Solutions with a public Vercel deployment.",
      tech: ["React", "JavaScript", "Vite"],
      github: "https://github.com/biruk-1/web-smart",
      live: "https://web-smart-sooty.vercel.app",
      image: castingImage,
      type: "Web",
    },
    {
      title: "Ticket App for Event Organizers",
      summary:
        "React Native app for selling tickets, managing events, and tracking attendees.",
      tech: ["React Native", "Firebase"],
      github: "https://github.com/biruk-1/my-ticket-app",
      live: null,
      image: ticketsImage,
      type: "Mobile",
    },
    {
      title: "Convene",
      summary:
        "Event organizing app for scheduling meetings and tasks with notifications.",
      tech: ["React Native", "Node.js", "MongoDB"],
      github: "https://github.com/biruk-1/Convene",
      live: null,
      image: conveneImage,
      type: "Mobile",
    },
    {
      title: "Fetan Task Management",
      summary: "Task management product for organizing team work in TypeScript.",
      tech: ["TypeScript", "React"],
      github: "https://github.com/biruk-1/Fetan-Task-mangment",
      live: null,
      image: fitnessImage,
      type: "Web",
    },
    {
      title: "Upwork Feedback App",
      summary: "Client feedback collection app delivered for an Upwork engagement.",
      tech: ["JavaScript", "React"],
      github: "https://github.com/biruk-1/markhenry-feedback-app",
      live: null,
      image: alRajaaImage,
      type: "Web",
    },
    {
      title: "Al-rajaa Recruitment Agency",
      summary: "Recruitment agency website with admin features and a public demo.",
      tech: ["React", "Firebase", "Express"],
      github: "https://github.com/biruk-1/Al-rajaa-Workers",
      live: "https://al-rajaa-workers.vercel.app/",
      image: alRajaaImage,
      type: "Web",
    },
    {
      title: "SoloOpsAI",
      summary: "TypeScript exploration of AI-assisted operations tooling.",
      tech: ["TypeScript"],
      github: "https://github.com/biruk-1/SoloOpsAI",
      live: null,
      image: consultImage,
      type: "Web",
    },
  ];

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const visibleRest = showAll ? rest : rest.slice(0, 3);

  return (
    <section id="projects" className="section-pad border-t border-border">
      <div className="site-container">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.35 }}
        >
          <p className="section-label">04 — Projects</p>
          <h2 className="section-title">Selected work</h2>
          <p className="section-lede">
            Products and client work from my public GitHub — demos where a live
            deploy exists.
          </p>
        </motion.div>

        <div className="mt-12 space-y-10">
          {featured.map((project, index) => (
            <motion.article
              key={project.title}
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className="surface overflow-hidden"
            >
              <div className="grid md:grid-cols-2">
                <div className="aspect-[16/10] bg-muted md:aspect-auto md:min-h-[280px]">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col justify-center p-6 sm:p-8">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{project.type}</span>
                    <span aria-hidden>·</span>
                    <span>Featured</span>
                  </div>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight">{project.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {project.summary}
                  </p>
                  {project.outcome && (
                    <p className="mt-3 text-sm text-foreground/85">{project.outcome}</p>
                  )}
                  <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
                    {project.tech.join(" · ")}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-4 text-sm">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="h-4 w-4" strokeWidth={1.75} />
                      Code
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        Live demo
                        <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 border-t border-border">
          {visibleRest.map((project, index) => (
            <motion.article
              key={project.title}
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              className="grid gap-4 border-b border-border py-6 sm:grid-cols-[7.5rem_1fr_auto] sm:items-start sm:gap-6"
            >
              <div className="hidden overflow-hidden rounded-sm border border-border sm:block sm:h-16 sm:w-[7.5rem]">
                <img
                  src={project.image}
                  alt=""
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <h3 className="text-base font-semibold">{project.title}</h3>
                  <span className="text-xs text-muted-foreground">{project.type}</span>
                </div>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {project.summary}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  {project.tech.join(" · ")}
                </p>
              </div>
              <div className="flex gap-4 text-sm sm:pt-1">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Code
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Demo
                    <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          {rest.length > 3 && (
            <Button variant="outline" onClick={() => setShowAll((s) => !s)}>
              {showAll ? "Show fewer projects" : `Show ${rest.length - 3} more`}
            </Button>
          )}
          <Button variant="ghost" asChild>
            <a href="https://github.com/biruk-1" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" strokeWidth={1.75} />
              All repositories
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
