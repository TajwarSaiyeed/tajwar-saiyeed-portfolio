import React from "react";
import Me from "../images/me.jpg";
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

const Main = () => {
  return (
    <div>
      <div className="p-10 text-center">
        <h2 className="text-5xl md:text-6xl lg:text-8xl py-2 text-teal-600 dark:text-teal-400 font-medium">
          Tajwar Saiyeed
        </h2>
        <h3 className="text-xl text-dark dark:text-white md:text-3xl lg:text-4xl py-2">
          MERN Stack Developer
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
        <h3 className="text-3xl mb-12 text-center dark:text-white md:text-4xl lg:text-5xl py-2">
          Skill i have
        </h3>
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-2 justify-items-center align-middle">
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
      <div className="mt-10">
        <h3 className="tracking-[20px] uppercase text-center  dark:text-white md:text-4xl lg:text-5xl">
          Reach Me
        </h3>
        <ContactMe />
      </div>
    </div>
  );
};

export default Main;
