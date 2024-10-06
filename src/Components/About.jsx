import React from 'react';
import Pic from './UI/Pic';
import { IoIosArrowForward } from "react-icons/io";

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
      <div className="flex justify-center items-center">
        <Pic />
      </div>

      {/* Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* First Row */}
        <div className="fd space-y-8">
          <h1 className="flex items-center gap-4 text-lg md:text-xl font-semibold">
            <span><IoIosArrowForward className="text-blue-500" /></span>
            Name: <span>Nidinbose</span>
          </h1>
          <h1 className="flex items-center gap-4 text-lg md:text-xl font-semibold">
            <span><IoIosArrowForward className="text-blue-500" /></span>
            Name: <span>Nidinbose</span>
          </h1>
          <h1 className="flex items-center gap-4 text-lg md:text-xl font-semibold">
            <span><IoIosArrowForward className="text-blue-500" /></span>
            Name: <span>Nidinbose</span>
          </h1>
          <h1 className="flex items-center gap-4 text-lg md:text-xl font-semibold">
            <span><IoIosArrowForward className="text-blue-500" /></span>
            Name: <span>Nidinbose</span>
          </h1>
        </div>

        {/* Second Row */}
        <div className="sd space-y-8">
          <h1 className="flex items-center gap-4 text-lg md:text-xl font-semibold ">
            <span><IoIosArrowForward className="text-blue-500" /></span>
            Name: <span>Nidinbose</span>
          </h1>
          <h1 className="flex items-center gap-4 text-lg md:text-xl font-semibold">
            <span><IoIosArrowForward className="text-blue-500" /></span>
            Name: <span>Nidinbose</span>
          </h1>
          <h1 className="flex items-center gap-4 text-lg md:text-xl font-semibold">
            <span><IoIosArrowForward className="text-blue-500" /></span>
            Name: <span>Nidinbose</span>
          </h1>
          <h1 className="flex items-center gap-4 text-lg md:text-xl font-semibold">
            <span><IoIosArrowForward className="text-blue-500" /></span>
            Name: <span>Nidinbose</span>
          </h1>
          
        </div>

      </div>
      
    </div>
  );
};

export default About;
