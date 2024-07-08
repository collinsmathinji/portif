import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Web3 App',
    description: 'A decentralized application built on blockchain technology, showcasing the potential of Web3.',
    image: 'https://via.placeholder.com/300x200.png?text=Web3+App',
    technologies: ['Solidity', 'React', 'Web3.js'],
  },
  {
    id: 2,
    title: 'Universal Peace Federation Database',
    description: 'A comprehensive database system for the Universal Peace Federation, built with the MERN stack.',
    image: 'https://via.placeholder.com/300x200.png?text=UPF+Database',
    technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
  },
  {
    id: 3,
    title: 'Investor and Startup Linker',
    description: 'A platform connecting investors with promising startups, developed using Django and React.',
    image: 'https://via.placeholder.com/300x200.png?text=Investor+Startup+Linker',
    technologies: ['Django', 'React', 'PostgreSQL'],
  },
];

function Projects() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          My Projects
        </h2>
        <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.id} className="bg-white overflow-hidden shadow rounded-lg">
              <img className="h-48 w-full object-cover" src={project.image} alt={project.title} />
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">{project.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{project.description}</p>
                <div className="mt-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;