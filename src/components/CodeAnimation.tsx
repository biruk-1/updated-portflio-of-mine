import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export const CodeAnimation = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-full max-w-2xl mx-auto"
    >
      {/* Window Controls */}
      <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 rounded-t-2xl border border-border border-b-0">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="ml-4 text-xs text-muted-foreground font-mono">
          developer.tsx
        </span>
      </div>

      {/* Code Block */}
      <div className="code-block p-6 rounded-b-2xl min-h-[300px] relative overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                               linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
            }}
          />
        </div>

        {/* Glow Effect */}
        <motion.div
          className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        />

        <TypeAnimation
          sequence={[
            "const developer = {\n",
            100,
            "const developer = {\n  name: 'Biruk Chali',\n",
            100,
            "const developer = {\n  name: 'Biruk Chali',\n  title: 'Full-Stack Software Engineer',\n",
            100,
            "const developer = {\n  name: 'Biruk Chali',\n  title: 'Full-Stack Software Engineer',\n  specialty: 'React Native Expert',\n",
            100,
            "const developer = {\n  name: 'Biruk Chali',\n  title: 'Full-Stack Software Engineer',\n  specialty: 'React Native Expert',\n  experience: '3+ years',\n",
            100,
            "const developer = {\n  name: 'Biruk Chali',\n  title: 'Full-Stack Software Engineer',\n  specialty: 'React Native Expert',\n  experience: '3+ years',\n  stack: [\n",
            100,
            "const developer = {\n  name: 'Biruk Chali',\n  title: 'Full-Stack Software Engineer',\n  specialty: 'React Native Expert',\n  experience: '3+ years',\n  stack: [\n    'React Native',\n",
            100,
            "const developer = {\n  name: 'Biruk Chali',\n  title: 'Full-Stack Software Engineer',\n  specialty: 'React Native Expert',\n  experience: '3+ years',\n  stack: [\n    'React Native',\n    'React & Next.js',\n",
            100,
            "const developer = {\n  name: 'Biruk Chali',\n  title: 'Full-Stack Software Engineer',\n  specialty: 'React Native Expert',\n  experience: '3+ years',\n  stack: [\n    'React Native',\n    'React & Next.js',\n    'Node.js & Django',\n",
            100,
            "const developer = {\n  name: 'Biruk Chali',\n  title: 'Full-Stack Software Engineer',\n  specialty: 'React Native Expert',\n  experience: '3+ years',\n  stack: [\n    'React Native',\n    'React & Next.js',\n    'Node.js & Django',\n    'MongoDB & PostgreSQL'\n  ],\n",
            100,
            "const developer = {\n  name: 'Biruk Chali',\n  title: 'Full-Stack Software Engineer',\n  specialty: 'React Native Expert',\n  experience: '3+ years',\n  stack: [\n    'React Native',\n    'React & Next.js',\n    'Node.js & Django',\n    'MongoDB & PostgreSQL'\n  ],\n  passion: '🚀 Building mobile-first solutions',\n",
            100,
            "const developer = {\n  name: 'Biruk Chali',\n  title: 'Full-Stack Software Engineer',\n  specialty: 'React Native Expert',\n  experience: '3+ years',\n  stack: [\n    'React Native',\n    'React & Next.js',\n    'Node.js & Django',\n    'MongoDB & PostgreSQL'\n  ],\n  passion: '🚀 Building mobile-first solutions',\n  status: 'Freelancing on Upwork'\n};",
            2000,
          ]}
          wrapper="div"
          speed={50}
          className="text-sm md:text-base text-foreground font-mono relative z-10 whitespace-pre-wrap break-words"
          repeat={Infinity}
          cursor={true}
        />

        {/* Line Numbers */}
        <div className="absolute left-2 top-6 text-muted-foreground/30 font-mono text-xs space-y-1 select-none">
          {Array.from({ length: 13 }, (_, i) => (
            <div key={i} className="leading-6">
              {i + 1}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
