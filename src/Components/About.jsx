import React from 'react';
import Pic from './UI/Pic';
import { IoIosArrowForward } from "react-icons/io";
import { motion } from 'framer-motion';

const textVariants = {
  initial: {
    x: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      staggerChildren: 0.1,
    },
  },
};

const About = () => {
  return (
    <div className="min-h-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-6 px-6 py-12 bg-transparant overflow-x-auto">
      
      {/* Left Section (Info) */}
      <div className="flex flex-col justify-right items-end p-10 bg-transparant rounded-lg overflow-x-auto">
        {/* <h1 className="text-2xl font-bold mb-6 text-gray-800">About Me</h1> */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={textVariants}
          className="space-y-4"
        >
          <div className="flex items-center gap-4 text-lg font-medium text-gray-700 hover:text-blue-500 transition-all">
            <IoIosArrowForward className="text-[#00ff99]" />
            <span>Name: Nidinbose</span>
          </div>
          <div className="flex items-center gap-4 text-lg font-medium text-gray-700 hover:text-blue-500 transition-all">
            <IoIosArrowForward className="text-[#00ff99]" />
            <span>Role: Frontend Developer</span>
          </div>
          <div className="flex items-center gap-4 text-lg font-medium text-gray-700 hover:text-blue-500 transition-all">
            <IoIosArrowForward className="text-[#00ff99]" />
            <span>Experience: 3+ Years</span>
          </div>
          <div className="flex items-center gap-4 text-lg font-medium text-gray-700 hover:text-blue-500 transition-all">
            <IoIosArrowForward className="text-[#00ff99]" />
            <span>Location: Remote</span>
          </div>
        </motion.div>
      </div>

      {/* Center Section (Profile Picture) */}
      <div className="flex justify-center items-center p-6 bg-transparan">
        <Pic />
      </div>

      {/* Right Section (Additional Info) */}
      <div className="flex flex-col justify-center items-start p-6 bg-transparant overflow-x-auto">
        <motion.div
          initial="initial"
          animate="animate"
          variants={textVariants}
          className="space-y-4"
        >
          <div className="flex items-center gap-4 text-lg font-medium text-gray-700 hover:text-blue-500 transition-all">
            <IoIosArrowForward className="text-[#00ff99]" />
            <span>Skills: React, Tailwind CSS, Framer Motion</span>
          </div>
          <div className="flex items-center gap-4 text-lg font-medium text-gray-700 hover:text-blue-500 transition-all">
            <IoIosArrowForward className="text-[#00ff99]" />
            <span>Projects: 20+ Completed</span>
          </div>
          <div className="flex items-center gap-4 text-lg font-medium text-gray-700 hover:text-blue-500 transition-all">
            <IoIosArrowForward className="text-[#00ff99]" />
            <span>Interests: UI/UX Design</span>
          </div>
          <div className="flex items-center gap-4 text-lg font-medium text-gray-700 hover:text-blue-500 transition-all">
            <IoIosArrowForward className="text-[#00ff99]" />
            <span>Email: nidinbose@example.com</span>
          </div>
        </motion.div>
      </div>
      
    </div>
  );
};

export default About;
