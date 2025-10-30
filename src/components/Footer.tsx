import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, Code2 } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socials = [
    { icon: Github, href: "https://github.com/biruk", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/biruk", label: "LinkedIn" },
    { icon: Mail, href: "mailto:biruk@example.com", label: "Email" },
  ];

  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-sm relative overflow-hidden">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 lg:ml-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center space-y-8">
            {/* Logo & Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center space-y-3"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="inline-block"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center text-3xl font-bold text-white glow-effect">
                  B
                </div>
              </motion.div>
              <p className="text-muted-foreground max-w-md">
                Building beautiful mobile and web experiences, one pixel at a time.
              </p>
            </motion.div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socials.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl glass-effect flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-effect transition-all group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </motion.a>
              ))}
            </div>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-border to-transparent"
            />

            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center space-y-2"
            >
              <p className="text-sm text-muted-foreground flex items-center justify-center gap-2 flex-wrap">
                <span className="flex items-center gap-2">
                  Crafted with
                  <motion.span
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                    }}
                  >
                    <Heart className="h-4 w-4 text-red-500 fill-red-500" />
                  </motion.span>
                  and
                  <Code2 className="h-4 w-4 text-primary" />
                </span>
                <span>by Biruk</span>
              </p>
              <p className="text-sm text-muted-foreground">
                © {currentYear} All rights reserved.
              </p>
            </motion.div>

            {/* Back to Top Button */}
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <motion.span
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ↑
              </motion.span>
              Back to top
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};
