import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

function About() {
  return (
    <div id="about" className="h-screen w-full mb-40 mt-5">
      
      <section className="md:px-22 px-10 pb-20 pt-8">
        <h1 className="mb-1 font-semibold momo-trust-display-regular text-[13px] text-gray-600">THE PERSON BEHIND THE PROJECTS</h1>
        <p className="momo-trust-display-regular text-[10px] text-gray-400 mb-8">A passionate developer who enjoys solving problems, exploring new
technologies, <br /> and turning ideas into clean and meaningful projects.</p>
        <div className="relative mx-auto w-8xl h-140  rounded-3xl">
          <img
            className="absolute w-full h-full inset-0 object-cover rounded-3xl "
            src="img/aboutme2.jpg"
            alt=""
          />
          <div className="bg-black/10 inset-0 absolute rounded-3xl"></div>
          <div className="absolute inset-0 flex flex-wrap md:gap-8 lg:gap-25 left-15 right-20 lg:right-5 sm:top-10 top-3 ">
            <div className="sm:mt-11 ">
              <img
                className=" lg:w-60 lg:h-90 md:w-50 md:h-80 sm:w-50 object-cover rounded-xl border"
                src="https://i.pinimg.com/originals/77/4c/55/774c5558b11c5dc4884429f7f5c7c6f7.jpg?nii=t"
                alt="Chetra"
              />
            </div>
            <div className="text-white flex-col ">
              <h1 className="lg:text-4xl md:text-3xl sm:text-2xl font-bold bungee-tint-regular">
                About Me
              </h1>
              <div className="bg-black/40 px-6 py-2 sm:py-6 mt-1 sm:mt-4 rounded-2xl">
                <h1 className="lg:text-[17px] md:text-[13px] text-[10px] sm:text-[12px] roboto-condensed  text-bl md:w-40 w-35 lg:w-90">
                Hello, I’m Chum Chetra, a third-year Information Technology
                student at the Royal University of Phnom Penh. <br />
                I’m a passionate web developer with experience in the MERN stack
                and a growing interest in backend development. Currently, I’m
                learning Java and Spring Boot while building projects to improve
                my skills and explore new technologies. <br />I enjoy solving
                problems, turning ideas into real applications, and continuously
                learning through hands-on experience. <br /> <button className="bg-white px-3 py-1 text-black mt-2 rounded-2xl flex items-center border hover:bg-black hover:text-white transition-all duration-300 cursor-pointer active:scale-90">Get My Cv <FiArrowUpRight/></button>
              </h1>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-25 left-1/2 -translate-x-1/2 w-full h-12 bg-gray-600/40 rounded-[50%] blur-xl -z-10"></div>
        </div>
      </section>
    </div>
  );
}

export default About;
