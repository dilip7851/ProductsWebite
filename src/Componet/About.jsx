import React from 'react'
import { FiHome, FiUser, FiMail, FiPhone, FiGithub, FiLinkedin, FiAward, FiBook, FiBriefcase } from 'react-icons/fi';
function About() {
  return ( 
   <>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Me</h1>
        <div className="flex justify-center mb-8">
          <div className="w-32 h-32 rounded-full bg-indigo-600 flex items-center justify-center">
            <FiUser className="w-16 h-16 text-white" />
          </div>
        </div>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          I'm a passionate developer with expertise in modern web technologies. I love creating beautiful and functional applications that solve real-world problems.
        </p>
      </div>
    </div>

    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <FiBriefcase className="w-8 h-8 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Senior Developer</h3>
            <p className="text-gray-600 mb-2">Tech Solutions Inc.</p>
            <p className="text-gray-500">Led development of enterprise applications and mentored junior developers.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <FiBook className="w-8 h-8 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Full Stack Developer</h3>
            <p className="text-gray-600 mb-2">Web Innovators</p>
            <p className="text-gray-500">Developed and maintained multiple client websites and applications.</p>
          </div>
        </div>
      </div>
    </div>

    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <FiAward className="w-8 h-8 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Frontend</h3>
            <ul className="space-y-2 text-gray-600">
              <li>React.js</li>
              <li>Tailwind CSS</li>
              <li>JavaScript/TypeScript</li>
              <li>HTML5/CSS3</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <FiAward className="w-8 h-8 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Backend</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Node.js</li>
              <li>Python</li>
              <li>SQL/NoSQL</li>
              <li>RESTful APIs</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <FiAward className="w-8 h-8 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Tools</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Git</li>
              <li>Docker</li>
              <li>AWS</li>
              <li>CI/CD</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Education</h2>
        <div className="max-w-3xl mx-auto bg-gray-50 p-6 rounded-lg shadow-sm">
          <FiBook className="w-8 h-8 text-indigo-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Bachelor of Science in Computer Science</h3>
          <p className="text-gray-600 mb-2">University of Technology</p>
          <p className="text-gray-500">Graduated with honors, focusing on software engineering and web development.</p>
        </div>
      </div>
    </div>

   </>

  )
}

export default About