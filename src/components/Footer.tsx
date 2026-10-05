import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="site-container py-10 lg:pl-0">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <p className="text-sm font-semibold tracking-tight">Biruk Chali</p>
            <p className="max-w-sm text-sm text-muted-foreground">
              React Native & full-stack engineer · Open to full-time roles ·
              Adama / Remote
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
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
            <a
              href="/Biruk-Chali-Resume.pdf"
              download
              className="hover:text-foreground transition-colors"
            >
              Resume
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Biruk Chali
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors text-left"
          >
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
};
