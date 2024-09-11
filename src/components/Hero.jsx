/* eslint-disable react/prop-types */
import profilePic from "../assets/shubhamKumarProfilePic.webp";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

function Hero({ isLightMode }) {
  return (
    <div className={`pb-4 lg:mb-36 ${isLightMode ? "bg-white" : "bg-black"}`}>
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.img
              src={profilePic}
              alt="Shubham Kumar"
              className={`border rounded-3xl ${
                isLightMode ? "border-stone-300" : "border-stone-900"
              }`}
              width={650}
              height={650}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
          </div>
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="w-full lg:w-1/2"
        >
          <div className="flex flex-col items-center lg:items-start mt-10">
            <motion.h2
              variants={childVariants}
              className={`pb-2 text-4xl tracking-tighter lg:text-8xl ${
                isLightMode ? "text-stone-700" : "text-stone-300"
              }`}
            >
              Shubham Kumar
            </motion.h2>
            <motion.span
              variants={childVariants}
              className={`bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent ${
                isLightMode
                  ? "bg-gradient-to-r from-stone-700 to-stone-900"
                  : "bg-gradient-to-r from-stone-300 to-stone-600"
              }`}
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={childVariants}
              className={`my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter ${
                isLightMode ? "text-stone-700" : "text-stone-300"
              }`}
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              variants={childVariants}
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className={`rounded-full p-4 text-sm mb-10 ${
                isLightMode
                  ? "bg-stone-800 text-white"
                  : "bg-white text-stone-800"
              } shadow-md hover:bg-opacity-80`}
            >
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
