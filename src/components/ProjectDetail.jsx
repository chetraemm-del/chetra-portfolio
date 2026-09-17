import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading";
import { FiArrowLeft, FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { projects } from "../util/projectInfo";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function ProjectDetail() {
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const { id } = useParams();

  const project = projects.find((pj) => pj.id == id);

  const [currentIdx, setCurrentIdx] = useState(0);

  // Loading
  useEffect(() => {
    const times = setTimeout(() => {
      setIsLoading(false);
    }, 700);

    return () => clearTimeout(times);
  }, []);

  // GSAP Animation
  useGSAP(() => {
    if (isLoading || !project) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#project-detail",
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      },
    });

    // Header animation
    tl.from(".project-detail-header", {
      opacity: 0,
      y: -30,
      duration: 0.6,
      ease: "power2.out",
    })

      // Image animation
      .from(
        ".project-detail-image",
        {
          opacity: 0,
          x: -50,
          duration: 0.7,
          ease: "power2.out",
        },
        "-=0.3",
      )

      // Right side animation
      .from(
        ".project-detail-info",
        {
          opacity: 0,
          x: 50,
          duration: 0.7,
          ease: "power2.out",
        },
        "-=0.5",
      );
  }, [isLoading, project]);

  // Back button
  const handleBack = () => {
    navigate("/");

    setTimeout(() => {
      document.getElementById("project")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  };

  // Next image
  const nextImg = () => {
    setCurrentIdx((prevIdx) =>
      prevIdx === project.imgDetail.length - 1 ? 0 : prevIdx + 1,
    );
  };

  // Previous image
  const previousImg = () => {
    setCurrentIdx((prevIdx) =>
      prevIdx === 0 ? project.imgDetail.length - 1 : prevIdx - 1,
    );
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div id="project-detail" className="min-h-screen bg-black text-white">
          <div className="mx-4 sm:mx-8 lg:ml-20 lg:me-30">
            <div className="bg-black h-15"></div>

            <div className="project-detail-header flex flex-wrap items-center gap-4 sm:gap-8">
              <button
                type="button"
                onClick={handleBack}
                className="flex items-center gap-2 border border-white rounded-2xl px-4 py-2 cursor-pointer hover:bg-white/20 active:scale-95 sm:px-5"
              >
                <FiArrowLeft />
                Back
              </button>

              <h1 className="font-semibold">PROJECT DETAIL</h1>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 text-white sm:mt-10 md:grid-cols-2">
              <div className="flex flex-col">
                <div className="project-detail-image relative h-35 overflow-hidden border-4 border-white/60 sm:h-70">
                  <img
                    className="h-full w-full object-cover object-top"
                    src={project.imgDetail[currentIdx]}
                    alt="project-img"
                  />

                  <button
                    onClick={previousImg}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 text-black p-2 rounded-full hover:bg-white active:scale-95"
                  >
                    <FiChevronLeft />
                  </button>

                  <button
                    onClick={nextImg}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 text-black p-2 rounded-full hover:bg-white active:scale-95"
                  >
                    <FiChevronRight />
                  </button>
                </div>

                <div className="mt-7">
                  <h1 className="mb-1 font-semibold momo-trust-display-regular text-[10px] text-gray-400 sm:text-[13px]">
                    Tech Stack :
                  </h1>

                  <div className="flex flex-wrap items-center gap-3 text-gray-100 mt-3">
                    {project.techStack.map((item) => {
                      const Icon = item.icon;

                      return (
                        <div
                          key={item.name}
                          className="flex items-center gap-2 border bg-white/20 px-2 py-1 hover:-translate-y-1 cursor-pointer transition-all duration-300 rounded-sm"
                        >
                            <p className="roboto-condensed text-[8px] sm:text-[11px]">
                            {item.name}
                          </p>

                          <Icon className="text-[14px] sm:text-[17px]" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="project-detail-info">
                <h1 className="mb-5 font-semibold momo-trust-display-regular text-[18px] text-gray-400 sm:text-[20px]">
                  {project.title}
                </h1>

                <div>
                  <h1 className="mb-1 font-semibold momo-trust-display-regular text-[10px] sm:text-[13px] text-gray-400">
                    Description :
                  </h1>

                  <p className="momo-trust-display-regular text-[8px] leading-relaxed text-gray-400 mb-8 sm:text-[10px]">
                    {project.description}
                  </p>
                </div>

                <div>
                  <h1 className="mb-1 font-semibold momo-trust-display-regular text-[10px] sm:text-[13px] text-gray-400">
                    Project Reflection :
                  </h1>

                  <p className="momo-trust-display-regular text-[8px] leading-relaxed text-gray-400 mb-8 sm:text-[10px]">
                    {project.projectReflection}
                  </p>
                </div>
              </div>
            </div>
          
          </div>
          
        </div>
      )}
    </>
  );
}

export default ProjectDetail;
