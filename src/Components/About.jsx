import React from 'react';
import Pic from './UI/Pic';
import { IoIosArrowForward } from "react-icons/io";
import { motion } from 'framer-motion';
const textVariants={
  initial:{
      x:500,
      opacity:0,
  },
  animate:{
      x:0,
      opacity:1,
      transition:{
          duration:6,
          staggerChildren:0.1,
      }
  },
  scrollButton:{
      opacity:0,
      y:10,
      transition:{
          duration:2,repeat:Infinity
      }
  }
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      duration: 20,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

const About = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-4 md:p-8">
      
      {/* Picture Section */}
      <div className="flex justify-center items-center xl:mt-20">
        <Pic />
      </div>

      {/* Info Section */}
       <div className='xl:mt-20 overflow-x-hidden ' >
        <motion.h1 className='text-lg xl:text-3xl font-bold font-mono ' variants={textVariants} animate="animate" initial="initial">Full Stack Developer and UI/UX Designer</motion.h1>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:mt-[10vh]">
        
        {/* First Row */}
        <div className="fd space-y-8">
          <h1 className="flex items-center gap-4 text-lg md:text-xl font-semibold font-mono">
            <span><IoIosArrowForward className="text-[#00ff99]" /></span>
            Name: <span className='font-medium text-lg'>Nidinbose</span>
          </h1>
          <h1 className="flex items-center gap-4 text-lg md:text-xl font-semibold font-mono">
            <span><IoIosArrowForward className="text-[#00ff99]" /></span>
            Name: <span>Nidinbose</span>
          </h1>
          <h1 className="flex items-center gap-4 text-lg md:text-xl font-semibold font-mono">
            <span><IoIosArrowForward className="text-[#00ff99]" /></span>
            Name: <span>Nidinbose</span>
          </h1>
          <h1 className="flex items-center gap-4 text-lg md:text-xl font-semibold font-mono">
            <span><IoIosArrowForward className="text-[#00ff99]" /></span>
            Name: <span>Nidinbose</span>
          </h1>
        </div>

        {/* Second Row */}
        <div className="sd space-y-8">
          <h1 className="flex items-center gap-4 text-lg md:text-xl font-semibold font-mono">
            <span><IoIosArrowForward className="text-[#00ff99]" /></span>
            Name: <span>Nidinbose</span>
          </h1>
          <h1 className="flex items-center gap-4 text-lg md:text-xl font-semibold font-mono">
            <span><IoIosArrowForward className="text-[#00ff99]" /></span>
            Name: <span>Nidinbose</span>
          </h1>
          <h1 className="flex items-center gap-4 text-lg md:text-xl font-semibold font-mono">
            <span><IoIosArrowForward className="text-[#00ff99]" /></span>
            Name: <span>Nidinbose</span>
          </h1>
          <h1 className="flex items-center gap-4 text-lg md:text-xl font-semibold font-mono">
            <span><IoIosArrowForward className="text-[#00ff99]" /></span>
            Name: <span>Nidinbose</span>
          </h1>
          
        </div>

      </div>
       </div>
    
    </div>
  );
};

export default About;
