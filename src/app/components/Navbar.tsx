"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FiMoon, FiSun, FiMenu, FiX } from "react-icons/fi";
import { useState, useEffect } from "react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar({
  darkMode,
  setDarkMode,
}: {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 backdrop-blur-md ${
        scrolled
          ? "bg-white/80 dark:bg-gray-900/80 shadow-sm"
          : "bg-white/50 dark:bg-gray-900/50"
      } transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu button  */}
          <div className="flex md:hidden items-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleMobileMenu}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 mr-4"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </motion.button>
          </div>

          {/* Logo - centered on mobile */}
          <div className="flex-1 flex justify-center md:justify-start">
            <Link href="/" passHref>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
              >
                Abdi Tolesa
              </motion.div>
            </Link>
          </div>

          {/* Desktop navigation items  */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="relative text-gray-700 dark:text-gray-300 hover:text-white transition-colors font-medium"
              >
                <motion.div
                  whileHover={{
                    y: -3,
                    background: "linear-gradient(to right, #7e5bef, #ec4899)",
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 10,
                    },
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-lg"
                >
                  {item.name}
                </motion.div>
              </Link>
            ))}

            <motion.button
              whileHover={{
                y: -3,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 10,
                },
              }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </motion.button>
          </div>

          {/* Spacer for mobile to balance the layout */}
          <div className="flex md:hidden items-center">
            <motion.button
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-2 pb-4 space-y-2">
                {navItems.map((item) => (
                  <Link key={item.path} href={item.path} passHref>
                    <motion.div
                      whileHover={{
                        x: 5,
                        backgroundColor: darkMode
                          ? "rgba(17, 24, 39, 0.5)"
                          : "rgba(243, 244, 246, 0.5)",
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="block px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
