import React, { useRef } from "react";
import { projects } from "../util/projectInfo";
import ProjectCard from "./ProjectCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Project() {
  const projectRef = useRef(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray(".project-items");

    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",

        scrollTrigger: {
          trigger: projectRef.current,
          start: "top 50%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);

  return (
    <div id="project" className="bg-black min-h-screen">
      <div className="flex justify-center">
        <div className="h-px w-[90%]" />
      </div>

      <div
        ref={projectRef}
        className="lg:mx-16.5 md:mx-12 sm:mx-10 mt-25 mx-7"
      >
        <h1 className="mb-1 font-semibold momo-trust-display-regular text-[10px] sm:text-[13px] text-white">
          From ideas to working products.
        </h1>

        <p className="momo-trust-display-regular text-[7px] sm:text-[10px] text-gray-600 mb-8">
          Explore the projects I’ve built to practice my skills,
          <br />
          solve problems, and bring ideas to life.
        </p>

        <h1 className=" project-items lg:text-3xl md:text-2xl sm:text-xl font-bold bungee-tint-regular mt-10">
          projects
        </h1>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 mt-6">
          {projects.map((item) => (
            <div key={item.id} className="project-items">
              <ProjectCard project={item} />
            </div>
          ))}
        </div>
      </div>
      <div className="h-20"></div>
    </div>
  );
}

export default Project;