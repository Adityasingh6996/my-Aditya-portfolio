// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center fixed w-full z-10 top-0"> {/* Added fixed, w-full, z-10, top-0 for sticky nav */}
      <div className="text-2xl font-bold">Aditya.</div> {/* Changed from 'YourName.' */}
      <ul className="flex space-x-6">
        {/* Use Link component for smooth scrolling */}
        <li>
          <Link
            to="home" // This should match the 'id' of your Hero/Home section
            smooth={true}
            duration={500} // Scroll duration in milliseconds
            className="hover:text-blue-400 transition duration-300 cursor-pointer" // Added cursor-pointer
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about" // This should match the 'id' of your About section
            smooth={true}
            duration={500}
            className="hover:text-blue-400 transition duration-300 cursor-pointer"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="skills" // This should match the 'id' of your Skills section
            smooth={true}
            duration={500}
            className="hover:text-blue-400 transition duration-300 cursor-pointer"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="projects" // This should match the 'id' of your Projects section
            smooth={true}
            duration={500}
            className="hover:text-blue-400 transition duration-300 cursor-pointer"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="contact" // This should match the 'id' of your Contact section
            smooth={true}
            duration={500}
            className="hover:text-blue-400 transition duration-300 cursor-pointer"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;