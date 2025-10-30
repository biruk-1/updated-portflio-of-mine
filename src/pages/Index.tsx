import { useState, useEffect } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { LoadingScreen } from "@/components/LoadingScreen";

const Index = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen">
      <Sidebar theme={theme} toggleTheme={toggleTheme} />
      
      <main className="lg:ml-24">
  <Hero />
  <About />
  <Experience />
  <Skills />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
