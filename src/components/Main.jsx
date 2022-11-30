import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithub, FaFacebook } from "react-icons/fa";

import Me from "../images/me.jpg";
import Card1 from "../images/card1.png";
import Card2 from "../images/card2.png";
import Card3 from "../images/card3.png";
import Web1 from "../images/web1.png";
import Web2 from "../images/web2.png";
import Web3 from "../images/web3.png";
import Web4 from "../images/web4.png";
import Web5 from "../images/web5.png";
import Web6 from "../images/web6.png";
import Web7 from "../images/web7.png";

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
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-3 md:gap-10 my-10">
        <div className="text-center lg:w-80 md:w-80 sm:w-96 w-96 dark:bg-sky-100 mx-auto flex flex-col shadow-lg dark:shadow-sky-50 p-10 rounded-xl justify-center items-center">
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
        <div className="text-center lg:w-80 md:w-80 sm:w-96 w-96 dark:bg-sky-100 mx-auto flex flex-col shadow-lg dark:shadow-sky-50 p-10 rounded-xl justify-center items-center">
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
        <div className="text-center lg:w-80 md:w-80 sm:w-96 w-96 dark:bg-sky-100 mx-auto flex flex-col shadow-lg dark:shadow-sky-50 p-10 rounded-xl justify-center items-center">
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
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 py-10 shadow-sm p-2 rounded-lg gap-10 text-center">
        <div className="rounded-lg relative overflow-hidden shadow-md my-1">
          <img src={Web3} alt="" className="object-fill w-full h-3/4" />
          <div className="bg-slate-100 font-bold  flex flex-col items-center w-full h-full">
            <h1 className="text-2xl drop-shadow-lg">Laptop Zone</h1>
            <div className="gap-2 flex">
              <a
                href="https://laptop-zone.web.app/"
                className="text-md"
                target={`_blank`}
              >
                Live Site
              </a>
              <a
                href="https://github.com/TajwarSaiyeed/laptop-zone"
                className="link text-md"
                target={`_blank`}
              >
                Client Side
              </a>
              <a
                href="https://github.com/TajwarSaiyeed/laptop-zone-server"
                className="link text-md"
                target={`_blank`}
              >
                Server Side
              </a>
            </div>
          </div>
        </div>
        <div className="rounded-lg relative overflow-hidden shadow-md my-1">
          <img src={Web2} alt="" className="object-fill w-full h-3/4" />
          <div className="bg-slate-100 font-bold  flex flex-col items-center w-full h-full">
            <h1 className="text-2xl drop-shadow-lg">Abid Photograpy</h1>
            <div className="gap-2 flex">
              <a
                href="https://abid-photography.web.app/"
                className="link text-md"
                target={`_blank`}
              >
                Live Site
              </a>
              <a
                href="https://github.com/TajwarSaiyeed/abid-photography-client"
                className="link text-md"
                target={`_blank`}
              >
                Client Side
              </a>
              <a
                href="https://github.com/TajwarSaiyeed/abid-photography-server"
                className="link text-md"
                target={`_blank`}
              >
                Server Side
              </a>
            </div>
          </div>
        </div>
        <div className="rounded-lg relative overflow-hidden shadow-md my-1">
          <img src={Web1} alt="" className="object-fill w-full h-3/4" />
          <div className="bg-slate-100 font-bold  flex flex-col items-center w-full h-full">
            <h1 className="text-2xl drop-shadow-lg">TSA Academy</h1>
            <div className="gap-2 flex">
              <a
                href="https://tsa-academy-abid.web.app/"
                className="link text-md"
                target={`_blank`}
              >
                Live Site
              </a>
              <a
                href="https://github.com/TajwarSaiyeed/Client-TSA-Academy"
                className="link text-md"
                target={`_blank`}
              >
                Client Side
              </a>
              <a
                href="https://github.com/TajwarSaiyeed/Server-TSA-Academy"
                className="link text-md"
                target={`_blank`}
              >
                Server Side
              </a>
            </div>
          </div>
        </div>
        <div className="rounded-lg relative overflow-hidden shadow-md my-1">
          <img src={Web4} alt="" className="object-fill w-full h-3/4" />
          <div className="bg-slate-100 font-bold  flex flex-col items-center w-full h-full">
            <h1 className="text-2xl drop-shadow-lg">Study Online</h1>
            <div className="gap-2 flex">
              <a
                href="https://study-online-abid.netlify.app/"
                className="link text-md"
                target={`_blank`}
              >
                Live Site
              </a>
              <a
                href="https://github.com/TajwarSaiyeed/Study-Online"
                className="link text-md"
                target={`_blank`}
              >
                Client Side
              </a>
            </div>
          </div>
        </div>
        <div className="rounded-lg relative overflow-hidden shadow-md my-1">
          <img src={Web5} alt="" className="object-fill w-full h-3/4" />
          <div className="bg-slate-100 font-bold  flex flex-col items-center w-full h-full">
            <h1 className="text-2xl drop-shadow-lg">Quizzy App</h1>
            <div className="gap-2 flex">
              <a
                href="https://quizzy-app-abid.netlify.app/"
                className="link text-md"
                target={`_blank`}
              >
                Live Site
              </a>
              <a
                href="https://github.com/TajwarSaiyeed/Quizzy-APP-Abid"
                className="link text-md"
                target={`_blank`}
              >
                Client Side
              </a>
            </div>
          </div>
        </div>
        <div className="rounded-lg relative overflow-hidden shadow-md my-1">
          <img src={Web6} alt="" className="object-fill w-full h-3/4" />
          <div className="bg-slate-100 font-bold  flex flex-col items-center w-full h-full">
            <h1 className="text-2xl drop-shadow-lg">Speed Typer</h1>
            <div className="gap-2 flex">
              <a
                href="https://type-master-abid.netlify.app/"
                className="link text-md"
                target={`_blank`}
              >
                Live Site
              </a>
              <a
                href="https://github.com/TajwarSaiyeed/Speed-Master-Debug"
                className="link text-md"
                target={`_blank`}
              >
                Client Side
              </a>
            </div>
          </div>
        </div>
        <div className="rounded-lg relative overflow-hidden shadow-md my-1">
          <img src={Web7} alt="" className="object-fill w-full h-3/4" />
          <div className="bg-slate-100 font-bold  flex flex-col items-center w-full h-full">
            <h1 className="text-2xl drop-shadow-lg">THE DAILY NEWS</h1>
            <div className="gap-2 flex">
              <a
                href="https://abid-the-daily-news.netlify.app/"
                className="link text-md"
                target={`_blank`}
              >
                Live Site
              </a>
              <a
                href="https://github.com/TajwarSaiyeed/News-Portal"
                className="link text-md"
                target={`_blank`}
              >
                Client Side
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <h3 className="text-3xl dark:text-white md:text-4xl lg:text-5xl py-2">
          Contact Me
        </h3>
      </div>
      <div className="flex justify-center text-5xl gap-4 py-2 my-20">
        <a href="/" className="flex items-center justify-center gap-2">
          <FaGithub className=" dark:text-gray-400" /> Github
        </a>
        <a href="/" className="flex items-center justify-center gap-2">
          <AiFillLinkedin className="text-blue-700 dark:text-blue-500" />{" "}
          Linkedin
        </a>
        <a href="/" className="flex items-center justify-center gap-2">
          <FaFacebook className="text-blue-500 dark:text-blue-700" /> Facebook
        </a>
      </div>
    </div>
  );
};

export default Main;
