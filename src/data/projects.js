// src/data/projects.js

const projects = [
  {
    id: 1,
    title: "EXAMNIFY: Online Examination Platform",
    description: "A secure and scalable web-based platform designed to streamline the online examination process for educational institutions. The system supports both administrative and student workflows through authenticated, role-specific dashboards.",
    features: [
      "Google OAuth Integration for secure login and authentication",
      "Role-Based Access Control to differentiate functionalities for students and administrators",
      "Bulk Question Upload via CSV files to enable fast and efficient exam setup",
      "Automated Email Notifications to send test results directly to candidates",
      "Dashboard Views for tracking user activity, test statistics, and exam performance"
    ],
    technologies: ["Node.js", "Express.js", "MongoDB", "HTML5", "CSS3", "JavaScript"],
    githubLink: "https://github.com/Pradumn88/online-exam-platform.git",
    liveLink: "",
    image: "/images/project-examnify.png" // Direct public path
  },
  {
    id: 2,
    title: "Codsoft Virtual Internship Projects",
    description: "A collection of interactive Java-based console applications developed as part of the Codsoft Virtual Internship. These projects demonstrate foundational programming concepts and problem-solving skills.",
    features: [
      "Task 1: Number Guessing Game - Console-based interactive game with score tracking and replay.",
      "Task 2: Student Grade Calculator - Java program to calculate average score and assign letter grades based on input marks.",
      "Task 3: Student Management System - Menu-driven application for managing student records using OOP principles."
    ],
    technologies: ["Java", "Scanner", "Random", "OOP", "ArrayList", "Conditionals", "Arithmetic Operations"],
    githubLink: "https://github.com/Adityasingh6996/CODSOFT.git",
    liveLink: "",
    image: "/images/project-codsoft.png" // Direct public path
  },
  {
    id: 3,
    title: "House Rent Prediction System (2024)",
    description: "Developed a regression model using XGBoost achieving an 87% R² score for predicting house rent prices. Deployed an interactive user interface using Streamlit for real-time predictions.",
    features: [
      "Regression model developed with XGBoost (87% R² score).",
      "Interactive UI deployed using Streamlit for real-time predictions.",
      "Implemented robust data preprocessing and hyperparameter tuning for optimal model performance."
    ],
    technologies: ["Python", "XGBoost", "Pandas", "Scikit-learn", "Streamlit", "NumPy"],
    githubLink: "https://github.Adityasingh6996/CODSOFT.git",
    liveLink: "",
    image: "/images/project-house-rent.png" // Direct public path
  },
];

export default projects;