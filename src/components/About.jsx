import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const aboutRef = useRef(null);
  const hRef = useRef(null);
  const imgRef = useRef(null);
  const paraRef = useRef(null);
  const clipRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(imgRef.current, {
        duration: 0.8,
        opacity: 0,
        x: -60,
        ease: "power2.out",
        scrollTrigger: {
          trigger: hRef.current,
          start: "top 30%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(paraRef.current, {
        duration: 0.8,
        opacity: 0,
        x: 60,
        ease: "power2.out",
        scrollTrigger: {
          trigger: hRef.current,
          start: "top 30%",
          toggleActions: "play none none reverse",
        },
      });

      const clip = clipRef.current;

      const scaleX = window.innerWidth / clip.offsetWidth;
      const scaleY = window.innerHeight / clip.offsetHeight;

      const finalScale = Math.max(scaleX, scaleY);

      gsap.to(clip, {
        scale: finalScale,
        borderRadius: 0,
        ease: "none",

        scrollTrigger: {
          trigger: clip,
          start: "center center",
          end: "+=700",
          scrub: 1,

          pin: true,
          pinSpacing: true,
        },
      });
    },
    { scope: aboutRef },
  );

  return (
    <div ref={aboutRef} id="about" className="w-full mt-5">
      <section className="md:px-22 px-10 pt-8">
        {/* Title */}
        <h1
          ref={hRef}
          className="mb-1 font-semibold momo-trust-display-regular text-[10px] sm:text-[13px] text-gray-600"
        >
          THE PERSON BEHIND THE PROJECTS
        </h1>

        {/* Description */}
        <p className="momo-trust-display-regular text-[7px] sm:text-[10px] text-gray-400 mb-8">
          A passionate developer who enjoys solving problems, exploring new
          technologies,
          <br />
          and turning ideas into clean and meaningful projects.
        </p>

        {/* Image */}
        <div
          ref={clipRef}
          id="clip"
          className="
            relative
            mx-auto
            w-8xl
            h-146
            rounded-3xl
            overflow-hidden
            clip-path
            origin-center
          "
        >
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="img/aboutme2.jpg"
            alt=""
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/10"></div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-wrap md:gap-8 lg:gap-25 left-15 right-20 lg:right-5 sm:top-10 top-3">
            <div ref={imgRef} className="sm:mt-11">
              <img
                className="lg:w-60 lg:h-90 md:w-50 md:h-80 sm:w-50 object-cover rounded-xl border"
                src="https://i.pinimg.com/originals/77/4c/55/774c5558b11c5dc4884429f7f5c7c6f7.jpg?nii=t"
                alt="Chetra"
              />
            </div>

            <div ref={paraRef} className="text-white flex-col">
              <h1 className="lg:text-4xl md:text-3xl sm:text-2xl font-bold bungee-tint-regular">
                About Me
              </h1>

              <div className="bg-black/40 px-6 py-2 sm:py-6 mt-1 sm:mt-4 rounded-2xl">
                <h1 className="lg:text-[17px] md:text-[13px] text-[10px] sm:text-[12px] roboto-condensed text-bl md:w-40 w-35 lg:w-90">
                  Hello, I’m Chum Chetra, a third-year Information Technology
                  student at the Royal University of Phnom Penh.
                  <br />
                  I’m a passionate web developer with experience in the MERN
                  stack and a growing interest in backend development.
                  Currently, I’m learning Java and Spring Boot while building
                  projects to improve my skills and explore new technologies.
                  <br />
                  I enjoy solving problems, turning ideas into real
                  applications, and continuously learning through hands-on
                  experience.
                  <br />
                  <button className="bg-white px-3 py-1 text-black mt-2 rounded-2xl flex items-center border hover:bg-black hover:text-white transition-all duration-300 cursor-pointer active:scale-90">
                    <a
                      href="/Chhum-Chetra-CV-03.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View My CV
                    </a>

                    <FiArrowUpRight />
                  </button>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
