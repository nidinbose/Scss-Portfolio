import React, { useState, useEffect } from 'react';
import './Scss/Hero.scss';
import { motion } from 'framer-motion';

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
  const words = ["Full Stack Developer", "Content Creator", "Influencer"];

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2
            className="text-5xl font-mono font-medium text-[#00ff99]"
            variants={textVariants}
            id="typewriter"
          >
            Hai I'M
          </motion.h2>
          <motion.h1
            variants={textVariants}
            className="hover:text-[#00ff99] font-mono"
            id="typewriter"
          >
            Nidin Bose
          </motion.h1>
          {/* Add the TypingEffect here */}
          <motion.h2 variants={textVariants}>
            <TypingEffect words={words} />
          </motion.h2>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>add</motion.button>
            <motion.button variants={textVariants}>add</motion.button>
          </motion.div>
          <motion.img
            src="./scroll.png"
            alt=""
            variants={textVariants}
            animate="scrollButton"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Write content creator influencer
      </motion.div>
      <div className="imageContainer">
        <img src="/b.png" alt="" className="" />
      </div>
    </div>
  );
};

export default Hero;
