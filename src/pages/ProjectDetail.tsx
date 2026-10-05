import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";
import { getProjectBySlug, projects } from "@/data/projects";
import NotFound from "@/pages/NotFound";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { theme, toggleTheme } = useTheme();
  const reduceMotion = useReducedMotion();
  const project = slug ? getProjectBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project || project.caseStudy === false) {
    return <NotFound />;
  }

  const related = projects
    .filter((p) => p.slug !== project.slug && p.caseStudy !== false && p.featured)
    .slice(0, 2);

  return (
    <div className="site-shell">
      <SiteHeader theme={theme} toggleTheme={toggleTheme} />
      <main>
        <article className="section-pad pt-10 sm:pt-14">
          <div className="site-container">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                to="/#projects"
                className="link-quiet inline-flex items-center gap-2 text-sm focus-ring rounded"
              >
                <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
                Back to work
              </Link>

              <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-12">
                <div>
                  <p className="section-label">
                    case study · {project.type.toLowerCase()} · {project.year}
                  </p>
                  <h1 className="font-display text-4xl tracking-[-0.03em] sm:text-5xl md:text-6xl">
                    {project.title}
                  </h1>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg sm:leading-9">
                    {project.summary}
                  </p>
                </div>

                <div className="surface p-5 sm:p-6">
                  <dl className="space-y-4">
                    <div>
                      <dt className="meta">stack</dt>
                      <dd className="mt-1 text-sm leading-6 text-foreground/90">
                        {project.tech.join(" · ")}
                      </dd>
                    </div>
                    <div>
                      <dt className="meta">type</dt>
                      <dd className="mt-1 text-sm text-foreground/90">
                        {project.type} · {project.year}
                      </dd>
                    </div>
                    {project.outcome && (
                      <div>
                        <dt className="meta">outcome</dt>
                        <dd className="mt-1 text-sm leading-6 text-foreground/90">
                          {project.outcome}
                        </dd>
                      </div>
                    )}
                  </dl>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.live && (
                      <Button asChild>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          Live demo
                          <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
                        </a>
                      </Button>
                    )}
                    {project.github && (
                      <Button variant="outline" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          GitHub
                          <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="mt-12"
            >
              <div className="surface overflow-hidden">
                <div className="flex items-center gap-2 border-b border-border px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-border" />
                  <span className="h-2 w-2 rounded-full bg-border" />
                  <span className="h-2 w-2 rounded-full bg-border" />
                  <span className="meta ml-2 truncate">
                    {project.live?.replace(/^https?:\/\//, "") ?? `${project.slug}.local`}
                  </span>
                </div>
                <div className="aspect-[16/9] overflow-hidden bg-muted sm:aspect-[21/10]">
                  <img
                    src={project.image}
                    alt={`${project.title} interface preview`}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            <div className="mt-16 grid gap-14 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-16">
              <div className="space-y-14">
                <section>
                  <p className="section-label">overview</p>
                  <h2 className="section-title text-3xl sm:text-4xl">What it is</h2>
                  <p className="mt-4 max-w-3xl text-base leading-8 text-muted-foreground">
                    {project.overview}
                  </p>
                </section>

                {(project.problem || project.solution) && (
                  <section className="grid gap-8 sm:grid-cols-2">
                    {project.problem && (
                      <div className="surface p-5 sm:p-6">
                        <p className="meta text-primary">problem</p>
                        <p className="mt-3 text-sm leading-7 text-muted-foreground">
                          {project.problem}
                        </p>
                      </div>
                    )}
                    {project.solution && (
                      <div className="surface p-5 sm:p-6">
                        <p className="meta text-primary">solution</p>
                        <p className="mt-3 text-sm leading-7 text-muted-foreground">
                          {project.solution}
                        </p>
                      </div>
                    )}
                  </section>
                )}

                <section>
                  <p className="section-label">ownership</p>
                  <h2 className="section-title text-3xl sm:text-4xl">My contribution</h2>
                  <p className="mt-4 max-w-3xl text-base leading-8 text-muted-foreground">
                    {project.role}
                  </p>
                </section>

                {project.architecture && project.architecture.length > 0 && (
                  <section>
                    <p className="section-label">implementation</p>
                    <h2 className="section-title text-3xl sm:text-4xl">Technical approach</h2>
                    <ul className="mt-6 space-y-3">
                      {project.architecture.map((item) => (
                        <li
                          key={item}
                          className="relative border-l-2 border-primary/40 pl-4 text-sm leading-7 text-muted-foreground"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                {project.features && project.features.length > 0 && (
                  <section>
                    <p className="section-label">product</p>
                    <h2 className="section-title text-3xl sm:text-4xl">Key features</h2>
                    <div className="mt-6 grid gap-px overflow-hidden rounded border border-border bg-border sm:grid-cols-2">
                      {project.features.map((feature, index) => (
                        <div key={feature} className="bg-card p-5">
                          <p className="meta text-primary">
                            {String(index + 1).padStart(2, "0")}
                          </p>
                          <p className="mt-3 text-sm leading-6 text-foreground/90">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {project.challenges && project.challenges.length > 0 && (
                  <section>
                    <p className="section-label">engineering</p>
                    <h2 className="section-title text-3xl sm:text-4xl">
                      Challenges & decisions
                    </h2>
                    <div className="mt-6 space-y-5">
                      {project.challenges.map((item) => (
                        <div key={item.challenge} className="border-t border-border pt-5">
                          <h3 className="text-sm font-semibold tracking-tight">
                            {item.challenge}
                          </h3>
                          <p className="mt-2 text-sm leading-7 text-muted-foreground">
                            {item.approach}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {project.results && project.results.length > 0 && (
                  <section>
                    <p className="section-label">results</p>
                    <h2 className="section-title text-3xl sm:text-4xl">Outcomes</h2>
                    <ul className="mt-6 space-y-3">
                      {project.results.map((result) => (
                        <li
                          key={result}
                          className="relative pl-4 text-sm leading-7 text-muted-foreground before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-primary"
                        >
                          {result}
                        </li>
                      ))}
                    </ul>
                  </section>
                )}
              </div>

              <aside className="lg:sticky lg:top-24 lg:self-start">
                <div className="surface p-5">
                  <p className="meta">project links</p>
                  <div className="mt-4 space-y-3 text-sm">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between rounded border border-border px-3 py-2.5 transition-colors hover:border-primary/40 focus-ring"
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
                        className="flex items-center justify-between rounded border border-border px-3 py-2.5 transition-colors hover:border-primary/40 focus-ring"
                      >
                        Source on GitHub
                        <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} />
                      </a>
                    )}
                    <Link
                      to="/#contact"
                      className="flex items-center justify-between rounded border border-border px-3 py-2.5 transition-colors hover:border-primary/40 focus-ring"
                    >
                      Discuss a role
                      <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} />
                    </Link>
                  </div>
                </div>

                {related.length > 0 && (
                  <div className="mt-6">
                    <p className="meta mb-3">more case studies</p>
                    <ul className="space-y-3">
                      {related.map((item) => (
                        <li key={item.slug}>
                          <Link
                            to={`/projects/${item.slug}`}
                            className="block rounded border border-border bg-card p-4 transition-colors hover:border-primary/40 focus-ring"
                          >
                            <p className="meta">
                              {item.type} · {item.year}
                            </p>
                            <p className="mt-2 text-sm font-semibold tracking-tight">
                              {item.title}
                            </p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </aside>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
