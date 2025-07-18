// src/data/projects.js

const projects = [
  {
    id: 1, // Unique ID for each project
    title: "My First React Portfolio",
    description: "A responsive personal portfolio website built with React and styled using Tailwind CSS.",
    image: "/images/portfolio-thumbnail.png", // This image needs to be in your 'public/images/' folder
    githubLink: "https://github.com/yourusername/my-tarun-style-portfolio", // REPLACE with your actual GitHub repo link
    liveDemoLink: "https://your-portfolio-demo.vercel.app", // REPLACE with your future Vercel deployed link
  },
  {
    id: 2,
    title: "E-commerce Store Concept",
    description: "A mock online store frontend demonstrating product listings, cart functionality, and user authentication.",
    image: "/images/ecommerce-thumbnail.png", // Needs to be in 'public/images/'
    githubLink: "https://github.com/yourusername/ecommerce-concept",
    liveDemoLink: "", // Leave empty if no live demo
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A simple full-stack task management application with a MERN stack, allowing users to create, update, and delete tasks.",
    image: "/images/task-app-thumbnail.png", // Needs to be in 'public/images/'
    githubLink: "https://github.com/yourusername/task-manager-mern",
    // liveDemoLink: "https://task-manager-demo.netlify.app", // Example
  },
  // Add more of your projects here!
  // Make sure to include relevant images and links for each.
];

export default projects; // Export the array so Projects.jsx can import it