import React, { useState, useEffect } from 'react';
import './Scss/Hero.scss';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GrGithub } from "react-icons/gr";

// Motion Variants
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: '-220%',
    transition: {
      duration: 20,
      repeat: Infinity,
      repeatType: 'mirror',
    },
  },

};



// Typing Effect Component
const TypingEffect = ({ words, typingSpeed = 150, deletingSpeed = 100 }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleType = () => {
      setCurrentWord(words[index]);

      if (isDeleting) {
        setSubIndex((prev) => prev - 1);

        if (subIndex === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        setSubIndex((prev) => prev + 1);

        if (subIndex === currentWord.length) {
          setIsDeleting(true);
        }
      }
    };

    const timeout = setTimeout(
      handleType,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, typingSpeed, deletingSpeed, index, words, currentWord.length]);

  return (
    <span>
      {currentWord.substring(0, subIndex)}
      <span className="blinking-cursor">|</span>
     
    </span>

    
  );
 
};

const Hero = () => {
  const words = ["Full Stack Web Developer.", "UI/UX Designer", "Graphic Designer"];
  const typingSpeed = 300;
  const deletingSpeed = 150;

  return (
    <div className="hero grid grid-cols-1 xl:grid-cols-2 md:grid-cols-1 lg items-center lg:grid-cols-2 sm:px-6 h-auto xl:pt-20">
<div className='w-full mx-auto grid items-center justify-center gap-7 text-center lg:-text-start xl:text-start'>
  <motion.h1 className='text-2xl sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl w-full font-mono text-[#00ff99]'
    variants={textVariants}
    id=''
    initial="initial"
    animate="animate"
  >
    Hello I&apos;m
  </motion.h1>
  <motion.h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-9xl w-full font-semibold font-mono hover:text-[#00ff99]'
      variants={textVariants}
      id=''
      initial="initial"
      animate="animate">
  Nidinbose...
</motion.h2>
  <motion.div className='text-2xl xl:text-3xl font-semibold font-mono'
      variants={textVariants}
      id=''
      initial="initial"
      animate="animate">
    <TypingEffect className="xl:text-8xl" words={words} typingSpeed={typingSpeed} deletingSpeed={deletingSpeed} />
    </motion.div>


<div className='text-md xl:text-lg hover:text-[#00ff99]'>
<motion.p className='  text-white/40 w-full max-w-xl mx-auto font-mono hover:text-[#00ff99] '
    variants={textVariants}
    initial="initial"
    animate="animate"
  >
    I excel at crafting elegant digital experiences <br /> and I am proficient in various programming languages and technologies.
  </motion.p>

</div>
  <motion.div className='flex flex-col sm:flex-row gap-4 items-center justify-start'
     variants={textVariants}
     initial="initial"
     animate="animate">

    <button className='uppercase mt-4 flex items-center gap-2 bg-transparent border-[#00ff99] font-mono border-2 text-white font-bold py-2 px-4 rounded-full ease-out duration-300 font-mono mb-4'>
      DOWNLOAD CV
    </button>

    <div className='flex gap-6'>
      <Link className='hover:bg-[#00ff99]'><button className='flex items-center justify-center w-9 h-9 border border-[#00ff99] rounded-full text-[#00ff99] text-base hover:transition-all duration-500'>
        <GrGithub />
      </button></Link>
      <Link className='hover:bg-[#00ff99]'><button className='flex items-center justify-center w-9 h-9 border border-[#00ff99] rounded-full text-[#00ff99] text-base hover:transition-all duration-500'>
        <GrGithub />
      </button></Link>

      <Link className='hover:bg-[#00ff99]'><button className='flex items-center justify-center w-9 h-9 border border-[#00ff99] rounded-full text-[#00ff99] text-base hover:transition-all duration-500'>
        <GrGithub />
      </button></Link>

      <Link className='hover:bg-[#00ff99]'><button className='flex items-center justify-center w-9 h-9 border border-[#00ff99] rounded-full text-[#00ff99] text-base hover:transition-all duration-500'>
        <GrGithub />
      </button></Link>
    </div>
  
  </motion.div>
<div className='flex items-center justify-center'> 
<motion.img src="/scroll.png" alt="" variants={textVariants} animate="scrollButton"/>
</div>
  
</div>



            <div className='w-full mx-auto grid items-center justify-center gap-8 xl:mb-14  '>

<img src="/b.png" alt="" className='z-10 h-auto w-auto' />



</div>

        
           <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Content Creator | Influencer
      </motion.div> 
    </div>
  );
};

export default Hero;
