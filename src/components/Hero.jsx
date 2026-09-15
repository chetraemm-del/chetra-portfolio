import React, { useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrambleTextPlugin } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { FiArrowUpRight, FiMail, FiSend } from "react-icons/fi";

gsap.registerPlugin(TextPlugin, ScrambleTextPlugin);

function Hero() {
  const nameRef = useRef(null);
  const majorRef = useRef(null);
  const imageRef = useRef(null);
  const contactRef = useRef(null);
  const socailRef = useRef(null);
  const paraRef = useRef(null);
  const fullNameRef = useRef(null);
  const fullMajorRef = useRef(null);

  useGSAP(()=>{
    const tl = gsap.timeline()

    tl.from(fullNameRef.current,{
      y: 20,
      opacity: 0,
      duration: 0.5,
    })
    .from(fullMajorRef.current,{
       y: 20,
      opacity: 0,
      duration: 0.5,
    })
    .from(paraRef.current,{
       y: 20,
      opacity: 0,
      duration: 0.5,
    })
    .from(socailRef.current,{
      y: 20,
      opacity: 0,
      duration: 0.5,
    })
    .from(contactRef.current,{
      y: 20,
      opacity: 0,
      duration: 0.5,
    })
    gsap.from(imageRef.current,{
      x: 90,
      opacity: 0,
      duration: 1.5,
    })
  })
  useGSAP(() => {
    gsap.to(nameRef.current, {
      text: " Chetra",
      duration: 0.5,
      ease: "none",
      repeat: -1,
      yoyo: true,
      repeatDelay: 1.5,
    });

    gsap.to(majorRef.current, {
      scrambleText: {
        text: "Full-Stack Developer",
        chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        speed: 0.4,
      },
      duration: 1.5,
      repeat: -1,
      repeatDelay: 2.5,
      else: "none",
    });

    const image = imageRef.current;

    const handleMouseMove = (e) => {
      const x = e.offsetX / image.offsetWidth - 0.5;
      const y = e.offsetY / image.offsetHeight - 0.5;

      gsap.to(image, {
        rotateY: x * 25,
        rotateX: -y * 25,
        duration: 0.3,
        transformPerspective: 600,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(image, {
        rotateY: 0,
        rotateX: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    image.addEventListener("mousemove", handleMouseMove);
    image.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      image.removeEventListener("mousemove", handleMouseMove);
      image.removeEventListener("mouseleave", handleMouseLeave);
    };
  });
  return (
    <div id="home" className=" h-screen w-full bg-white bg-[radial-gradient(#bfdbfe_1px,transparent_1px)] bg-size-[16px_16px] ">
      <div className="flex flex-wrap md:mt-20 lg:mt-20 mt-35 items-center justify-between ml-30">
        <div className="flex flex-col">
          <h1 ref={fullNameRef} className="mb-4 leading-13">
            <span className="font-semibold momo-trust-display-regular text-2xl sm:text-3xl md:text-5xl lg:text-5xl">
              Hi 👋, I'm
            </span>

            <span
              ref={nameRef}
              className="font-bold bungee-tint-regular text-2xl sm:text-3xl lg:text-6xl md:text-6xl"
            ></span>
          </h1>
          <h1 ref={fullMajorRef} className="momo-trust-display-regular text-xl md:text-2xl lg:text-2xl mb-4 text-gray-700">
            I am a <span ref={majorRef}>Full-Stack Developer</span>{" "}
          </h1>
          <p ref={paraRef} className="text-gray-500 md:text-sm text-[10px] oboto-condensed">
            I enjoy turning ideas into clean, functional, and meaningful web
            experiences. <br />
            Always learning, building, and improving through every project.
          </p>
          <div ref={socailRef} className="flex items-center gap-5 mt-5 ">
            <a href="https://www.facebook.com/share/1DyhY3Mpx5/">
              <img className="md:w-6 lg:w-6 w-4 transition-opacity duration-300 hover:opacity-60 " src="img/facebook.png" />
            </a>
            <a href="https://t.me/chhuychhuychhuychhuychhuychhuych">
              <img className="md:w-6 lg:w-6 w-4 transition-opacity duration-300 hover:opacity-60 " src="img/telegram.png" />
            </a>
            <a href="https://github.com/chetraemm-del">
              <img className="md:w-6 lg:w-6 w-4 transition-opacity duration-300 hover:opacity-60 " src="img/github.png" />
            </a>
          </div>
          <div ref={contactRef} className="flex items-center gap-4 mt-6">
            <button className="border px-3 sm:px-4 py-1.5 sm:py-2 rounded-full roboto-condensed flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base whitespace-nowrap transition-all duration-300 ease-out hover:-translate-y-0.5 active:scale-95 active:translate-y-0 hover:bg-black hover:text-white">
              <FiMail /> Contact Me <FiArrowUpRight/>
            </button>
          </div>
        </div>
        <div
          ref={imageRef}
          className="relative isolate md:w-100 md:h-100 lg:w-100 lg:h-120 w-60 h-60 me-35 mt-20 border-4 border-gray-700 rounded-2xl"
        >
          <img
            className="relative z-10 w-full h-full  object-cover rounded-xl"
            src="https://i.pinimg.com/originals/77/4c/55/774c5558b11c5dc4884429f7f5c7c6f7.jpg?nii=t"
            alt="Chetra"
          />

          {/* Shadow */}
          <div className="absolute -bottom-25 left-1/2 -translate-x-1/2 w-full h-12 bg-gray-600/60 rounded-[50%] blur-xl -z-10"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
