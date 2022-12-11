import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import emailjs from "@emailjs/browser";

export default function ContactMe() {
  const sendEmail = (e) => {
    e.preventDefault();
    const form = {
      name: e.target[0].value,
      email: e.target[1].value,
      subject: e.target[2].value,
      message: e.target[3].value,
    };

    emailjs
      .sendForm(
        "service_79iqlxa",
        "template_27rae6d",
        e.target,
        "EspSgA_wk_m90bO5i"
      )
      .then(
        () => {
          window.alert("Message Sent, We will get back to you shortly");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left max-w-full justify-center mx-auto items-center z-0 md:pb-32">
      <div className="relative md:top-20 space-y-5 flex flex-col">
        <h4 className="md:text-4xl font-bold text-center uppercase dark:text-white">
          I have got just what you need.{" "}
          <span className="underline decoration-teal-500/50">Let's Talk</span>
        </h4>
        <div className="md:space-y-2 ">
          <div className="flex items-center space-x-5 justify-end">
            <p className="md:text-2xl dark:text-white">+8801853600515</p>
            <PhoneIcon className="h-4 w-4 md:h-7 md:w-7 text-teal-500/80 animate-pulse" />
          </div>
          <div className="flex items-center space-x-5 justify-end">
            <p className="md:text-2xl dark:text-white">
              tajwarsaiyeed15@gmail.com
            </p>
            <EnvelopeIcon className="h-4 w-4 md:h-7 md:w-7 text-teal-500/80 animate-pulse" />
          </div>
          <div className="flex items-center space-x-5 justify-end">
            <p className="md:text-2xl dark:text-white">
              Chittagong, Bangladesh
            </p>
            <MapPinIcon className="h-4 w-4 md:h-7 md:w-7 text-teal-500/80 animate-pulse" />
          </div>
        </div>
        <form
          onSubmit={sendEmail}
          className="flex flex-col w-full h-96 p-2 mx-auto gap-2"
        >
          <div className="flex space-x-2">
            <input
              name="user_name"
              placeholder="Name"
              className="w-full outline-none bg-slate-400/10 rounded-md border-b px-4 py-4 md:py-6 border-[#242424] text-gray-500 placeholder-gray-500 font-semibold transition-all focus:border-teal-500/80 focus:text-teal-500/80 hover:border-teal-500/80"
              type="text"
              required
            />
            <input
              name="user_email"
              data-temp-mail-org
              placeholder="Email"
              className="w-full outline-none bg-slate-400/10 rounded-md border-b px-4 py-4 md:py-6 border-[#242424] text-gray-500 placeholder-gray-500 font-semibold transition-all focus:border-teal-500/80 focus:text-teal-500/80 hover:border-teal-500/80"
              type="email"
              required
            />
          </div>
          <input
            name="subject"
            placeholder="Subject"
            className="w-full outline-none bg-slate-400/10 rounded-md border-b px-4 py-4 md:py-6 border-[#242424] text-gray-500 placeholder-gray-500 font-semibold transition-all focus:border-teal-500/80 focus:text-teal-500/80 hover:border-teal-500/80"
            type="text"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            className="w-full outline-none bg-slate-400/10 rounded-md border-b px-4 py-4 md:py-6 border-[#242424] text-gray-500 placeholder-gray-500 font-semibold transition-all focus:border-teal-500/80 focus:text-teal-500/80 hover:border-teal-500/80"
            required
          />
          <button
            type="submit"
            className="bg-teal-500/80 py-5 px-10 hover:text-white text-black rounded-md font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
