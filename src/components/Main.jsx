import React from "react";
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
import Projects from "./Projects";

const Main = () => {
  return (
    <div className="snap-y snap-mandatory h-screen text-white overflow-y-scroll overflow-x-hidden z-0 scrollbar">
      <section className="snap-center">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>
      {/* services */}
      <div className="relative min-h-screen mt-20 snap-center" id="skills">
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

      <section id="projects" className="snap-start">
        <Projects />
      </section>
      <section id="contact" className="snap-start">
        <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl text-center">
          Reach Me
        </h3>
        <ContactMe />
      </section>
    </div>
  );
};

export default Main;
