import React from "react";
import { SiGithub } from "react-icons/si";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function ProjectCard({ project }) {
  const navigate = useNavigate();

  return (
    <div className="group w-70 md:w-80 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-sm shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-2xl">
      
      <div className="relative h-40 md:h-44 overflow-hidden">
        <img
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          src={`/${project.imgPoster}`}
          alt={project.title}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        <div className="absolute top-3 left-3 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[10px] text-white backdrop-blur-md">
          PROJECT
        </div>
      </div>

      <div className="p-4 md:p-5">
        <h1 className="mb-4 truncate text-lg md:text-xl font-bold text-white roboto-condensed">
          {project.title}
        </h1>

        <div className="flex items-center gap-2">
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-3 py-2 text-xs md:text-sm text-white transition duration-300 hover:bg-white/10 active:scale-95"
          >
            <SiGithub />
            Source Code
          </a>

          <button
            onClick={() =>
              navigate(`/project/project-detail/${project.id}`)
            }
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white px-3 py-2 text-xs md:text-sm font-medium text-black transition duration-300 hover:bg-white/90 active:scale-95 cursor-pointer"
          >
            Details
            <FaArrowRight className="text-[10px] transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;