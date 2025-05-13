"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { FiAward, FiBriefcase, FiCode } from "react-icons/fi";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const stats = [
    { id: 1, icon: <FiBriefcase />, value: "", label: "" },
    { id: 2, icon: <FiAward />, value: "", label: "" },
    { id: 3, icon: <FiCode />, value: "", label: "" },
  ];

  const skills = [
    { id: 1, name: "JavaScript/TypeScript", level: 85 },
    { id: 2, name: "React/Next.js", level: 90 },
    { id: 3, name: "Node.js/Express", level: 85 },
    { id: 4, name: "Flutter/dart", level: 80 },
    { id: 5, name: "Spring boot", level: 90 },
    { id: 6, name: "PHP", level: 80 },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row items-center gap-12"
        >
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="relative"
            >
              <div className="w-full h-80 md:h-96 bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden">
                <Image
                  src="/angel.jpg"
                  alt="angel"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-6 -right-6 bg-gradient-to-r from-purple-600 to-pink-600 p-2 rounded-lg shadow-lg"
              >
                <div className="bg-white dark:bg-gray-800 p-4 rounded">
                  <h4 className="font-bold text-gray-800 dark:text-white">
                    Full Stack
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Developer
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <div className="grid grid-cols-3 gap-4 mt-8">
              {stats.map((stat) => (
                <motion.div
                  key={stat.id}
                  initial={{ y: 20, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.3 + stat.id * 0.1, duration: 0.5 }}
                  className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center"
                >
                  <div className="text-purple-600 dark:text-purple-400 text-2xl mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    {stat.value}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6"
            >
              About{" "}
              <span className="text-purple-600 dark:text-purple-400">Me</span>
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-lg text-gray-600 dark:text-gray-300 mb-6"
            >
              I'm a passionate full-stack developer with expertise in building
              modern web applications. I love building innovative solutions to
              real-world problems using technology. My journey in software
              development has equipped me with skills in programming,
              problem-solving, and teamwork.
            </motion.p>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-lg text-gray-600 dark:text-gray-300 mb-8"
            >
              My approach combines technical excellence with creative
              problem-solving to deliver solutions that are both functional and
              visually appealing. I'm constantly learning new technologies to
              stay at the forefront of web development.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                My Skills
              </h3>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.id}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ delay: 0.8, duration: 1, type: "spring" }}
                        className="h-2.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
