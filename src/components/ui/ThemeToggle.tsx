"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={`p-2 rounded-lg ${theme === "dark" ? "dark:hover:bg-slate-800 dark:bg-transparent border-slate-800/60 bg-slate-900" : "hover:bg-slate-100"} bg-white/80 border border-slate-200 dark:border-transparent transition-colors relative`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        animate={{ rotate: theme === "dark" ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className="relative w-5 h-5"
      >
        {theme === "dark" ? (
          <Moon
            size={20}
            className={theme === "dark" ? "text-slate-500" : "text-slate-600"}
          />
        ) : (
          <Sun size={20} className={"text-slate-500"} />
        )}
      </motion.div>
    </motion.button>
  );
}
