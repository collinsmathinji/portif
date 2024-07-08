import React from 'react';

const skills = [
  { name: 'Next.js', level: 90 },
  { name: 'MERN Stack', level: 85 },
  { name: 'Django', level: 80 },
  { name: 'Solidity', level: 75 },
  { name: 'Web3', level: 70 },
];

function Skills() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        My Skills
      </h2>
      <div className="mt-6">
        {skills.map((skill) => (
          <div key={skill.name} className="mt-4">
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium text-gray-500">{skill.name}</div>
              <div className="text-sm font-medium text-indigo-600">{skill.level}%</div>
            </div>
            <div className="mt-1 bg-gray-200 rounded-full h-2">
              <div
                className="bg-indigo-600 rounded-full h-2"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <h3 className="text-xl font-bold text-gray-900">My Journey into Web3</h3>
        <p className="mt-4 text-gray-500">
          While I have a strong foundation in traditional web development, my curiosity about blockchain technology 
          has led me to explore the exciting world of Web3. I'm fascinated by the potential of decentralized 
          applications and smart contracts to revolutionize various industries. As I continue to learn and grow in 
          this space, I'm eager to apply my skills to innovative Web3 projects.
        </p>
      </div>
    </div>
  );
}

export default Skills;