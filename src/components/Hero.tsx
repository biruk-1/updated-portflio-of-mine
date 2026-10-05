import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.webp";

export const Hero = () => {
  const reduceMotion = useReducedMotion();

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const specs = [
    { key: "mobile", value: "React Native · Expo" },
    { key: "web", value: "React · Next.js" },
    { key: "backend", value: "Node · Postgres" },
    { key: "focus", value: "Production apps" },
  ];

  return (
    <section id="home" className="section-pad relative overflow-hidden pt-10 sm:pt-14 md:pt-16">
      <div className="site-container">
        <div className="grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 xl:gap-20">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 meta">
              <span className="inline-flex items-center gap-2">
                <span className="signal-dot" />
                available
              </span>
              <span className="text-border">/</span>
              <span>portfolio · 2026</span>
              <span className="text-border">/</span>
              <span>addis ababa · utc+3</span>
            </div>

            <div className="space-y-5">
              <p className="meta text-primary">React Native & full-stack engineer</p>
              <h1 className="font-display text-[2.75rem] leading-[0.98] tracking-[-0.03em] sm:text-5xl md:text-6xl xl:text-[4.75rem]">
                Biruk Chali{" "}
                <span className="text-foreground/80">Tessema</span>
                <span
                  className="ml-1 inline-block h-[0.85em] w-[0.08em] translate-y-[0.08em] bg-primary align-baseline animate-caret-blink"
                  aria-hidden
                />
              </h1>

              <p className="max-w-xl text-lg leading-8 text-foreground/85 sm:text-xl sm:leading-9">
                I own production mobile and web interfaces end to end —
                React Native, Expo, React/Next.js, Node, auth, realtime, and
                store-ready releases.
              </p>
            </div>

            <div className="grid gap-3 border-y border-border py-5 sm:grid-cols-2">
              {specs.map((spec) => (
                <div key={spec.key} className="flex items-baseline gap-3">
                  <span className="meta w-16 shrink-0">{spec.key}</span>
                  <span className="text-sm text-foreground/90">{spec.value}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button size="lg" onClick={() => go("projects")} className="min-w-[8.5rem]">
                View work
              </Button>
              <Button size="lg" variant="outline" onClick={() => go("contact")}>
                Contact
              </Button>
              <Button size="lg" variant="ghost" asChild>
                <a href="/Biruk-Chali-Resume.pdf" download>
                  <Download className="h-4 w-4" strokeWidth={1.75} />
                  Resume
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-5 text-sm">
              <a
                href="https://github.com/biruk-1"
                target="_blank"
                rel="noopener noreferrer"
                className="link-quiet inline-flex items-center gap-1"
              >
                github.com/biruk-1
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} />
              </a>
              <a
                href="mailto:birukchali86@gmail.com"
                className="link-quiet inline-flex items-center gap-1"
              >
                birukchali86@gmail.com
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} />
              </a>
            </div>
          </motion.div>

          <motion.aside
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto w-full max-w-[22rem] sm:max-w-[24rem] lg:ml-auto lg:mr-0 lg:max-w-[82%]"
          >
            <div className="surface overflow-hidden">
              <div className="flex items-center gap-2 border-b border-border px-3 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" aria-hidden />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" aria-hidden />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" aria-hidden />
                <span className="meta ml-2">profile.tsx</span>
              </div>
              <div className="relative aspect-[4/5] bg-muted">
                <img
                  src={profileImage}
                  alt="Biruk Chali Tessema"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="space-y-2.5 border-t border-border bg-muted/30 px-4 py-4 font-mono text-[12px] leading-6 sm:text-[13px] sm:leading-7">
                <p>
                  <span className="text-muted-foreground/70">01</span>{" "}
                  <span className="text-primary">const</span>{" "}
                  <span className="text-foreground">role</span>{" "}
                  <span className="text-muted-foreground">=</span>{" "}
                  <span className="text-emerald-600 dark:text-emerald-400">
                    "full-stack engineer"
                  </span>
                  <span className="text-muted-foreground">;</span>
                </p>
                <p>
                  <span className="text-muted-foreground/70">02</span>{" "}
                  <span className="text-primary">const</span>{" "}
                  <span className="text-foreground">ships</span>{" "}
                  <span className="text-muted-foreground">=</span>{" "}
                  <span className="text-emerald-600 dark:text-emerald-400">
                    ["mobile", "web"]
                  </span>
                  <span className="text-muted-foreground">;</span>
                </p>
                <p>
                  <span className="text-muted-foreground/70">03</span>{" "}
                  <span className="text-primary">export</span>{" "}
                  <span className="text-primary">default</span>{" "}
                  <span className="text-foreground">Biruk</span>
                  <span className="text-muted-foreground">;</span>
                </p>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};
