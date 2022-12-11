import React from "react";
import Web1 from "../images/web1.png";
import Web2 from "../images/web2.png";
import Web3 from "../images/web3.png";
import Web4 from "../images/web4.png";
import Web5 from "../images/web5.png";
import Web6 from "../images/web6.png";
import Web7 from "../images/web7.png";
import ContactMe from "./ContactMe";
import Skill from "./Skill";
import html from "../images/img/html.png";
import css from "../images/img/css3.png";
import bootstrap from "../images/img/bootstrap.png";
import tailwind from "../images/img/tailwindCss.png";
import git from "../images/img/git.png";
import javascript from "../images/img/javascript.png";
import firebase from "../images/img/firebase.png";
import reactMe from "../images/img/react-js.png";
import next from "../images/img/next.png";
import nodejs from "../images/img/nodejs.png";
import express from "../images/img/express.png";
import redux from "../images/img/redux.png";
import typescript from "../images/img/typescript.png";
import mongodb from "../images/img/mongodb.png";
import materialui from "../images/img/material-ui.png";
import Hero from "./Hero";
import About from "./About";

const Main = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <About />
      {/* services */}
      <div className="relative mt-20" id="skills">
        <h3 className="text-center md:text-4xl uppercase tracking-[20px] text-gray-500 text-2xl mb-20">
          Skill i have
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 justify-items-center align-middle">
          <Skill directionLeft={true} percent={86} imgMe={html} />
          <Skill directionLeft={true} percent={80} imgMe={css} />
          <Skill directionLeft={true} percent={82} imgMe={bootstrap} />
          <Skill directionLeft={true} percent={78} imgMe={tailwind} />
          <Skill directionLeft={true} percent={56} imgMe={git} />
          <Skill directionLeft={true} percent={60} imgMe={javascript} />
          <Skill directionLeft={true} percent={39} imgMe={firebase} />
          <Skill directionLeft={true} percent={62} imgMe={reactMe} />
          <Skill directionLeft={false} percent={12} imgMe={next} />
          <Skill directionLeft={false} percent={47} imgMe={nodejs} />
          <Skill directionLeft={false} percent={34} imgMe={express} />
          <Skill directionLeft={false} percent={16} imgMe={redux} />
          <Skill directionLeft={false} percent={10} imgMe={typescript} />
          <Skill directionLeft={false} percent={42} imgMe={mongodb} />
          <Skill directionLeft={false} percent={20} imgMe={materialui} />
        </div>
      </div>

      {/* card */}

      {/* Portfolio */}
      <div id="projects" className="mt-20">
        <h3 className="text-center md:text-4xl uppercase tracking-[20px] text-gray-500 text-2xl mb-20">
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
      <div id="contact" className="mt-10">
        <h3 className="tracking-[20px] uppercase text-center  dark:text-white md:text-4xl lg:text-5xl">
          Reach Me
        </h3>
        <ContactMe />
      </div>
    </div>
  );
};

export default Main;
