import React from 'react'
import { motion } from 'framer-motion'
import './Scss/Services.scss';

const Services = () => {
  return (
<>
<section class="min-h-screen bg-transparant text-center py-20 px-8 xl:px-0 flex flex-col justify-center">
  <span class="text-gray-400 text-lg max-w-lg mx-auto mb-2 capitalize flex items-center">what we're offering <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-indigo-600 ml-3 w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
    </svg>
  </span>
  <h1 class="text-white text-4xl md:text-5xl xl:text-6xl font-semibold max-w-3xl mx-auto mb-16 leading-snug">Services Built Specifically for your Business</h1>
  <div class="grid-offer text-left grid sm:grid-cols-2 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
    <div class="card bg-transparant p-10 relative">
      <div class="circle">
      </div>
      <div class="relative lg:pr-52 font-mono">
        <h2 class="capitalize text-white mb-4 text-2xl xl:text-3xl">Full Stack <br /> Web Development</h2>
        <p class="text-[#00ff99] font-mono">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.</p>
      </div>
      <div class="icon"></div>
    </div>
    <div class="card border:bg-[#00ff99] p-10 relative border">
      <div class="circle">
      </div>
      <div class="relative lg:pl-48">
        <h2 class="capitalize text-white mb-4 text-2xl xl:text-3xl">visual <br /> graphic design</h2>
        <p class="text-gray-400 font-mono">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.</p>
      </div>
    </div>
    <div class="card border p-10 relative">
      <div class="circle">
      </div>
      <div class="relative lg:pr-44">
        <h2 class="capitalize text-white mb-4 text-2xl xl:text-3xl ">strategy & <br />digital marketing</h2>
        <p class="text-gray-400 font-mono">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.</p>
      </div>
    </div>
    <div class="card transparant p-10 relative">
      <div class="circle">
      </div>
      <div class="relative lg:pl-48">
        <h2 class="capitalize text-white mb-4 text-2xl xl:text-3xl">effective<br /> business growth</h2>
        <p class=" font-mono text-[#00ff99]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.</p>
      </div>
    </div>
  </div>
  </section>
</>
  )
}

export default Services