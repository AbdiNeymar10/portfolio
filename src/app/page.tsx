"use client";

import { motion } from "framer-motion";
import Head from "next/head";
import Hero from "../app/components/Hero";
import Projects from "../app/components/Projects";
import About from "../app/components/About";
import Contact from "../app/components/Contact";
import Footer from "../app/components/Footer";
import Navbar from "../app/components/Navbar";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <>
      <Head>
        <title>Abdi Neymar | Portfolio</title>
        <meta
          name="description"
          content="Professional portfolio showcasing my work and skills"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

          <motion.main
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="pt-24"
          >
            {/* Hero Section */}
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Hero />
            </motion.section>

            {/* Projects Section */}
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Projects />
            </motion.section>

            {/* About Section */}
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <About />
            </motion.section>

            {/* Contact Section */}
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Contact />
            </motion.section>
          </motion.main>

          <Footer />
        </div>
      </div>
    </>
  );
}
