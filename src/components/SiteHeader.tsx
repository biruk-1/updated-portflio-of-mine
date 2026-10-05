import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";

interface SiteHeaderProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const navItems = [
  { id: "about", label: "About", index: "01" },
  { id: "experience", label: "Experience", index: "02" },
  { id: "skills", label: "Skills", index: "03" },
  { id: "projects", label: "Work", index: "04" },
  { id: "contact", label: "Contact", index: "05" },
] as const;

const SECTION_IDS = ["home", ...navItems.map((n) => n.id)] as const;

export const SiteHeader = ({ theme, toggleTheme }: SiteHeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const location = useLocation();
  const navigate = useNavigate();
  const lockUntil = useRef(0);
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) {
      setActive("");
      return;
    }

    const ratios = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        if (Date.now() < lockUntil.current) return;

        for (const entry of entries) {
          ratios.set(entry.target.id, entry.intersectionRatio);
        }

        let bestId = "home";
        let bestRatio = 0;
        for (const id of SECTION_IDS) {
          const ratio = ratios.get(id) ?? 0;
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        }

        if (bestRatio > 0) setActive(bestId);
      },
      {
        root: null,
        // Prefer the section occupying the middle band of the viewport
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0, 0.1, 0.25, 0.4, 0.55, 0.7, 1],
      }
    );

    for (const id of SECTION_IDS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [isHome, location.pathname]);

  const go = useCallback(
    (id: string) => {
      setOpen(false);

      const scrollToSection = () => {
        const el = document.getElementById(id);
        if (!el) return;
        lockUntil.current = Date.now() + 900;
        setActive(id);
        el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
      };

      if (!isHome) {
        navigate("/", { state: { scrollTo: id } });
        return;
      }

      scrollToSection();
    },
    [isHome, navigate, reduceMotion]
  );

  useEffect(() => {
    const target = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (!isHome || !target) return;

    const timer = window.setTimeout(() => {
      const el = document.getElementById(target);
      if (!el) return;
      lockUntil.current = Date.now() + 900;
      setActive(target);
      el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
      navigate("/", { replace: true, state: null });
    }, 60);

    return () => window.clearTimeout(timer);
  }, [isHome, location.state, navigate, reduceMotion]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
          scrolled
            ? "border-border bg-background/90 backdrop-blur-md"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="site-container flex h-14 items-center justify-between sm:h-16">
          <Link
            to="/"
            onClick={(e) => {
              if (isHome) {
                e.preventDefault();
                go("home");
              }
            }}
            className="group flex items-baseline gap-2 focus-ring rounded"
            aria-label="Home"
          >
            <span className="font-display text-xl tracking-tight">Biruk</span>
            <span className="meta hidden sm:inline group-hover:text-foreground transition-colors">
              / engineer
            </span>
          </Link>

          <nav className="hidden items-center gap-0.5 md:flex" aria-label="Primary">
            {navItems.map((item) => {
              const isActive = isHome && active === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => go(item.id)}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative isolate z-10 rounded px-3 py-2 text-sm transition-colors duration-200 focus-ring ${
                    isActive ? "text-foreground" : "link-quiet"
                  }`}
                >
                  <span className="meta mr-2 hidden lg:inline">{item.index}</span>
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="pointer-events-none absolute inset-x-3 -bottom-px z-0 h-px bg-primary"
                      transition={{ type: "spring", stiffness: 420, damping: 36 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden items-center gap-2 rounded border border-border px-2.5 py-1.5 sm:flex">
              <span className="signal-dot" />
              <span className="meta">open to roles</span>
            </div>
            <button
              type="button"
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded border border-border text-muted-foreground transition-colors hover:text-foreground focus-ring"
              aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" strokeWidth={1.75} />
              ) : (
                <Moon className="h-4 w-4" strokeWidth={1.75} />
              )}
            </button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded border border-border md:hidden focus-ring"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
            >
              {open ? <X className="h-4 w-4" strokeWidth={1.75} /> : <Menu className="h-4 w-4" strokeWidth={1.75} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-14 z-40 border-b border-border bg-background md:hidden"
          >
            <nav className="site-container flex flex-col py-3" aria-label="Mobile">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => go(item.id)}
                  aria-current={isHome && active === item.id ? "true" : undefined}
                  className="flex items-center justify-between border-b border-border/70 py-3.5 text-left last:border-0 focus-ring"
                >
                  <span className="text-base font-medium">{item.label}</span>
                  <span className="meta">{item.index}</span>
                </button>
              ))}
              <div className="flex items-center gap-2 py-4">
                <span className="signal-dot" />
                <span className="meta">status: open to full-time roles</span>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
