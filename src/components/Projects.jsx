import React from "react";
import { motion } from "framer-motion";
import html from "../images/img/html.png";
import tailwind from "../images/img/tailwindCss.png";
import firebase from "../images/img/firebase.png";
import ReactMe from "../images/img/react-js.png";
import nodejs from "../images/img/nodejs.png";
import express from "../images/img/express.png";
import mongodb from "../images/img/mongodb.png";

const Projects = () => {
  const projects = [
    {
      _id: 1,
      title: "Laptop Zone",
      image: "https://i.ibb.co/wd13K5h/Untitled-design-removebg-preview.png",
      summary:
        "Laptop Resale that has a login and logout system with google and normal firebase auth. There are 3 types of users admin, sellers, and buyers. Admin can remove, verify any seller, and remove any buyer. The seller posts the product and advertises the product. Any authorized user can report any product. Stripe Payment System, JWT for auth verification.",
      technologies: [
        {
          _id: 1,
          image: html,
        },
        {
          _id: 2,
          image: tailwind,
        },
        {
          _id: 3,
          image: firebase,
        },
        {
          _id: 4,
          image: ReactMe,
        },
        {
          _id: 5,
          image: nodejs,
        },
        {
          _id: 6,
          image: express,
        },
        {
          _id: 7,
          image: mongodb,
        },
      ],
    },
    {
      _id: 2,
      title: "Photography",
      image: "https://i.ibb.co/bPCjn7G/Untitled-design-1-removebg-preview.png",
      summary:
        "Photography app that hast login logout system. Map leaflet. By using this map you can reach me. Users can upload photos. Directly send a message to the admin. Only Authorized users can post reviews.",
      technologies: [
        {
          _id: 1,
          image: html,
        },
        {
          _id: 2,
          image: tailwind,
        },
        {
          _id: 3,
          image: firebase,
        },
        {
          _id: 4,
          image: ReactMe,
        },
        {
          _id: 5,
          image: nodejs,
        },
        {
          _id: 6,
          image: express,
        },
        {
          _id: 7,
          image: mongodb,
        },
      ],
    },
    {
      _id: 3,
      title: "TSA Academy",
      image: "https://i.ibb.co/Ptz38kQ/Untitled-design-2-removebg-preview.png",
      summary:
        "Educational App where students can enroll in courses. Firebase Login system. Imgbb for saving the Image. Save course data in pdf.",
      technologies: [
        {
          _id: 1,
          image: tailwind,
        },
        {
          _id: 3,
          image: firebase,
        },
        {
          _id: 4,
          image: ReactMe,
        },
        {
          _id: 5,
          image: nodejs,
        },
        {
          _id: 6,
          image: express,
        },
      ],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left max-w-full justify-center mx-auto items-center z-0  snap-start bg"
    >
      <h3 className="text-center md:text-4xl uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex scrollbar-thin scrollbar-track-500/40 scrollbar-thumb-teal-500/80 overflow-x-scroll overflow-y-hidden snap-x snap-center snap-mandatory z-20 ">
        {projects.map((project, i) => (
          <div
            key={project._id}
            className="sm:w-full w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20"
          >
            <motion.img
              initial={{
                y: -200,
                opacity: 0,
              }}
              transition={{
                duration: 1.2,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              src={project?.image}
              alt=""
              className=""
            />
            <div className="space-y-5 px-0 md:px-10 max-w-6xl">
              <h4 className="dark:text-white text-teal-800 md:text-4xl text-sm font-bold text-center">
                <span className="underline decoration-teal-500/50">
                  Project {i + 1} of {projects.length}
                </span>{" "}
                : {project?.title}
              </h4>

              <div className="flex justify-center items-center gap-2">
                {project?.technologies.map((technology) => (
                  <img
                    key={technology._id}
                    className="p-1 h-4 w-4 sm:h-8 sm:w-8 rounded-full bg-white"
                    src={technology?.image}
                    alt=""
                  />
                ))}
              </div>
              <p className="text-md text-center text-teal-900 dark:text-white md:text-xl md:text-left">
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
