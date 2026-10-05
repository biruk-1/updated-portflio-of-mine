import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { featuredProjects, secondaryProjects, type Project } from "@/data/projects";

const ProjectLinks = ({
  project,
  emphasizeStudy = false,
}: {
  project: Project;
  emphasizeStudy?: boolean;
}) => (
  <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
    {project.caseStudy !== false && (
      <Link
        to={`/projects/${project.slug}`}
        className={
          emphasizeStudy
            ? "inline-flex items-center gap-1.5 text-primary transition-opacity hover:opacity-80"
            : "link-quiet inline-flex items-center gap-1.5"
        }
      >
        View case study
        <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} />
      </Link>
    )}
    {project.live && (
      <a
        href={project.live}
        target="_blank"
        rel="noopener noreferrer"
        className="link-quiet inline-flex items-center gap-1.5"
      >
        Live demo
        <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} />
      </a>
    )}
    {project.github && (
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="link-quiet inline-flex items-center gap-1.5"
      >
        GitHub
        <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} />
      </a>
    )}
  </div>
);

export const Projects = () => {
  const reduceMotion = useReducedMotion();
  const [showAll, setShowAll] = useState(false);

  const featured = featuredProjects();
  const rest = secondaryProjects();
  const visibleRest = showAll ? rest : rest.slice(0, 3);

  return (
    <section id="projects" className="section-pad border-t border-border">
      <div className="site-container">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-label">04 / work</p>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="section-title max-w-lg">Selected products</h2>
            <p className="max-w-md text-sm leading-6 text-muted-foreground md:text-right">
              Featured work opens into case studies — role, decisions, and outcomes.
            </p>
          </div>
        </motion.div>

        <div className="mt-14 space-y-16 xl:space-y-20">
          {featured.map((project, index) => {
            const reverse = index % 2 === 1;
            return (
              <motion.article
                key={project.slug}
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: 0.04, ease: [0.22, 1, 0.36, 1] }}
                className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-14"
              >
                <div className={`lg:col-span-7 ${reverse ? "lg:order-2" : ""}`}>
                  <Link
                    to={`/projects/${project.slug}`}
                    className="surface group block overflow-hidden transition-transform duration-500 ease-craft hover:-translate-y-0.5 focus-ring"
                    aria-label={`Open case study: ${project.title}`}
                  >
                    <div className="flex items-center gap-2 border-b border-border px-3 py-2">
                      <span className="h-2 w-2 rounded-full bg-[#ff5f57]" aria-hidden />
                      <span className="h-2 w-2 rounded-full bg-[#febc2e]" aria-hidden />
                      <span className="h-2 w-2 rounded-full bg-[#28c840]" aria-hidden />
                      <span className="meta ml-2 truncate">
                        {project.live?.replace(/^https?:\/\//, "") ?? `${project.slug}.local`}
                      </span>
                    </div>
                    <div
                      className={`relative overflow-hidden bg-muted ${
                        project.type === "Mobile" ? "aspect-[4/5] sm:aspect-[16/11]" : "aspect-[16/10]"
                      }`}
                    >
                      <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        className={`h-full w-full transition-transform duration-700 ease-craft group-hover:scale-[1.02] ${
                          project.type === "Mobile" ? "object-contain" : "object-cover"
                        }`}
                        loading="lazy"
                      />
                      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-background/90 to-transparent px-4 py-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                        <span className="text-sm font-medium">View case study</span>
                        <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
                      </div>
                    </div>
                  </Link>
                </div>

                <div className={`lg:col-span-5 ${reverse ? "lg:order-1" : ""}`}>
                  <div className="flex items-center gap-3">
                    <span className="font-display text-3xl text-muted-foreground/50">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="meta">
                      {project.type} · {project.year}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-3xl tracking-[-0.02em] xl:text-4xl">
                    <Link
                      to={`/projects/${project.slug}`}
                      className="rounded transition-colors hover:text-primary focus-ring"
                    >
                      {project.title}
                    </Link>
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                    {project.summary}
                  </p>
                  {project.role && (
                    <p className="mt-4 text-sm leading-7 text-foreground/85">
                      <span className="meta mr-2">role</span>
                      {project.role}
                    </p>
                  )}
                  {project.outcome && (
                    <p className="mt-4 border-l-2 border-primary/60 pl-3 text-sm text-foreground/90">
                      {project.outcome}
                    </p>
                  )}
                  <p className="meta mt-5">{project.tech.join(" · ")}</p>
                  <ProjectLinks project={project} emphasizeStudy />
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-20">
          <div className="mb-6 flex items-end justify-between gap-4">
            <h3 className="font-display text-2xl tracking-tight">More work</h3>
            <p className="meta hidden sm:block">{rest.length} projects</p>
          </div>

          <div className="overflow-hidden rounded border border-border">
            {visibleRest.map((project, index) => (
              <motion.article
                key={project.slug}
                initial={reduceMotion ? false : { opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className="grid gap-3 border-b border-border bg-card p-4 last:border-b-0 transition-colors hover:bg-muted/40 sm:grid-cols-[4.5rem_1.35fr_1fr_auto] sm:items-center sm:gap-6 sm:px-5 sm:py-4"
              >
                <span className="meta">{project.year}</span>
                <div>
                  <div className="flex flex-wrap items-baseline gap-2">
                    {project.caseStudy !== false ? (
                      <Link
                        to={`/projects/${project.slug}`}
                        className="rounded text-sm font-semibold tracking-tight transition-colors hover:text-primary focus-ring"
                      >
                        {project.title}
                      </Link>
                    ) : (
                      <h4 className="text-sm font-semibold tracking-tight">{project.title}</h4>
                    )}
                    <span className="meta">{project.type}</span>
                  </div>
                  <p className="mt-1 line-clamp-2 text-sm leading-6 text-muted-foreground">
                    {project.summary}
                  </p>
                </div>
                <p className="meta hidden sm:block">{project.tech.slice(0, 3).join(" · ")}</p>
                <div className="flex flex-wrap gap-4 text-sm">
                  {project.caseStudy !== false && (
                    <Link to={`/projects/${project.slug}`} className="link-quiet">
                      Case study
                    </Link>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-quiet"
                    >
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-quiet inline-flex items-center gap-1"
                    >
                      Live
                      <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} />
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {rest.length > 3 && (
              <Button variant="outline" onClick={() => setShowAll((s) => !s)}>
                {showAll ? "Collapse list" : `Show ${rest.length - 3} more`}
              </Button>
            )}
            <Button variant="ghost" asChild>
              <a href="https://github.com/biruk-1" target="_blank" rel="noopener noreferrer">
                All repositories
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
              </a>
            </Button>
          </div>

          <p className="meta mt-8 border-t border-border pt-6">
            room reserved · more products shipping soon
          </p>
        </div>
      </div>
    </section>
  );
};
