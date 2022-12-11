import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      `Hi, The Name's Tajwar Saiyeed`,
      "Guy-who-loves-coffee.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="min-h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden ">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://i.ibb.co/8MfvYXw/abid-pic-min.png"
        alt=""
      />
      <div className="z-20">
        <h2 className="text-md uppercase text-gray-500 pb-2 tracking-[15px]">
          MERN Stack Developer
        </h2>
        <h1 className="text-2xl text-gray-800 dark:text-cyan-200 md:text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor />
        </h1>
        <div className="pt-5">
          <a href="#about">
            <button className="border border-[#242424] text-gray-500 font-bold py- md:py-2 px-3 md:px-6 rounded-full text-sm uppercase tracking-widest transition-all hover:border-teal-500/40 hover:text-teal-500/40">
              About
            </button>
          </a>
          <a href="#skills" className="mx-2">
            <button className="border border-[#242424] text-gray-500 font-bold py- md:py-2 px-3 md:px-6 rounded-full text-sm uppercase tracking-widest transition-all hover:border-teal-500/40 hover:text-teal-500/40">
              Skills
            </button>
          </a>
          <a href="#projects" className="mr-2">
            <button className="border border-[#242424] text-gray-500 font-bold py- md:py-2 px-3  md:px-6 rounded-full text-sm uppercase tracking-widest transition-all hover:border-teal-500/40 hover:text-teal-500/40">
              Projects
            </button>
          </a>
          <a href="#contact">
            <button className="border border-[#242424] text-gray-500 font-bold py-  md:py-2 px-3  md:px-6 rounded-full text-sm uppercase tracking-widest transition-all hover:border-teal-500/40 hover:text-teal-500/40">
              Contact
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
