import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  Code2,
  Briefcase,
  Mail,
  Moon,
  Sun,
  Smartphone,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export const Sidebar = ({ theme, toggleTheme }: SidebarProps) => {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "skills", "projects", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "skills", label: "Skills", icon: Code2 },
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-6 left-6 z-[60] w-12 h-12 rounded-full glass-effect flex items-center justify-center glow-effect"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </motion.button>

      {/* Sidebar */}
      <AnimatePresence>
        {(isOpen || window.innerWidth >= 1024) && (
          <motion.aside
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed left-0 top-0 h-screen w-20 lg:w-24 bg-card border-r border-border z-50 flex flex-col items-center py-8 glass-effect"
          >
            {/* Logo */}
            <motion.button
              onClick={() => scrollToSection("home")}
              className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center text-2xl font-bold text-white mb-12 glow-effect hover:scale-110 transition-transform"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              B
            </motion.button>

            {/* Navigation */}
            <nav className="flex-1 flex flex-col items-center gap-6">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative w-12 h-12 rounded-xl flex items-center justify-center transition-all group ${
                    activeSection === item.id
                      ? "bg-primary text-primary-foreground glow-effect scale-110"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={item.label}
                >
                  <item.icon className="h-5 w-5" />

                  {/* Tooltip */}
                  <motion.span
                    className="absolute left-full ml-4 px-3 py-1.5 rounded-lg bg-card border border-border text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none"
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                  >
                    {item.label}
                  </motion.span>

                  {/* Active Indicator */}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute left-0 w-1 h-8 bg-primary rounded-r-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </nav>

            {/* Theme Toggle */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="w-12 h-12 rounded-xl hover:bg-muted"
                aria-label="Toggle theme"
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: theme === "dark" ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {theme === "dark" ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                </motion.div>
              </Button>
            </motion.div>

            {/* Mobile Badge */}
            <motion.div
              className="mt-4 w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center glow-effect-secondary"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Smartphone className="h-5 w-5 text-white" />
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="lg:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>
    </>
  );
};
