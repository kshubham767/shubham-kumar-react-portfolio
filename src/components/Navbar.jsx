/* eslint-disable react/prop-types */
import logo from "../assets/shubhamKumarLogo.webp";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Navbar({ isLightMode }) {
  return (
    <nav
      className={`flex items-center justify-between py-6 ${
        isLightMode ? "bg-white text-stone-900" : "bg-black text-stone-300"
      }`}
    >
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img
            src={logo}
            className={`mx-2 ${
              isLightMode ? "filter brightness-100" : "filter brightness-90"
            }`}
            width={50}
            height={33}
            alt="logo"
          />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/shubham-kumar-219696179/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className={`transition-colors duration-300 ${
            isLightMode
              ? "text-stone-700 hover:text-blue-600"
              : "text-stone-300 hover:text-blue-400"
          }`}
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/kshubham767"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className={`transition-colors duration-300 ${
            isLightMode
              ? "text-stone-700 hover:text-gray-800"
              : "text-stone-300 hover:text-gray-400"
          }`}
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/shubham__singh__18/?next=%2F"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className={`transition-colors duration-300 ${
            isLightMode
              ? "text-stone-700 hover:text-pink-600"
              : "text-stone-300 hover:text-pink-400"
          }`}
        >
          <FaInstagram />
        </a>
        <a
          href="https://x.com/kshubham767"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className={`transition-colors duration-300 ${
            isLightMode
              ? "text-stone-700 hover:text-blue-500"
              : "text-stone-300 hover:text-blue-300"
          }`}
        >
          <FaSquareXTwitter />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
