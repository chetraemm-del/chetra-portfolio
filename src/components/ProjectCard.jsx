import React from 'react'
import { DiTerminal } from 'react-icons/di'
import { SiGithub } from 'react-icons/si'

function ProjectCard({project}) {
  return (
    <div className='border-gray-500 border bg-white/20 md:h-70 md:w-80 h-60 w-70 flex flex-col mt-5 md:mt-10  hover:-translate-y-1 duration-300 transition'>
      <img className='w-full h-[80%]' src={`/${project.imgPoster}`} alt={project.title} />
      <h1 className='text-white md:text-xl text-sm font-bold roboto-condensed mt-3 ml-5 mb-1 '>{project.title}</h1>
      <div className='flex items-center justify-between md:mx-5 mx-3 mt-1 mb-2'>
        <a  className = 'flex items-center gap-2 text-[10px] md:text-sm px-4 py-2 rounded-2xl border border-white text-white hover:bg-white/30 transition-all duration-300 active:scale-90' href={project.code}>Soure Code<SiGithub/></a>
        <button className='border-white border text-[10px] md:text-sm text-white px-4 py-2 rounded-2xl  hover:bg-white/30 transition-all duration-300 active:scale-90 cursor-pointer'>Project Detail</button>
      </div>
    </div>
  )
}

export default ProjectCard
