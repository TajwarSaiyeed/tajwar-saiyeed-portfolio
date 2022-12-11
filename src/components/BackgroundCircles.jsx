import React from "react";
import { motion } from "framer-motion";

const BackgroundCircles = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      }}
      transition={{
        ducation: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute  border border-teal-800 dark:border-cyan-200 rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
      <div className="absolute hidden dark:block border border-[#333333] rounded-full h-[300px] w-[300px] mt-52" />
      <div className="absolute hidden dark:block border border-[#727272] rounded-full h-[500px] w-[500px] mt-52 " />
      <div className="absolute hidden dark:block opacity-20 border border-teal-500 rounded-full animate-pulse w-[650px] h-[650px] mt-52" />
      <div className="animate-pulse absolute hidden dark:block border border-[#777777] rounded-full h-[800px] w-[800px] mt-52 " />
    </motion.div>
  );
};

export default BackgroundCircles;
