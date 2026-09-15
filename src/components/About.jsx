import React from "react";

function About() {
  return (
    <div id="about" className="h-screen w-full">
      <section className="px-18 pb-20 pt-15">
        <div className="relative mx-auto w-8xl h-170  rounded-3xl">
          <img
            className="absolute w-full h-full inset-0 object-cover rounded-3xl "
            src="img/aboutme2.jpg"
            alt=""
          />
          <div className="bg-black/10 inset-0 absolute rounded-3xl"></div>
          <div className="absolute inset-0 flex gap-40 left-15 right-20 top-20 ">
            <div className="mt-4">
              <img
                className=" w-90 h-120  object-cover rounded-xl border"
                src="https://i.pinimg.com/originals/77/4c/55/774c5558b11c5dc4884429f7f5c7c6f7.jpg?nii=t"
                alt="Chetra"
              />
            </div>
            <div className="text-white ">
              <h1 className="text-4xl font-bold bungee-tint-regular">About Me</h1>
              <h1 className="text-3xl font-bold text-bl">About Me</h1>
            </div>
          </div>
          <div className="absolute -bottom-25 left-1/2 -translate-x-1/2 w-full h-12 bg-gray-600/40 rounded-[50%] blur-xl -z-10"></div>
        </div>
      </section>
    </div>
  );
}

export default About;
