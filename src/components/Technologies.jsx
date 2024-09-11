/* eslint-disable react/prop-types */
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs, FaGitAlt } from "react-icons/fa";
import { DiBootstrap, DiJava } from "react-icons/di";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandCpp } from "react-icons/tb";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: {
    y: -10,
  },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

function Technologies({ isLightMode }) {
  return (
    <div
      className={`pb-24 ${
        isLightMode ? "bg-white text-stone-900" : "bg-black text-stone-300"
      }`}
    >
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className={`my-20 text-center text-4xl ${
          isLightMode ? "text-stone-900" : "text-stone-300"
        }`}
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-4"
        >
          <FaHtml5
            className={`text-7xl ${
              isLightMode ? "text-red-500" : "text-red-400"
            }`}
          />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
          className="p-4"
        >
          <FaCss3Alt
            className={`text-7xl ${
              isLightMode ? "text-blue-500" : "text-blue-400"
            }`}
          />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
          className="p-4"
        >
          <IoLogoJavascript
            className={`text-7xl ${
              isLightMode ? "text-yellow-500" : "text-yellow-400"
            }`}
          />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-4"
        >
          <DiBootstrap
            className={`text-7xl ${
              isLightMode ? "text-purple-700" : "text-purple-500"
            }`}
          />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
          className="p-4"
        >
          <RiReactjsLine
            className={`text-7xl ${
              isLightMode ? "text-cyan-400" : "text-cyan-300"
            }`}
          />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
          className="p-4"
        >
          <FaNodeJs
            className={`text-7xl ${
              isLightMode ? "text-green-500" : "text-green-400"
            }`}
          />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-4"
        >
          <SiMongodb
            className={`text-7xl ${
              isLightMode ? "text-green-500" : "text-green-400"
            }`}
          />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
          className="p-4"
        >
          <FaGitAlt
            className={`text-7xl ${
              isLightMode ? "text-red-600" : "text-red-400"
            }`}
          />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
          className="p-4"
        >
          <TbBrandCpp
            className={`text-7xl ${
              isLightMode ? "text-blue-700" : "text-blue-500"
            }`}
          />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
          className="p-4"
        >
          <DiJava
            className={`text-7xl ${
              isLightMode ? "text-red-500" : "text-red-400"
            }`}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Technologies;
