"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import Image from "next/image";

const projects = [
  {
    title: "Airline Reservation System",
    description:
      "A digital platform that enables users to search, book, and manage flight reservations efficiently.",
    tags: ["PHP", "HTML", "CSS", "Javascript"],
    image: "/plane.jpg",
    github: "https://github.com/AbdiNeymar10/",
    live: "",
  },
  {
    title: "Car Rental System",
    description:
      "A platform that enables users to book, manage, and track rental vehicles seamlessly.",
    tags: ["Flutter", "mySQL", "PHP"],
    image: "/car.jpg",
    github: "https://github.com/AbdiNeymar10/",
    live: "",
  },
  {
    title: "ERP System",
    description:
      "A software solution that helps organizations streamline core business processes like finance, HR, supply chain, and manufacturing.",
    tags: ["Next.js", "Spring boot", "Tailwind CSS", "Oracle"],
    image: "/erp.jpg",
    github: "https://github.com/AbdiNeymar10/",
    live: "",
  },
  {
    title: "Type Racer Pro",
    description:
      "Type Racer Pro is a web application designed to measure and improve typing performance. It challenges users with random text, tracks their speed in words per minute (WPM), and calculates accuracy in real time.",
    tags: ["Next.js", "Tailwind CSS"],
    image: "/typing.jpg",
    github: "https://type-racer-pro-sa.vercel.app/",
    live: "",
  },
  {
    title: "Movies Recommendation System",
    description:
      "Movie Recommendation System suggests movies to users based on their ratings and preferences. It analyzes user input to provide personalized and relevant movie suggestions.",
    tags: ["Next.js", "Node.js", "Tailwind CSS", "Postgresql"],
    image: "/movie.webp",
    github: "https://github.com/AbdiNeymar10/",
    live: "",
  },
  {
    title: "Job Portal",
    description:
      "Job Portal is a web application that connects job seekers and employers. It allows users to post jobs, apply for positions, and manage applications through an intuitive and user-friendly interface.",
    tags: ["React.js", "Node.js", "Tailwind CSS", "MongoDB"],
    image: "/job.jpg",
    github: "https://github.com/AbdiNeymar10/",
    live: "",
  },
];
const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
      onClick={() => window.open(project.github, "_blank")}
    >
      <div className="h-48 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
        {project.image && (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <motion.div
            initial={{ y: 20 }}
            animate={inView ? { y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-white"
          >
            <h3 className="text-xl font-bold">{project.title}</h3>
          </motion.div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <motion.span
              key={tag}
              whileHover={{ scale: 1.05 }}
              className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded-full"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        <div className="flex space-x-4">
          <motion.button
            onClick={(e) => {
              e.stopPropagation();
              window.open(project.github, "_blank");
            }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            <FiGithub className="mr-2" /> Code
          </motion.button>

          {project.live && (
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.live, "_blank");
              }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              <FiExternalLink className="mr-2" /> Live Demo
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/AbdiNeymar10"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
          >
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
