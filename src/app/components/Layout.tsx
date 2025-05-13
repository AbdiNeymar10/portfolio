"use client";

import { motion } from "framer-motion";
import Head from "next/head";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

export default function Layout({
  children,
  title = "Portfolio",
}: {
  children: ReactNode;
  title?: string;
}) {
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <Head>
        <title>{title} | Abdy Tolesa</title>
        <meta name="description" content="Professional portfolio" />
      </Head>

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <motion.main
        key={router.route}
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: "linear" }}
        className="pt-24 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto"
      >
        {children}
      </motion.main>

      <Footer />
    </div>
  );
}
