import { useState, useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Home,
  User,
  Briefcase,
  Layers,
  FolderKanban,
  Mail,
  Moon,
  Sun,
  Menu,
  X,
} from "lucide-react";

interface SidebarProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const LG_BREAKPOINT = 1024;

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "skills", label: "Skills", icon: Layers },
  { id: "projects", label: "Projects", icon: FolderKanban },
  { id: "contact", label: "Contact", icon: Mail },
];

export const Sidebar = ({ theme, toggleTheme }: SidebarProps) => {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const mql = window.matchMedia(`(min-width: ${LG_BREAKPOINT}px)`);
    const onChange = () => {
      setIsDesktop(mql.matches);
      if (mql.matches) setIsOpen(false);
    };
    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((n) => n.id);
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 180 && rect.bottom >= 180;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false);
  };

  const showSidebar = isDesktop || isOpen;

  return (
    <>
      <button
        onClick={() => setIsOpen((v) => !v)}
        className="lg:hidden fixed top-4 right-4 z-[60] h-10 w-10 rounded-md border border-border bg-background flex items-center justify-center"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="h-4 w-4" strokeWidth={1.75} /> : <Menu className="h-4 w-4" strokeWidth={1.75} />}
      </button>

      <AnimatePresence>
        {showSidebar && (
          <motion.aside
            initial={reduceMotion || isDesktop ? false : { x: -240 }}
            animate={{ x: 0 }}
            exit={reduceMotion ? undefined : { x: -240 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed left-0 top-0 z-50 flex h-screen w-[4.5rem] flex-col items-center border-r border-border bg-background py-5"
          >
            <button
              onClick={() => scrollToSection("home")}
              className="mb-8 text-sm font-semibold tracking-tight text-foreground"
              aria-label="Go to home"
            >
              BC
            </button>

            <nav className="flex flex-1 flex-col items-center gap-1">
              {navItems.map((item) => {
                const active = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    title={item.label}
                    aria-label={item.label}
                    aria-current={active ? "page" : undefined}
                    className={`relative flex h-10 w-10 items-center justify-center rounded-md transition-colors ${
                      active
                        ? "text-foreground bg-muted"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                    }`}
                  >
                    {active && (
                      <span className="absolute left-0 top-1/2 h-4 w-0.5 -translate-y-1/2 rounded-full bg-primary" />
                    )}
                    <item.icon className="h-4 w-4" strokeWidth={1.75} />
                  </button>
                );
              })}
            </nav>

            <button
              onClick={toggleTheme}
              className="flex h-10 w-10 items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" strokeWidth={1.75} />
              ) : (
                <Moon className="h-4 w-4" strokeWidth={1.75} />
              )}
            </button>
          </motion.aside>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && !isDesktop && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="lg:hidden fixed inset-0 z-40 bg-background/70"
          />
        )}
      </AnimatePresence>
    </>
  );
};
