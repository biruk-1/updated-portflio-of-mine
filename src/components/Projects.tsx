import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ExternalLink, Github, Smartphone, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Project images (from src/assets)
import cosmicAIImage from "@/assets/cosmicai.png";
import coachAIImage from "@/assets/coachai.png";
import hotelImage from "@/assets/hotel.png";
import fitnessImage from "@/assets/fitness.png";
import ticketsImage from "@/assets/ticket.png";
import conveneImage from "@/assets/convene.png";
import consultImage from "@/assets/conseltuncy.png";
import castingImage from "@/assets/casting.png";
import adminDashboard from "@/assets/adminDashboard.png";
import alRajaaImage from "@/assets/al-rajaa.png";
import defaultImage from "@/assets/image.png";

export const Projects = () => {
  // Use the user's provided projects data (images imported above)
  const projectsData = [
    {
      title: "CosmicAI",
      description:
        "Full-stack astrology and psychic consultation app with real-time AI chatbot integration and location-based recommendations.",
      technologies:
        "React Native, Express.js, Supabase, RevenueCat, Expo, Expo Push Notifications",
      githubLink: "https://github.com/biruk-1/psysc-pro",
      demoLink: "https://cosmicai.vercel.app/",
      image: cosmicAIImage,
      featured: true,
    },
    {
      title: "Coach AI",
      description:
        "Health and fitness mobile application connecting users with coaches nearby, featuring AI-guided fitness tips and real-time chat.",
      technologies: "React Native, Express.js, DigitalOcean, RevenueCat, Expo",
      githubLink: "https://github.com/biruk-1/coaching-app",
      demoLink: "https://coachai.vercel.app/",
      image: coachAIImage,
      featured: true,
    },
    {
      title: "Hotel Management System Dashboard",
      description:
        "Comprehensive dashboard system with multi-role access for hotel staff like admin, waiter, cashier, and kitchen, including offline support.",
      technologies: "React, Express.js, SQLite, IndexedDB, cPanel",
      githubLink: "https://github.com/biruk-1/POS-system",
      demoLink: "https://hotel-dashboard.vercel.app/",
      image: hotelImage,
      featured: true,
    },
    {
      title: "Fitness Tracker App",
      description:
        "A React Native app offering BMI calculations, workout plans, and dietary recommendations.",
      technologies: "React Native, Redux, Django, MongoDB",
      githubLink: "https://github.com/biruk-1/fitness",
      demoLink: "#",
      image: fitnessImage,
    },
    {
      title: "Ticket App for Event Organizers",
      description:
        "A mobile app enabling event organizers to sell tickets, manage events, and track attendees.",
      technologies: "React Native, Firebase",
      githubLink: "https://github.com/biruk-1/my-ticket-app/tree/master",
      demoLink: "#",
      image: ticketsImage,
    },
    {
      title: "Convene App",
      description:
        "An app for scheduling meetings and task management with real-time notifications.",
      technologies: "React Native, Node.js, MongoDB",
      githubLink: "https://github.com/biruk-1/Convene/tree/master",
      demoLink: "#",
      image: conveneImage,
    },
    {
      title: "Competent Scholars Website",
      description:
        "A platform for students to find colleges and apply directly, with backend integration for analytics.",
      technologies: "React, Django, MySQL",
      githubLink: "https://github.com/biruk-1/conceltancyProject",
      demoLink: "#",
      image: consultImage,
    },
    {
      title: "Casting Website",
      description: "A comprehensive platform that connects models and casting agencies.",
      technologies: "React, JSON",
      githubLink: "https://github.com/biruk-1/casting",
      demoLink: "https://casting-alpha.vercel.app/",
      image: castingImage,
    },
    {
      title: "Casting Admin Dashboard",
      description: "The admin dashboard for managing subscriptions and analytics.",
      technologies: "React, JSON",
      githubLink: "https://github.com/biruk-1/castingAdmin",
      demoLink: "https://castingAdmin-alpha.vercel.app/",
      image: adminDashboard,
    },
    {
      title: "Al-rajaa Recruitment Agency Website",
      description:
        "Website built for Al-rajaa Recruitment Agency with admin features.",
      technologies: "React, Firebase, ExpressJS",
      githubLink: "https://github.com/biruk-1/Al-rajaa-Workers",
      demoLink: "https://al-rajaa-workers.vercel.app/",
      image: alRajaaImage,
    },
  ];

  // Normalize data to the shape used by the existing renderer
  const projects = projectsData.map((p) => ({
    title: p.title,
    description: p.description,
    tech: p.technologies ? p.technologies.split(",").map((t) => t.trim()) : [],
    github: p.githubLink,
    live: p.demoLink,
    image: p.image || defaultImage,
    type: p.technologies && p.technologies.toLowerCase().includes("react native") ? "mobile" : "web",
  }));

  // Show-more state: show only first two rows initially (responsive)
  const [showAll, setShowAll] = useState(false);
  const [initialCount, setInitialCount] = useState(6);

  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      if (w >= 1024) setInitialCount(6); // lg: 3 cols * 2 rows
      else if (w >= 768) setInitialCount(4); // md: 2 cols * 2 rows
      else setInitialCount(2); // sm: 1 col * 2 rows
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  const visibleProjects = showAll ? projects : projects.slice(0, initialCount);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <section id="projects" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute top-1/4 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              className="inline-block mb-4"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <span className="text-6xl">💼</span>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Showcasing mobile and web applications built with passion
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {visibleProjects.map((project) => (
              <motion.div key={project.title} variants={item}>
                <Card className="overflow-hidden glass-effect border-border hover:border-primary/50 transition-all duration-300 group h-full flex flex-col">
                  {/* Project Header - use real image as background */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Dim layer for contrast */}
                    <div className="absolute inset-0 bg-black/30" />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                        className="p-2 rounded-full bg-black/30"
                      >
                        {project.type === "mobile" ? (
                          <Smartphone className="h-14 w-14 text-white drop-shadow-lg" />
                        ) : (
                          <Globe className="h-14 w-14 text-white drop-shadow-lg" />
                        )}
                      </motion.div>
                    </div>

                    {/* Type Badge */}
                    <div className="absolute top-4 right-4">
                      <Badge
                        variant="secondary"
                        className="bg-white/90 backdrop-blur-sm text-foreground font-semibold"
                      >
                        {project.type === "mobile" ? "📱 Mobile" : "🌐 Web"}
                      </Badge>
                    </div>

                    {/* Animated Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={false}
                    />
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <motion.h3
                      className="text-xl font-bold mb-3 group-hover:text-gradient transition-all"
                      whileHover={{ x: 5 }}
                    >
                      {project.title}
                    </motion.h3>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: techIndex * 0.05 }}
                        >
                          <Badge
                            variant="outline"
                            className="text-xs border-primary/30 hover:border-primary hover:bg-primary/10 transition-colors"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 group/btn"
                        asChild
                      >
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                          Code
                        </motion.a>
                      </Button>
                      <Button size="sm" className="flex-1 group/btn" asChild>
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                          Demo
                        </motion.a>
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* View More / Show Less + GitHub Link */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <div className="flex items-center gap-3">
              <Button
                size="lg"
                className="font-semibold"
                onClick={() => setShowAll((s) => !s)}
              >
                {showAll ? "Show Less" : "Show More"}
              </Button>
              <div className="text-sm text-muted-foreground">Showing {Math.min(showAll ? projects.length : initialCount, projects.length)} of {projects.length}</div>
            </div>

            <Button
              size="lg"
              variant="outline"
              className="font-semibold border-2 hover:border-primary hover:text-primary"
              asChild
            >
              <motion.a
                href="https://github.com/biruk-1"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="mr-2 h-5 w-5" />
                View All Projects on GitHub
              </motion.a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

function ShowMoreControls({ projects }: { projects: any[] }) {
  const [showAll, setShowAll] = useState(false);
  const [initialCount, setInitialCount] = useState(6);

  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      if (w >= 1024) setInitialCount(6); // lg: 3 cols * 2 rows
      else if (w >= 768) setInitialCount(4); // md: 2 cols * 2 rows
      else setInitialCount(2); // sm: 1 col * 2 rows
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  const visible = showAll ? projects.length : initialCount;

  // Render the toggle button which will control visible items via a custom event
  // We'll communicate visibility by updating a data attribute on the grid container so CSS/JS can respond.
  // Simpler: dispatch a custom event with visible count
  useEffect(() => {
    const evt = new CustomEvent("projects:visible", { detail: { visible } });
    window.dispatchEvent(evt);
  }, [visible]);

  return (
    <div className="flex items-center gap-3">
      <Button
        size="lg"
        className="font-semibold"
        onClick={() => setShowAll((s) => !s)}
      >
        {showAll ? "Show Less" : "Show More"}
      </Button>
      <div className="text-sm text-muted-foreground">Showing {Math.min(visible, projects.length)} of {projects.length}</div>
    </div>
  );
}

