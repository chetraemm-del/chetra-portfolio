import React, { useRef, useState } from "react";
import { projects } from "../util/projectInfo";
import ProjectCard from "./ProjectCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projectCategories = [
  { label: "All", value: "all" },
  { label: "Frontend", value: "frontend" },
  { label: "Full-stack", value: "fullStack" },
];

function Project() {
  const projectRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  useGSAP(
    () => {
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
    },
    {
      scope: projectRef,
      dependencies: [selectedCategory],
      revertOnUpdate: true,
    }
  );

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

        <h1 className=" lg:text-3xl md:text-2xl sm:text-xl font-bold bungee-tint-regular mt-10">
          projects
        </h1>

        <div
          aria-label="Filter projects by category"
          className="mt-5 flex flex-wrap gap-2"
        >
          {projectCategories.map(({ label, value }) => (
            <button
              key={value}
              type="button"
              aria-pressed={selectedCategory === value}
              onClick={() => setSelectedCategory(value)}
              className={`rounded-full border px-4 py-2 text-xs transition-colors duration-200 cursor-pointer ${
                selectedCategory === value
                  ? "border-white bg-white text-black"
                  : "border-white/20 bg-white/5 text-white hover:bg-white/10"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 mt-6">
          {filteredProjects.map((item) => (
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