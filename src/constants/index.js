import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";

export const HERO_CONTENT = `I'm a passionate full stack developer with a strong background in both front-end and back-end technologies. I recently completed my B.Tech in Information Technology from NIT Srinagar, where I honed my skills in building scalable and efficient web applications. With a passion for problem-solving and a keen eye for detail, I excel in leveraging technologies like React, Node.js, and Express.js to create innovative solutions that drive business success.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const MY_EXPERIENCES = [
  {
    year: "December 2022 – February 2023",
    role: "Frontend Developer Intern",
    company: "Indian Institute of Technology Patna",
    description: `Developed a fully functional, responsive website for the research team EVXplorer. Worked on creating user-friendly interfaces and implemented various web design principles to enhance user experience.`,
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "API"],
  },
];

export const MY_PROJECTS = [
  {
    title: "EVXplorer",
    image: project1,
    description:
      "A website developed for the research group EVXplorer, focusing on optimization algorithms for Electric Vehicles.",
    link: "https://evxplorer.co.in/",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  },
  {
    title: "Network Simulator",
    image: project2,
    description:
      "Implemented a multi-layered approach mirroring the TCP/IP model, encompassing Physical Layer, Data Link Layer, Network Layer, Transport Layer, and Application Layer.",
    link: "https://github.com/kshubham767/TCP-IP_Stack",
    technologies: ["C++"],
  },
  {
    title: "Line Encoder & Decoder",
    image: project3,
    description:
      "Developed a Line Encoder and Scrambler Program with various line encoding schemes (NRZ-L, NRZ-I, Manchester, Differential Manchester, AMI) and scrambling techniques (HDB3, B8ZS).",
    link: "https://github.com/kshubham767/Line-Encoder-Decoder",
    technologies: ["C++", "OpenGL"],
  },
];

export const CONTACT = {
  address: "Siwan, Bihar, India ",
  phoneNo: "+91 9097753844 ",
  email: "kshubham767@gmail.com",
};
