"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-6"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 flex flex-col items-center">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mb-6 md:mb-0"
          ></motion.div>

          <div className="flex flex-col items-center space-y-2">
            <p className="text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Abdi Neymar. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
