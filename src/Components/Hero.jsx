import React from "react";
import heroImg from '../assets/img/heroImg.webp'

const Hero = () => {
  return (
    <div className="relative h-screen">
      {/* Blurred background image */}
      <div 
        className="absolute inset-0 filter blur-[4px]"
        style={{ 
          backgroundImage: `url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Dark overlay to improve text readability */}
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            Lore Olympus
          </h1>
          <p className="text-3xl md:text-5xl text-white mt-4">
            Jaw-Dropping Webtoon as Seen on Media
          </p>
          <button className="mt-6 px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-md hover:bg-white/20 transition-colors duration-300">
            Read Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;