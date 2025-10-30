import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      exit={{ opacity: 0 }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-mesh opacity-20" />
      
      <motion.div
        className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />
      
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
        }}
      />

      <div className="text-center space-y-8 relative z-10">
        <motion.div
          className="relative"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          <motion.h1
            className="text-8xl md:text-9xl font-bold font-poppins text-gradient"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            B
          </motion.h1>
          
          <motion.div
            className="absolute inset-0 blur-3xl bg-primary/30"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </motion.div>

        <div className="w-80 mx-auto space-y-3">
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary via-secondary to-accent"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          
          <motion.p
            className="text-muted-foreground font-medium text-sm"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Loading experience... {progress}%
          </motion.p>
        </div>

        <motion.div
          className="flex items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 rounded-full bg-primary"
              animate={{
                y: [0, -15, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};
