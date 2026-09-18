
import React from "react";

function Education() {
  return (
    <div className="bg-black h-screen">
      <div className="h-24 mt-10"></div>

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

        <div className="w-full bg-white/85 h-95 relative rounded-2xl">
          <div
            className="
              absolute
              top-10
              left-10
              right-10
              md:left-16
              md:right-16
              lg:left-27
              lg:right-10
              flex
              lg:flex-row
              flex-col
              justify-between
              items-center
            "
          >
            <div className="flex lg:flex-col gap-13">
              <h1 className="lg:text-xl md:text-[15px] text-[13px] font-bold bungee-tint-regular">
                projects
              </h1>

              <div className="flex lg:flex-row flex-col items-center gap-5 lg:gap-8">
                <div className="lg:h-60 bg-gray-500 h-0.5 sm:w-60 w-30 lg:w-0.5"></div>

                <div className="mb-10">
                  <div>
                    <h1 className="momo-trust-display-regular font-semibold lg:text-[16px] md:text-[11px] text-[9px]">
                      Royal University of Phnom Penh (RUPP)
                    </h1>

                    <p className="text-gray-700 lg:text-[14px] md:text-[9px] text-[7px]">
                      Information Technology
                    </p>

                    <p className="text-gray-700 lg:text-[14px] md:text-[9px] text-[7px]">
                      2025 – Present
                    </p>
                  </div>

                  <div className="lg:mt-10 mt-4">
                    <h1 className="momo-trust-display-regular font-semibold lg:text-[16px] md:text-[11px] text-[9px]">
                      Master IT School
                    </h1>

                    <p className="text-gray-700 lg:text-[14px] md:text-[9px] text-[7px]">
                      Modern Full Stack Web Developer
                    </p>

                    <p className="text-gray-700 lg:text-[14px] md:text-[9px] text-[7px]">
                      2025 - 2026
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex lg:flex-col gap-6 lg:mt-0 md:mt-10">
              <h1 className="lg:text-xl md:text-[15px] text-[13px] font-bold bungee-tint-regular">
                Certification
              </h1>

              <div className="flex lg:flex-row flex-col items-center gap-8">
                <div className="lg:h-60 bg-gray-500 h-0.5 sm:w-60 w-30 lg:w-0.5"></div>

                <div>
                  <img
                    className="lg:h-60 lg:w-100 w-30 h-20 md:w-60 md:h-36 object-cover"
                    src="https://tse1.mm.bing.net/th/id/OIP.ExW3AwwO-qJV1um98HGxGgHaE8?r=0&pid=Api&h=220&P=0"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;

