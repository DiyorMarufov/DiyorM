"use client";

import { motion } from "framer-motion";
import { Code, Palette, Server, Wrench } from "lucide-react";

const skills = [
  {
    category: "Languages",
    icon: Code,
    items: ["JavaScript", "TypeScript", "Python", "SQL"],
    color: "from-blue-500 to-blue-600",
  },
  {
    category: "Frontend",
    icon: Palette,
    items: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    color: "from-purple-500 to-purple-600",
  },
  {
    category: "Backend",
    icon: Server,
    items: ["Node.js", "NestJS", "PostgreSQL", "MongoDB"],
    color: "from-green-500 to-green-600",
  },
  {
    category: "Tools",
    icon: Wrench,
    items: ["Git", "Docker", "AWS", "CI/CD"],
    color: "from-orange-500 to-orange-600",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 relative">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20 dark:opacity-40">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid-skills"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-slate-300 dark:text-slate-500"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-skills)" />
        </svg>
      </div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 3, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-10 left-5 w-16 h-16 bg-indigo-500/5 rounded-full blur-lg"
        />
        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, -3, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-10 right-5 w-20 h-20 bg-purple-500/5 rounded-full blur-lg"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Technical Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set spanning modern web technologies and
            development practices
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.category}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 dark:border-border/60 bg-white dark:bg-card/80 backdrop-blur-sm p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white dark:hover:bg-card"
              >
                <div
                  className={`absolute inset-0 bg-linear-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  <div
                    className={`inline-flex p-3 rounded-xl bg-linear-to-br ${skill.color} text-white mb-4`}
                  >
                    <Icon size={24} />
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {skill.category}
                  </h3>

                  <ul className="space-y-2">
                    {skill.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-muted-foreground flex items-center"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
