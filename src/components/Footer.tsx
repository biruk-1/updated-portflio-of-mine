import { Link, useLocation } from "react-router-dom";

export const Footer = () => {
  const year = new Date().getFullYear();
  const { pathname } = useLocation();
  const homePrefix = pathname === "/" ? "" : "/";

  return (
    <footer className="border-t border-border">
      <div className="site-container py-10 sm:py-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md space-y-3">
            <p className="font-display text-2xl tracking-tight">Biruk Chali Tessema</p>
            <p className="text-sm leading-6 text-muted-foreground">
              React Native & full-stack engineer building production interfaces
              for mobile and web.
            </p>
            <p className="meta inline-flex items-center gap-2">
              <span className="signal-dot" />
              open to full-time · addis ababa / remote
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-12">
            <div>
              <p className="meta mb-3">navigate</p>
              <ul className="space-y-2 text-sm">
                {[
                  ["About", `${homePrefix}#about`],
                  ["Experience", `${homePrefix}#experience`],
                  ["Work", `${homePrefix}#projects`],
                  ["Contact", `${homePrefix}#contact`],
                ].map(([label, href]) => (
                  <li key={label}>
                    <Link to={href} className="link-quiet">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="meta mb-3">connect</p>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://github.com/biruk-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-quiet"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/biruk-tessema-105521231/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-quiet"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="mailto:birukchali86@gmail.com" className="link-quiet">
                    Email
                  </a>
                </li>
                <li>
                  <a href="/Biruk-Chali-Resume.pdf" download className="link-quiet">
                    Resume
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="meta mb-3">system</p>
              <ul className="space-y-2 font-mono text-[11px] text-muted-foreground">
                <li>stack: rn · next · node</li>
                <li>build: vite · react</li>
                <li>locale: en · et</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="meta">© {year} Biruk Chali Tessema · react · vite</p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="meta text-left transition-colors hover:text-foreground focus-ring rounded"
          >
            ↑ back to top
          </button>
        </div>
      </div>
    </footer>
  );
};
