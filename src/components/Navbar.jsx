import React, { useEffect, useRef, useState } from "react";
import { FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function Navbar() {
  const navSection = ["Home", "About", "Skill", "Project", "Education"];
  const navContainerRef = useRef(null);
  const lastScrolledRef = useRef(0);
  const navRef = useRef(null);
  const { y: currentScrolled } = useWindowScroll();
  const logoRef = useRef(null);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const menuBtnRef = useRef(null);
  const topLine = useRef(null);
  const midLine = useRef(null);
  const bottomLine = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuAnimation = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ paused: true });

    // Top line
    tl.to(topLine.current, {
      attr: {
        x1: 12,
        y1: 12,
        x2: 28,
        y2: 28,
      },
      duration: 0.3,
    })
      .to(
        bottomLine.current,
        {
          attr: {
            x1: 12,
            y1: 28,
            x2: 28,
            y2: 12,
          },
          duration: 0.3,
        },
        "<",
      )
      .to(
        midLine.current,
        {
          opacity: 0,
          duration: 0.2,
        },
        "<",
      );

    menuAnimation.current = tl;
  });
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);

    if (!menuOpen) {
      menuAnimation.current?.play();
    } else {
      menuAnimation.current?.reverse();
    }
  };

  useEffect(() => {
    if (!navContainerRef.current) return;

    const isNavbarShowUp =
      currentScrolled === 0 || currentScrolled < lastScrolledRef.current;
    if (currentScrolled === 0) {
      navContainerRef.current.classList.remove("floating-nav");
    } else if (isNavbarShowUp) {
      navContainerRef.current.classList.add("floating-nav");
    } else {
      navContainerRef.current.classList.remove("floating-nav");
    }
    gsap.to(navContainerRef.current, {
      y: isNavbarShowUp ? 0 : -100,
      opacity: isNavbarShowUp ? 1 : 0,
      duration: 0.5,
      ease: "power2.out",
    });
    lastScrolledRef.current = currentScrolled;
  }, [currentScrolled]);
  useGSAP(() => {
    gsap.from(navContainerRef.current, {
      y: -50,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    });
  });
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(logoRef.current, {
      y: -30,
      opacity: 0,
      duration: 0.6,
    })
      .from(
        menuRef.current,
        {
          y: -30,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.3",
      )
      .from(buttonRef.current, {
        y: -30,
        opacity: 0,
        duration: 0.6,
      })
      .from(
        menuBtnRef.current,
        {
          y: -30,
          opacity: 0,
          duration: 0.7,
        },
        "-=0.3",
      );
  });
  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-2 z-70 h-15 border-none mx-3 sm:mx-6 md:mx-9"
    >
      <header
        ref={navRef}
        className={`w-full transition-all duration-300 rounded-full py-2 sm:py-3 px-2 sm:px-4 ${currentScrolled > 0 ? "bg-black/60 backdrop-blur-md " : ""}`}
      >
        <nav className="flex sm:justify-between items-center gap-21 sm:gap-3">
          <div
            ref={logoRef}
            className={`ml-1 sm:ml-4 leading-4 transition-all duration-300 ${currentScrolled > 0 ? "text-white" : ""}`}
          >
            <span className="merriweather font-bold text-[15px] sm:text-[22px]">
              Chetra
            </span>
            <br />{" "}
            <span className="text-[10px] sm:text-sm ml-6 sm:ml-10 roboto-condensed">
              Portfolio
            </span>
          </div>
          <div
            ref={menuRef}
            className="hidden md:flex roboto-condensed items-center gap-11 me-6"
          >
            {navSection.map((item) => (
              <div
               
                key={item}
                className={`menu-item cursor-pointer transition-all duration-300 ease-out relative px-2 py-1 rounded-full hover:-translate-y-0.5 hover:text-black active:scale-95 ${currentScrolled > 0 ? "text-white hover:text-white" : "text-black"}`}
              >
                 <a href={`#${item.toLowerCase()}`}>
      {item}
    </a>

                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="0 0 100 40"
                  preserveAspectRatio="none"
                >
                  <rect
                    x="1"
                    y="1"
                    width="98"
                    height="38"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="menu-border"
                  />
                </svg>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <div ref={buttonRef}>
              <button
                className={`border px-3 sm:px-4 py-1.5 sm:py-2 rounded-full roboto-condensed flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base whitespace-nowrap transition-all duration-300 ease-out hover:-translate-y-0.5 active:scale-95 active:translate-y-0 ${currentScrolled > 0 ? "border-white text-white bg-black/60 backdrop-blur-md hover:bg-white hover:text-black hover:border-white" : "border-black text-black bg-transparent hover:bg-black hover:text-white hover:border-black"}`}
              >
                <FiMail /> Contact Me
              </button>
            </div>
            <div ref={menuBtnRef} className="lg:hidden md:hidden ">
              <button
                className={`cursor-pointer ${currentScrolled > 0 ? "text-white" : ""}`}
                onClick={toggleMenu}
              >
                <svg width="33" height="33" viewBox="0 0 40 40">
                  <line
                    ref={topLine}
                    x1="10"
                    y1="12"
                    x2="30"
                    y2="12"
                    stroke="currentColor"
                    strokeWidth="2"
                  />

                  <line
                    ref={midLine}
                    x1="10"
                    y1="20"
                    x2="30"
                    y2="20"
                    stroke="currentColor"
                    strokeWidth="2"
                  />

                  <line
                    ref={bottomLine}
                    x1="10"
                    y1="28"
                    x2="30"
                    y2="28"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>
      <nav
        className={`absolute md:hidden lg:hidden bg-black/60 backdrop-blur-md mt-2 py-5 w-30 rounded-2xl transition-all duration-700 ${menuOpen ? "right-0" : "-right-200"}`}
      >
        <div className="flex flex-col items-center">
          {navSection.map((item) => (
            <div
              onClick={() => {
                
                setMenuOpen(false);
                menuAnimation.current?.reverse();
              }}
              key={item}
              className={`menu-item text-white  mt-3 mb-3 cursor-pointer transition-all duration-300 ease-out relative px-2  rounded-full hover:-translate-y-0.5  active:scale-95 text-[10px]`}
            >
              <a href={`#${item.toLowerCase()}`}>{item}</a>

              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 100 40"
                preserveAspectRatio="none"
              >
                <rect
                  x="1"
                  y="1"
                  width="98"
                  height="38"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="menu-border"
                />
              </svg>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
