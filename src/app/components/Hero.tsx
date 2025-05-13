"use client";

import { motion } from "framer-motion";
import Particles from "./Particles";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";
import Image from "next/image";

export default function Hero() {
  const socialLinks = [
    { icon: <FiGithub />, url: "https://github.com/Abdigithub13" },
    {
      icon: <FiLinkedin />,
      url: "https://www.linkedin.com/in/abdi-tolesa-9464a2332/",
    },
    { icon: <FiTwitter />, url: "https://twitter.com/abdi" },
    { icon: <FiMail />, url: "abitolesa23@example.com" },
  ];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <Particles />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-gray-900 z-10" />

      <div className="z-20 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col-reverse md:flex-row justify-center items-center mt-8 md:justify-start md:space-x-8">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                Hi, I&apos;m{" "}
                <span className="text-black dark:text-white">Abdi Tolesa</span>
              </h1>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                Full Stack Developer
              </h2>
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-xl mx-auto md:mx-0"
              >
                Crafting beautiful, interactive web experiences with passion and
                precision.
              </motion.h2>
            </div>
            <Image
              src="/angel.jpg"
              alt="Profile Picture"
              width={224} // Adjusted width for optimization
              height={224} // Adjusted height for optimization
              className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover shadow-lg mb-6 md:mb-0"
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex justify-center md:justify-start space-x-6 mt-4"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-2xl text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-12"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
            >
              View My Work
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <svg
            className="w-6 h-6 text-gray-700 dark:text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
