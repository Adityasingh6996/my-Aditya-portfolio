// src/data/skillsData.js
// Import icons from react-icons/fa
import { FaHtml5, FaCss3Alt, FaSass, FaJs, FaReact, FaAngular, FaNodeJs, FaJava, FaPython, FaBootstrap, FaGitAlt, FaFigma, FaChartBar, FaGithub } from 'react-icons/fa';
// NEW STRATEGY: Import all Si icons as an object to avoid specific export errors.
import * as SiIcons from 'react-icons/si';

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
      { name: "SASS", icon: FaSass, color: "#CC6699" },
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
      { name: "React JS", icon: FaReact, color: "#61DAFB" },
      { name: "Angular", icon: FaAngular, color: "#DD0031" },
      { name: "Redux", icon: SiIcons.SiRedux, color: "#764ABC" }, // Reference using SiIcons.
      { name: "Next.js", icon: SiIcons.SiNextdotjs, color: "#000000" }, // Reference using SiIcons.
      { name: "Tailwind CSS", icon: SiIcons.SiTailwindcss, color: "#06B6D4" }, // Reference using SiIcons.
      { name: "Material UI", icon: SiIcons.SiMaterialui, color: "#007FFF" }, // Reference using SiIcons.
      { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
      { name: "GSAP", icon: SiIcons.SiGreensock, color: "#88CE02" }, // Reference using SiIcons.
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Express JS", icon: SiIcons.SiExpress, color: "#000000" }, // Reference using SiIcons.
      { name: "Springboot", icon: null, color: "#6DB33F" }, // No specific icon
      { name: "MySQL", icon: SiIcons.SiMysql, color: "#4479A1" }, // Reference using SiIcons.
      { name: "MongoDB", icon: SiIcons.SiMongodb, color: "#47A248" }, // Reference using SiIcons.
      { name: "PostgreSQL", icon: SiIcons.SiPostgresql, color: "#336791" }, // Reference using SiIcons.
      { name: "Firebase", icon: SiIcons.SiFirebase, color: "#FFCA28" }, // Reference using SiIcons.
    ]
  },
  {
    category: "Languages",
    skills: [
      { name: "C", icon: null, color: "#A8B9CC" }, // No common icon
      { name: "C++", icon: SiIcons.SiCplusplus, color: "#00599C" }, // Reference using SiIcons.
      { name: "Java", icon: FaJava, color: "#007396" },
      { name: "Python", icon: FaPython, color: "#3776AB" },
      { name: "C-Sharp", icon: null, color: "#239120" }, // Icon set to null as it's not reliably exported
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiIcons.SiTypescript, color: "#3178C6" }, // Reference using SiIcons.
    ]
  },
  {
    category: "Data Science & Machine Learning",
    skills: [
      { name: 'Scikit-learn', icon: SiIcons.SiScikitlearn, color: "#F7931E" }, // Reference using SiIcons.
      { name: 'XGBoost', icon: null, color: "#0088CC" }, // No specific icon
      { name: 'Pandas', icon: SiIcons.SiPandas, color: "#150458" }, // Reference using SiIcons.
      { name: 'NumPy', icon: SiIcons.SiNumpy, color: "#013243" }, // Reference using SiIcons.
      { name: 'Matplotlib', icon: FaChartBar, color: "#11557C" },
      { name: 'Seaborn', icon: FaChartBar, color: "#367588" },
      { name: 'Streamlit', icon: SiIcons.SiStreamlit, color: "#FF4B4B" }, // Reference using SiIcons.
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "GitHub", icon: FaGithub, color: "#181717" },
      { name: "VS Code", icon: SiIcons.SiVscode, color: "#007ACC" }, // Reference using SiIcons.
      { name: "Postman", icon: SiIcons.SiPostman, color: "#FF6C37" }, // Reference using SiIcons.
      { name: "Compass", icon: null, color: "#F84E77" }, // MongoDB Compass, no direct icon
      { name: "Vercel", icon: SiIcons.SiVercel, color: "#000000" }, // Reference using SiIcons.
      { name: "Netlify", icon: SiIcons.SiNetlify, color: "#00C7B7" }, // Reference using SiIcons.
      { name: "Figma", icon: FaFigma, color: "#F24E1E" },
    ]
  }
];

export default skillsData;
