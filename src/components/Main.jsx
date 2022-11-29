import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithub, FaFacebook } from "react-icons/fa";

import Me from "../images/me.jpg";
import Card1 from "../images/card1.png";
import Card2 from "../images/card2.png";
import Card3 from "../images/card3.png";
import Web1 from "../images/web1.png";
import Web2 from "../images/web2.jpg";
import Web3 from "../images/web3.png";
import Web4 from "../images/web4.png";
import Web5 from "../images/web5.png";
import Web6 from "../images/web6.png";

const Main = () => {
  return (
    <div>
      <div className="p-10 text-center">
        <h2 className="text-5xl md:text-6xl lg:text-8xl py-2 text-teal-600 dark:text-teal-400 font-medium">
          Tajwar Saiyeed
        </h2>
        <h3 className="text-xl text-dark dark:text-white md:text-3xl lg:text-4xl py-2">
          Junior Web Developer
        </h3>
      </div>
      <div className="flex justify-center text-5xl gap-4 py-2">
        <a href="/">
          <FaGithub className=" dark:text-gray-400" />
        </a>
        <a href="/">
          <AiFillLinkedin className="text-blue-700 dark:text-blue-500" />
        </a>
        <a href="/">
          <FaFacebook className="text-blue-500 dark:text-blue-700" />
        </a>
      </div>
      <div className="relative mt-20 items-center mx-auto bg-gradient-to-b from-teal-500 dark:from-sky-200 rounded-full w-80 h-80 p-2 lg:w-96 lg:h-96 overflow-hidden">
        <img
          src={Me}
          className="object-cover rounded-full h-full w-full"
          alt=""
        />
      </div>
      {/* services */}
      <div className="mt-20">
        <h3 className="text-3xl dark:text-white md:text-4xl lg:text-5xl py-2">
          Skill i have
        </h3>
      </div>

      {/* card */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-10">
        <div className="text-center w-80 dark:bg-sky-100 mx-auto flex flex-col shadow-lg dark:shadow-sky-50 p-10 rounded-xl justify-center items-center">
          <img src={Card1} width={100} height={100} alt="" />
          <h3 className="text-lg font-medium pt-8 pb-2">Responsive Design</h3>
          <h4 className="text-teal-500 py-4">Tool i use</h4>
          <div className="text-gray-800 py-1">
            <p>Vanilla CSS</p>
            <p>Bootstrap</p>
            <p>Tailwind CSS</p>
            <p>React Bootstrap</p>
            <p>daisyUI</p>
            <p>MUI</p>
          </div>
        </div>
        <div className="text-center w-80 dark:bg-sky-100 mx-auto flex flex-col shadow-lg dark:shadow-sky-50 p-10 rounded-xl justify-center items-center">
          <img src={Card2} width={100} height={100} alt="" />
          <h3 className="text-lg font-medium pt-8 pb-2">Coding and Design</h3>

          <h4 className="text-teal-500 py-4">Tools I use</h4>
          <div className="text-gray-800 py-1">
            <p>HTML for Markup</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>React</p>
          </div>
        </div>
        <div className="text-center w-80 dark:bg-sky-100 mx-auto flex flex-col shadow-lg dark:shadow-sky-50 p-10 rounded-xl justify-center items-center">
          <img src={Card3} width={100} height={100} alt="" />
          <h3 className="text-lg font-medium pt-8 pb-2">Server Upload</h3>
          <h4 className="text-teal-500 py-4">Tools I use</h4>
          <div className="text-gray-800 py-1">
            <p>NodeJS</p>
            <p>Express JS</p>
            <p>MongoDB</p>
          </div>
        </div>
      </div>
      {/* Portfolio */}
      <div className="mt-20">
        <h3 className="text-3xl dark:text-white md:text-4xl lg:text-5xl py-2">
          Projects
        </h3>
        <p className="leading-6 py-5 text-gray-800 dark:text-gray-200 text-md">
          <span className="text-teal-500">Responsive Website</span> quisquam
          suscipit, obcaecati quod eum sunt{" "}
          <span className="text-cyan-600">Tailwind CSS</span> dolorum fugit eos
          officiis soluta, impedit, possimus velit! Sapiente, dolores
          praesentium.
        </p>
        <p className="leading-6 py-5 text-gray-800 text-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quam a
          animi distinctio natus quas.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 py-10 shadow-sm p-2 rounded-lg gap-10 text-center">
        <div className="rounded-lg overflow-hidden shadow-md my-1">
          <img src={Web1} alt="" className="h-full w-full" />
        </div>
        <div className="rounded-lg overflow-hidden shadow-md my-1">
          <img src={Web2} alt="" className="h-full w-full" />
        </div>
        <div className="rounded-lg overflow-hidden shadow-md my-1">
          <img src={Web3} alt="" className="h-full w-full" />
        </div>
        <div className="rounded-lg overflow-hidden shadow-md my-1">
          <img src={Web4} alt="" className="h-full w-full" />
        </div>
        <div className="rounded-lg overflow-hidden shadow-md my-1">
          <img src={Web5} alt="" className="h-full w-full" />
        </div>
        <div className="rounded-lg overflow-hidden shadow-md my-1">
          <img src={Web6} alt="" className="h-full w-full" />
        </div>
      </div>
    </div>
  );
};

export default Main;
