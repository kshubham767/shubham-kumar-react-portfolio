import { useState } from "react";
import { TbBrightnessFilled } from "react-icons/tb";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

function App() {
  const [isLightMode, setIsLightMode] = useState(false);

  // Function to toggle between light and dark mode
  const toggleMode = () => {
    setIsLightMode(!isLightMode);
  };

  return (
    <div
      className={`overflow-x-hidden antialiased ${
        isLightMode ? "bg-white text-stone-700" : "bg-black text-stone-300"
      }`}
    >
      {/* Toggle Button */}
      <button
        onClick={toggleMode}
        className={`absolute top-4 right-4 p-2 rounded-full shadow-md transition-transform transform ${
          isLightMode ? "bg-stone-800 text-white" : "bg-white text-stone-800"
        } ${isLightMode ? "rotate-180" : "rotate-0"}`}
      >
        <TbBrightnessFilled className="text-2xl" />
      </button>

      {/* Background Div */}
      <div
        className={`fixed inset-0 -z-10 ${
          isLightMode ? "bg-white" : "bg-black"
        }`}
      >
        {/* Light Mode Background */}
        {isLightMode ? (
          <div className="absolute top-0 -z-10 h-full w-full bg-white">
            <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
          </div>
        ) : (
          // Dark Mode Background
          <div className="relative h-full w-full bg-black">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
            <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-8">
        <Navbar isLightMode={isLightMode} />
        <Hero isLightMode={isLightMode} />
        <Technologies isLightMode={isLightMode} />
        <Projects isLightMode={isLightMode} />
        <Experience isLightMode={isLightMode} />
        <Contact isLightMode={isLightMode} />
      </div>
    </div>
  );
}

export default App;
