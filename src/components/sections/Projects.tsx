"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/types";

const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory management, payment processing, and responsive design.",
    tech: ["Next.js", "NestJS", "PostgreSQL", "Stripe"],
    liveUrl: "https://example.com",
    sourceUrl: "https://github.com",
  },
  {
    id: "2",
    title: "Task Management System",
    description:
      "Collaborative project management tool with drag-and-drop interface, real-time updates, and team analytics.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    liveUrl: "https://example.com",
    sourceUrl: "https://github.com",
  },
  {
    id: "3",
    title: "AI Content Generator",
    description:
      "Machine learning powered content generation platform with customizable templates and SEO optimization.",
    tech: ["Python", "FastAPI", "React", "OpenAI"],
    liveUrl: "https://example.com",
    sourceUrl: "https://github.com",
  },
  {
    id: "4",
    title: "Real-time Analytics Dashboard",
    description:
      "Interactive data visualization dashboard with live metrics, custom reports, and export functionality.",
    tech: ["TypeScript", "D3.js", "Express", "Redis"],
    liveUrl: "https://example.com",
    sourceUrl: "https://github.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 relative">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20 dark:opacity-40">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid-projects"
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
          <rect width="100%" height="100%" fill="url(#grid-projects)" />
        </svg>
      </div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 25, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-10 w-24 h-24 bg-blue-500/5 rounded-full blur-lg"
        />
        <motion.div
          animate={{
            x: [0, -20, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-20 left-10 w-18 h-18 bg-indigo-500/5 rounded-full blur-lg"
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
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of recent work showcasing full-stack development
            capabilities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-card/80 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-border/60 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white dark:hover:bg-card"
            >
              <div className="aspect-video bg-linear-to-br from-muted/50 to-muted/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-lg bg-card/60 backdrop-blur-sm flex items-center justify-center border border-border/60">
                    <div className="w-8 h-8 rounded bg-indigo-500" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors font-medium text-sm"
                    >
                      <ExternalLink size={16} />
                      View Project
                    </a>
                  )}
                  {project.sourceUrl && (
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-medium text-sm"
                    >
                      <Github size={16} />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
