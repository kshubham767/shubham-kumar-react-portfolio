/* eslint-disable react/prop-types */
import { MY_PROJECTS } from "../constants";
import { motion } from "framer-motion";

function Projects({ isLightMode }) {
  return (
    <div
      className={`pb-4 ${
        isLightMode ? "bg-white text-stone-900" : "bg-black text-stone-300"
      }`}
    >
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <motion.div>
        {MY_PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={project.image}
                width={250}
                height={250}
                alt={project.title}
                className={`mb-6 rounded ${
                  isLightMode
                    ? "border border-stone-200"
                    : "border border-stone-800"
                }`}
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h3
                className={`mb-2 font-semibold text-2xl ${
                  isLightMode ? "text-stone-900" : "text-stone-100"
                }`}
              >
                {project.title}
              </h3>
              <p
                className={`mb-4 ${
                  isLightMode ? "text-stone-600" : "text-stone-400"
                }`}
              >
                {project.description}
              </p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mb-4 block ${
                    isLightMode
                      ? "text-blue-500 hover:underline"
                      : "text-blue-300 hover:underline"
                  }`}
                >
                  View Project
                </a>
              )}
              {project.technologies.map((tech, index) => (
                <span
                  className={`mr-2 rounded p-2 text-sm font-medium ${
                    isLightMode
                      ? "bg-stone-900 text-stone-300"
                      : "bg-stone-700 text-stone-200"
                  }`}
                  key={index}
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default Projects;
