import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

const Nav = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="flex items-center justify-between  py-10">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="text-xl font-bold uppercase  text-teal-600  dark:text-teal-400 font-md"
      >
        <SocialIcon
          url="https://www.github.com/tajwarsaiyeed"
          fgColor="black"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/tajwarsaiyeedabid/"
          fgColor="darkcyan"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://web.facebook.com/TajwarSaiyeed/"
          fgColor="darkblue"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.youtube.com/c/abidtechnology"
          className=""
          fgColor="red"
          bgColor="transparent"
        />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        <ul className="flex justify-between items-center gap-5">
          <li>
            <BsFillMoonStarsFill
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-dark dark:text-white"
            />
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1dmp1MUzoQrzXwZnge92fHotzt3XRC8BS/view?usp=sharing"
              className="hidden md:block bg-gradient-to-r from-cyan-500 to-teal-400 text-white px-4 py-2 rounded-md border-none outline-none"
              target={`_blank`}
            >
              Resume
            </a>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default Nav;
