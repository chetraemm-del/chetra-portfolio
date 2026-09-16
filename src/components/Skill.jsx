import React from "react";

function Skill() {
  return (
    <div id="skill" className="h-screen bg-black text-white ">
      <div className="flex justify-center">
        <div className="h-px w-[90%] bg-gray-600"></div>
      </div>
      <div className="lg:mx-16.5 md:mx-12 sm:mx-10 mt-10 mx-7">
        <h1 className="mb-1 font-semibold momo-trust-display-regular text-[10px] sm:text-[13px] text-gray-400 ">
          Now, let’s get technical.
        </h1>
        <p className="momo-trust-display-regular text-[7px] sm:text-[10px] text-gray-600  mb-8">
          The technologies I use to build
          <br />
          clean, useful, and meaningful projects
        </p>
        <h1 className="lg:text-3xl md:text-2xl sm:text-xl font-bold bungee-tint-regular mt-10">
          My skill
        </h1>
      </div>
    </div>
  );
}

export default Skill;
