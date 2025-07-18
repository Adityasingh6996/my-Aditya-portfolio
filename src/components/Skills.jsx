// src/components/Skills.jsx
import React from 'react';

function Skills() {
  return (
    <section id="skills" className="py-16 bg-gray-900 text-white"> {/* Added a dark background and text color */}
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">My Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <span className="bg-blue-600 text-white px-4 py-2 rounded-lg text-lg">React</span>
          <span className="bg-green-600 text-white px-4 py-2 rounded-lg text-lg">Tailwind CSS</span>
          <span className="bg-yellow-600 text-white px-4 py-2 rounded-lg text-lg">JavaScript</span>
          <span className="bg-red-600 text-white px-4 py-2 rounded-lg text-lg">HTML & CSS</span>
          {/* Add more skill tags here */}
        </div>
        <p className="mt-8 text-lg">This section will showcase all your technical abilities.</p>
      </div>
    </section>
  );
}

export default Skills;