"use client";

import { motion } from "framer-motion";
import {
  User,
  MapPin,
  Mail,
  Github,
  Linkedin,
  Calendar,
  Award,
  Target,
  Heart,
  Send,
} from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            About{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 via-purple-600 to-indigo-400">
              Me
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my journey, passions, and what drives me as a
            developer
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <User className="text-indigo-600" size={24} />
                Personal Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                    <User size={18} className="text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Name</p>
                    <p className="font-medium">Diyor Marufov</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                    <MapPin size={18} className="text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">Tashkent, Uzbekistan</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <Mail size={18} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">marufovdiyor9@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <Calendar size={18} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Current role
                    </p>
                    <p className="font-medium">Junior Software Engineer</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border">
              <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>
              <div className="flex gap-4">
                <motion.a
                  href="https://github.com/DiyorMarufov"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  <Github
                    size={20}
                    className="text-slate-700 dark:text-slate-300"
                  />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/diyor-marufov-8b9958352/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-colors"
                >
                  <Linkedin size={20} className="text-blue-600" />
                </motion.a>
                <motion.a
                  href="https://t.me/MarufovD"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center hover:bg-sky-200 dark:hover:bg-sky-800/50 transition-colors"
                >
                  <Send size={20} className="text-sky-600" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Target className="text-purple-600" size={24} />
                My Story
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate full-stack engineer with a deep love for
                  creating elegant, scalable solutions to complex problems. My
                  journey in software development began over 1 years ago, and
                  since then, I've been dedicated to mastering both frontend and
                  backend technologies.
                </p>
                <p>
                  I specialize in building high-performance web applications
                  using modern frameworks like React, Next.js, and Node.js. My
                  approach combines clean architecture principles with
                  user-centric design to deliver exceptional digital
                  experiences.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new
                  technologies, contributing to open-source projects, or sharing
                  knowledge with the developer community.
                </p>
              </div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Heart className="text-red-500" size={24} />
                Core Values & Interests
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Award size={16} className="text-indigo-600" />
                  <span className="text-sm">Clean Code</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award size={16} className="text-purple-600" />
                  <span className="text-sm">Performance</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award size={16} className="text-blue-600" />
                  <span className="text-sm">User Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award size={16} className="text-green-600" />
                  <span className="text-sm">Open Source</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award size={16} className="text-red-600" />
                  <span className="text-sm">Continuous Learning</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award size={16} className="text-yellow-600" />
                  <span className="text-sm">Motivated</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
