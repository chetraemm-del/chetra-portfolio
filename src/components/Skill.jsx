import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import { FaGitAlt, FaJava } from "react-icons/fa";
import {
  SiCss,
  SiDocker,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
function Skill() {
  const frontend = [
    {
      name: "HTML",
      icon: SiHtml5,
      description:
        "The basic structure of a web page, including headings, text, images, buttons, and forms.",
    },
    {
      name: "CSS",
      icon: SiCss,
      description:
        "Used to style web pages with colors, spacing, layouts, responsive designs, and animations.",
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
      description:
        "Adds logic and interactivity to websites, such as handling events, forms, and dynamic content.",
    },
    {
      name: "React",
      icon: SiReact,
      description:
        "A JavaScript library for building interactive user interfaces with reusable components.",
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      description:
        "A utility-first CSS framework that helps create responsive and modern designs quickly.",
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      description:
        "A React framework for building fast web applications with routing, rendering, and optimization.",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      description:
        "A JavaScript superset that adds static types to make code safer and easier to maintain.",
    },
  ];

  const backend = [
    {
      name: "Node.js",
      icon: SiNodedotjs,
      description:
        "A runtime that allows JavaScript to run outside the browser for building servers and backend applications.",
    },
    {
      name: "Express.js",
      icon: SiExpress,
      description:
        "A Node.js framework used to create servers, routes, middleware, and REST APIs.",
    },
    {
      name: "Java",
      icon: FaJava,
      description:
        "A general-purpose programming language used to build applications, backend systems, and enterprise software.",
    },
    {
      name: "Spring Boot",
      icon: SiSpringboot,
      description:
        "A Java framework that simplifies the development of backend applications and REST APIs.",
    },
  ];

  const database = [
    {
      name: "MongoDB",
      icon: SiMongodb,
      description:
        "A NoSQL database that stores data in flexible document-like structures.",
    },
    {
      name: "MySQL",
      icon: SiMysql,
      description:
        "A relational database that stores organized data in tables and uses SQL to manage it.",
    },
  ];

  const tools = [
    {
      name: "Git",
      icon: FaGitAlt,
      description:
        "A version control tool used to track code changes and manage different versions of a project.",
    },
    {
      name: "GitHub",
      icon: SiGithub,
      description:
        "A platform for hosting code, managing repositories, and collaborating with other developers.",
    },
    {
      name: "VS Code",
      icon: VscVscode,
      description:
        "A lightweight code editor used to write, debug, and manage software projects.",
    },
    {
      name: "Docker",
      icon: SiDocker,
      description:
        "A tool that packages applications and their dependencies into containers for consistent development and deployment.",
    },
    {
      name: "Vercel",
      icon: SiVercel,
      description:
        "A cloud platform used to deploy and host web applications, especially React and Next.js projects.",
    },
  ];
  const techStack = [
    // Frontend
    SiHtml5,
    SiCss,
    SiJavascript,
    SiReact,
    SiTailwindcss,
    SiNextdotjs,
    SiTypescript,

    // Backend
    SiNodedotjs,
    SiExpress,
    FaJava,
    SiSpringboot,

    // Database
    SiMongodb,
    SiMysql,

    // Tools
    FaGitAlt,
    SiGithub,
    VscVscode,
    SiDocker,
    SiVercel,
    SiHtml5,
    SiCss,
    SiJavascript,
    SiReact,
    SiTailwindcss,
    SiNextdotjs,
    SiTypescript,

    // Backend
    SiNodedotjs,
    SiExpress,
    FaJava,
    SiSpringboot,

    // Database
    SiMongodb,
    SiMysql,

    // Tools
    FaGitAlt,
  ];
  const techStack2 = [
    // Frontend
    SiHtml5,
    SiCss,
    SiJavascript,
    SiReact,
    SiTailwindcss,
    SiNextdotjs,
    SiTypescript,

    // Backend
    SiNodedotjs,
    SiExpress,
    FaJava,
    SiSpringboot,

    // Database
    SiMongodb,
    SiMysql,

    // Tools
    FaGitAlt,
    SiGithub,
    VscVscode,
    SiDocker,
    SiVercel,
    SiHtml5,
    SiCss,
    SiJavascript,
    SiReact,
    SiTailwindcss,
    SiNextdotjs,
    SiTypescript,

    // Backend
    SiNodedotjs,
    SiExpress,
    FaJava,
    SiSpringboot,

    // Database
    SiMongodb,
    SiMysql,

    // Tools
    FaGitAlt,
  ];

  const hRef = useRef(null);

  useGSAP(() => {
    const items = gsap.utils.toArray(".skill-items");

    gsap.fromTo(
      items,
      {
        opacity: 0,
        yPercent: 10,
      },
      {
        opacity: 1,
        yPercent: 0,
        duration: 0.5,
        stagger: 0.15,
        ease: "power2.out",

        scrollTrigger: {
          trigger: "#skill-items-container",
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      },
    );
  });
  const [selectedTech, setSelectedTech] = useState(null);
  const SelectedIcon = selectedTech?.icon;
  const scrollRef = useRef(null);
  const tweenRef = useRef(null);
  useGSAP(
    () => {
      tweenRef.current = gsap.to(scrollRef.current, {
        xPercent: -50,
        ease: "none",
        duration: 15,
        repeat: -1,
      });
    },
    { scope: scrollRef },
  );

  const handleMouseEnter = () => {
    tweenRef.current.pause();
  };

  const handleMouseLeave = () => {
    tweenRef.current.play();
  };
  return (
    <div
      id="skill"
      className="min-h-screen bg-black text-white  "
    >
      <div className="flex justify-center">
        <div className="h-px w-[90%] bg-gray-600"></div>
      </div>
      <div
        id="skill-items-container"
        className="lg:mx-16.5 md:mx-12 sm:mx-10 mt-10 mx-7"
      >
        <h1 className="mb-1 font-semibold momo-trust-display-regular text-[10px] sm:text-[13px] text-white ">
          Now, let’s get technical.
        </h1>
        <p className="momo-trust-display-regular text-[7px] sm:text-[10px] text-gray-600  mb-8">
          The technologies I use to build
          <br />
          clean, useful, and meaningful projects
        </p>
        <h1
          ref={hRef}
          className="skill-items lg:text-3xl md:text-2xl sm:text-xl font-bold bungee-tint-regular mt-10"
        >
          My skills
        </h1>
        <div className="mt-6">
          <h1 className="skill-items mb-1 font-semibold momo-trust-display-regular text-[10px] sm:text-[13px] text-gray-400 ">
            Frontend
          </h1>
          <div className=" flex flex-wrap items-center gap-3  text-gray-100 mt-3">
            {frontend.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.name}
                  onClick={() => setSelectedTech(item)}
                  className="skill-items pointer-events-auto flex items-center gap-2 border bg-white/20 px-2 py-1 hover:-translate-y-1 cursor-pointer transition-all duration-300 rounded-sm"
                >
                  <p className="roboto-condensed text-[12px] sm:text-[15px]">
                    {item.name}
                  </p>
                  <Icon className=" text-[14px] sm:text-[17px]" />
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-6">
          <h1 className="skill-items mb-1 font-semibold momo-trust-display-regular text-[10px] sm:text-[13px] text-gray-400 ">
            Backend
          </h1>
          <div className="flex flex-wrap items-center gap-3  text-gray-100 mt-3">
            {backend.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.name}
                  onClick={() => setSelectedTech(item)}
                  className="skill-items  pointer-events-auto flex items-center gap-2 border bg-white/20 px-2 py-1 hover:-translate-y-1 cursor-pointer transition-all duration-300 rounded-sm"
                >
                  <p className="roboto-condensed text-[12px] sm:text-[15px]">
                    {item.name}
                  </p>
                  <Icon className=" text-[14px] sm:text-[17px]" />
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-6">
          <h1 className="skill-items mb-1 font-semibold momo-trust-display-regular text-[10px] sm:text-[13px] text-gray-400 ">
            Database
          </h1>
          <div className=" flex flex-wrap items-center gap-3  text-gray-100 mt-3">
            {database.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.name}
                  onClick={() => setSelectedTech(item)}
                  className="skill-items pointer-events-auto flex items-center gap-2 border bg-white/20 px-2 py-1 hover:-translate-y-1 cursor-pointer transition-all duration-300 rounded-sm"
                >
                  <p className="roboto-condensed text-[12px] sm:text-[15px]">
                    {item.name}
                  </p>
                  <Icon className=" text-[14px] sm:text-[17px]" />
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-6">
          <h1 className="skill-items mb-1 font-semibold momo-trust-display-regular text-[10px] sm:text-[13px] text-gray-400 ">
            Tools & Other Technologies
          </h1>
          <div className=" flex flex-wrap items-center gap-3  text-gray-100 mt-3">
            {tools.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.name}
                  onClick={() => setSelectedTech(item)}
                  className="skill-items pointer-events-auto flex items-center gap-2 border bg-white/20 px-2 py-1 hover:-translate-y-1 cursor-pointer transition-all duration-300 rounded-sm"
                >
                  <p className="roboto-condensed text-[12px] sm:text-[15px]">
                    {item.name}
                  </p>
                  <Icon className=" text-[14px] sm:text-[17px]" />
                </div>
              );
            })}
          </div>
        </div>
        <div
          className="w-full overflow-hidden mt-15 cursor-pointer h-15 "
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div ref={scrollRef} className="flex gap-4 w-max">
            {[...techStack, ...techStack2].map((Icon, idx) => (
              <Icon className="sm:text-xl text-[16px] hover:scale-150 transition-all duration-200 mt-3" />
            ))}
          </div>
        </div>
        {selectedTech && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-6 backdrop-blur-sm"
            onClick={() => setSelectedTech(null)}
          >
            <div
              className="relative w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                onClick={() => setSelectedTech(null)}
                className="absolute right-4 top-4 text-2xl text-neutral-500 hover:text-neutral-900"
              >
                ×
              </button>

              {SelectedIcon && (
                <SelectedIcon className="mx-auto mb-5 text-6xl text-neutral-900" />
              )}

              <h3 className="mb-3 text-2xl font-bold text-neutral-900">
                {selectedTech.name}
              </h3>

              <p className="leading-7 text-neutral-600">
                {selectedTech.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Skill;
