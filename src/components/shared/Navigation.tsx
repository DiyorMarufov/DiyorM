"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { useTheme } from "@/contexts/ThemeContext";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    closed: {
      opacity: 0,
      x: -20,
    },
    open: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={cn(
          "fixed min-[767px]:left-1/2 max-[767px]:right-2 top-1 min-[767px]:-translate-x-1/2 z-50 rounded-full border px-6 py-3 backdrop-blur-lg transition-all duration-300",
          scrolled && "bg-white/95 shadow-lg",
          theme === "dark"
            ? "border-slate-800/60 bg-slate-900"
            : "border-slate-200/60 bg-white/90",
        )}
      >
        <div className="flex items-center justify-between gap-4">
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium text-slate-600 dark:text-slate-400 transition-colors hover:text-slate-900 dark:hover:text-slate-100 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-lg ${theme === "dark" ? "dark:hover:bg-slate-800 dark:bg-transparent" : "hover:bg-slate-100"} transition-colors relative`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={isOpen ? "open" : "closed"}
                className="w-5 h-4 relative"
              >
                <motion.span
                  animate={{
                    rotate: isOpen ? 45 : 0,
                    y: isOpen ? 6 : 0,
                  }}
                  className={`absolute top-0 left-0 w-5 h-0.5 ${theme === "dark" ? "bg-slate-500" : "bg-slate-500"}`}
                />
                <motion.span
                  animate={{
                    opacity: isOpen ? 0 : 1,
                  }}
                  className={`absolute top-1.5 left-0 w-5 h-0.5 ${theme === "dark" ? "bg-slate-500" : "bg-slate-500"}`}
                />
                <motion.span
                  animate={{
                    rotate: isOpen ? -45 : 0,
                    y: isOpen ? -6 : 0,
                  }}
                  className={`absolute top-3 left-0 w-5 h-0.5 ${theme === "dark" ? "bg-slate-500" : "bg-slate-500"}`}
                />
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className={`fixed top-20 left-4 right-4 z-50 rounded-2xl ${
                theme === "dark"
                  ? "border border-white/10 bg-slate-900/90 shadow-2xl shadow-black/50"
                  : "border border-slate-200/60 bg-white/95 shadow-sm"
              } backdrop-blur-xl shadow-2xl md:hidden overflow-hidden`}
            >
              <div className="p-6 space-y-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.label}
                    variants={itemVariants}
                    onClick={() => scrollToSection(item.href)}
                    className={`w-full text-left px-4 py-4 text-lg font-medium transition-all duration-200 rounded-xl flex items-center justify-between group ${
                      theme === "dark"
                        ? "text-slate-300 hover:bg-slate-800/50 hover:text-indigo-400"
                        : "text-slate-700 hover:bg-slate-50 hover:text-indigo-600"
                    }`}
                  >
                    <span>{item.label}</span>
                    <motion.span
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                      className={`opacity-0 group-hover:opacity-100 transition-opacity ${
                        theme === "dark" ? "text-indigo-400" : "text-indigo-600"
                      }`}
                    >
                      →
                    </motion.span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
