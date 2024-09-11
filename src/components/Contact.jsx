/* eslint-disable react/prop-types */
import { CONTACT } from "../constants";
import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";
import { motion } from "framer-motion";

function Contact({ isLightMode }) {
  return (
    <div
      className={`border-t ${
        isLightMode ? "border-stone-300" : "border-stone-900"
      } pb-20`}
    >
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className={`my-10 text-center text-4xl ${
          isLightMode ? "text-stone-700" : "text-stone-300"
        }`}
      >
        Get in Touch
      </motion.h2>
      <div
        className={`text-center tracking-tighter ${
          isLightMode ? "text-stone-700" : "text-stone-300"
        }`}
      >
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4 flex items-center justify-center gap-2"
        >
          <FaLocationDot className="text-xl" />
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4 flex items-center justify-center gap-2"
        >
          <FaPhone className="text-xl" />
          {CONTACT.phoneNo}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4 flex items-center justify-center gap-2"
        >
          <FaEnvelope className="text-xl" />
          {CONTACT.email}
        </motion.p>
      </div>
    </div>
  );
}

export default Contact;
