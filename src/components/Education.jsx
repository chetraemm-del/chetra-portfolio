import React from "react";

function Education() {
  return (
    <div className="bg-black h-screen">
      <div className="h-24 m2-10"></div>
      <div className="lg:mx-16.5 md:mx-12 sm:mx-10 mx-7">
        <h1 className="mb-1 font-semibold momo-trust-display-regular text-[10px] sm:text-[13px] text-white">
          Where I’m building my foundation.
        </h1>

        <p className="momo-trust-display-regular text-[7px] sm:text-[10px] text-gray-600 mb-8">
          My academic journey has helped me develop a strong foundation in
          technology, problem solving,
          <br />
          and software development. I continue to expand my knowledge through
          university studies and hands-on projects.
        </p>
        <div className="w-full  bg-white/85 h-95 relative rounded-2xl">
          <div className="absolute top-10 left-27 flex flex-wrap justify-between items-center right-135">
            <div className="flex flex-col gap-5">
              <h1 className="  lg:text-xl md:text-[18px] text-[16px] font-bold bungee-tint-regular ">
                projects
              </h1>
              <div className="flex items-center gap-3">
                <div className="h-60 bg-gray-500 w-0.5 "></div>
                <div></div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="  lg:text-xl md:text-[18px] text-[16px] font-bold bungee-tint-regular ">
                projects
              </h1>
              <div className="flex items-center gap-3">
                <div className="h-60 bg-gray-500 w-0.5 "></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
