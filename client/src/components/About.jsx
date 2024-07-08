import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Collins from '../images/collins.jpg'
function About() {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">About Me</h2>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img className="h-48 w-full object-cover md:w-48" src={Collins} alt="collins" />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Full Stack Developer</div>
              <h3 className="mt-1 text-2xl leading-tight font-medium text-black">Macharia Collins Mathinji</h3>
              <p className="mt-2 text-gray-600">
                I am a passionate developer with expertise in MERN stack and Web3 technologies. 
                My focus is on creating innovative solutions that leverage the power of blockchain 
                and decentralized systems. With experience in building comprehensive databases and 
                connecting investors with startups, I strive to make a positive impact through technology.
              </p>
            </div>
          </div>
          <div className="px-8 py-4 bg-gray-50">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Skills & Expertise</h4>
            <div className="flex flex-wrap gap-2">
              {['Next.js', 'React', 'Node.js', 'MongoDB', 'Express', 'Django', 'Solidity', 'Web3'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="px-8 py-4">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">My Journey into Web3</h4>
            <p className="text-gray-600 mb-4">
              While I have a strong foundation in traditional web development, my curiosity about blockchain technology 
              has led me to explore the exciting world of Web3. I'm fascinated by the potential of decentralized 
              applications and smart contracts to revolutionize various industries. As I continue to learn and grow in 
              this space, I'm eager to apply my skills to innovative Web3 projects.
            </p>
            <p className="text-gray-600">
              My goal is to bridge the gap between Web2 and Web3 technologies, creating applications that are not only 
              decentralized and secure but also user-friendly and accessible to a wider audience.
            </p>
          </div>
          <div className="px-8 py-4 bg-gray-50">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Connect with Me</h4>
            <div className="flex space-x-4">
              <a href="https://github.com/collinsmathinji" className="text-gray-600 hover:text-gray-800">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/collins-macharia-05b527268/" className="text-gray-600 hover:text-gray-800">
                <FaLinkedin size={24} />
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;