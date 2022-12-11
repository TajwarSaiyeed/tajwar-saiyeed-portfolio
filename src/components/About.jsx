import React from "react";
import { motion } from "framer-motion";
const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col text-center md:text-left md:flex-row h-screen max-w-7xl px-10 justify-evenly items-center mx-auto"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl mb-20">
        About
      </h3>

      <motion.img
        className="object-cover mt-36 rounded-full w-56 h-56 flex-shrink-0 md:rounded-lg md:w-64 md:h-96 xl:w-[300px] xl:h-[400px] "
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        src="https://i.ibb.co/8MfvYXw/abid-pic-min.png"
      />

      <div className="space-y-10 px-0 mt-0 md:mt-36 md:px-10">
        <h4 className="text-4xl text-black font-semibold dark:text-slate-300">
          Here is a{" "}
          <span className="underline decoration-teal-500/50">little</span>{" "}
          background
        </h4>
        <p className="text-black dark:text-slate-100">
          I'm Tajwar Saiyeed. I've been coding for over 1 years now. I'm a MERN
          Stack Developer. In 2021, I have complete Intermediate of Science from
          Gachhbaria Gov't Collage. I am self-motivated, quick learner,
          energetic, enthusiastic and ever ready to learn new thing.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
