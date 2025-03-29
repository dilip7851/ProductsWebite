import React from 'react';
import { FiHome, FiUser, FiMail, FiPhone, FiGithub, FiLinkedin, FiAward, FiBook, FiBriefcase } from 'react-icons/fi';

const Footer = () => {
  return (
     <footer className="bg-gray-800">
     <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
       <div className="flex justify-center space-x-6">
         <a href="#" className="text-gray-400 hover:text-gray-300">
           <FiGithub className="h-6 w-6" />
         </a>
         <a href="#" className="text-gray-400 hover:text-gray-300">
           <FiLinkedin className="h-6 w-6" />
         </a>
         <a href="#" className="text-gray-400 hover:text-gray-300">
           <FiMail className="h-6 w-6" />
         </a>
       </div>
       <div className="mt-8 text-center text-gray-400">
         <p>&copy; 2023 MyWebsite. All rights reserved.</p>
       </div>
     </div>
   </footer>
  );
}

export default Footer;
