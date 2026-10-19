import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowUpRight, FiBookOpen, FiCode, FiCpu } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

// The mobile URL bar showing/hiding shouldn't re-trigger a layout refresh
ScrollTrigger.config({ ignoreMobileResize: true });

const ENJOY_ITEMS = [
  {
    icon: FiCode,
    title: "Building Projects",
    description: "Turning ideas into real applications.",
  },
  {
    icon: FiCpu,
    title: "Solving Problems",
    description: "Thinking logically and finding better solutions.",
  },
  {
    icon: FiBookOpen,
    title: "Learning & Exploring",
    description: "Discovering new tools and technologies.",
  },
];

export default function About() {
  const rootRef = useRef(null);
  const stageRef = useRef(null);
  const panelRef = useRef(null);
  const bgRef = useRef(null);
  const cardRef = useRef(null);
  const bioRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Animated + pinned only when motion is OK AND the screen is tall enough
      // for the content to fit (skips short landscape phones).
      mm.add(
        "(prefers-reduced-motion: no-preference) and (min-height: 560px)",
        () => {
          const isMobile = window.innerWidth < 768;

          gsap.set([cardRef.current, ...bioRef.current.children], {
            autoAlpha: 0,
            y: 24,
          });

          const tl = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: stageRef.current,
              start: "top top",
              end: () => "+=" + Math.round(window.innerHeight * 1.2),
              scrub: 0.6,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          tl.fromTo(
            panelRef.current,
            {
              clipPath: isMobile
                ? "inset(10% 5% 10% 5% round 20px)"
                : "inset(16% 10% 16% 10% round 28px)",
            },
            { clipPath: "inset(0% 0% 0% 0% round 0px)", duration: 1 },
            0
          )
            .fromTo(bgRef.current, { scale: 1.2 }, { scale: 1, duration: 1 }, 0)
            .to(
              cardRef.current,
              { autoAlpha: 1, y: 0, duration: 0.35, ease: "power2.out" },
              1.05
            )
            .to(
              bioRef.current.children,
              {
                autoAlpha: 1,
                y: 0,
                stagger: 0.08,
                duration: 0.3,
                ease: "power2.out",
              },
              1.15
            );
        }
      );

      // Static layout: reduced motion, or a screen too short to pin.
      // The stage simply grows to fit its content.
      mm.add("(prefers-reduced-motion: reduce), (max-height: 559px)", () => {
        gsap.set([cardRef.current, ...bioRef.current.children], {
          autoAlpha: 1,
          y: 0,
        });
        gsap.set(panelRef.current, { clipPath: "none" });
        gsap.set(bgRef.current, { scale: 1 });
      });

      return () => mm.revert();
    },
    { scope: rootRef }
  );

  return (
    <section
      ref={rootRef}
      id="about"
      className="overflow-x-clip bg-white text-[#171717]"
    >
      {/* Intro outside the expanding image */}
      <div className="mx-auto max-w-7xl px-10 pb-1 pt-20 sm:px-10 md:pb-14 md:pt-32 lg:px-30">
        <p className="momo-trust-display-regular mb-3 text-[8px] font-semibold uppercase tracking-[0.25em] text-black/50 sm:mb-4 sm:text-xs">
          A little about me
        </p>

        <div className="grid gap-4 md:grid-cols-2 md:items-end md:gap-5">
          <h2 className="max-w-xl font-['Bricolage_Grotesque'] text-2xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
            The person behind{" "}
            <span className="text-red-600">the projects.</span>
          </h2>

          <p className="momo-trust-display-regular max-w-md text-[9px] sm:text-xs leading-6 text-black/60 sm:leading-7 md:justify-self-end">
            A little about my journey, the things I enjoy, and my passion for
            building useful digital experiences.
          </p>
        </div>
      </div>

     
      <div ref={stageRef} className="relative w-full overflow-hidden">
     
        <div
          ref={panelRef}
          className="absolute inset-0 overflow-hidden bg-black"
          style={{ willChange: "clip-path" }}
        >
          <img
            ref={bgRef}
            src="/img/aboutme2.jpg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center"
            style={{ willChange: "transform" }}
          />

          <div className="absolute inset-0 bg-black/20" />
      
          <div className="absolute inset-0 bg-black/35 md:hidden" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />
        </div>

        
        <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col justify-center gap-5 px-6 py-8 sm:px-10 md:flex-row md:items-center md:gap-10 md:py-10 lg:gap-14 lg:px-16">
     
          <div
            ref={cardRef}
            className="shrink-0 md:w-[min(32%,40svh)] md:min-w-[200px]"
          >
        
            <div className="flex items-center gap-4 md:block">
              <div className="relative w-24 shrink-0 overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-1.5 shadow-2xl backdrop-blur-sm sm:w-28 md:w-full md:p-2">
                <div className="relative aspect-square overflow-hidden rounded-xl bg-black/20 md:aspect-[4/4.3]">
                  <img
                    src="/img/profile2.jpg"
                    alt="Chhum Chetra"
                    className="h-full w-full object-cover object-center"
                  />

                  <div className="absolute inset-0 hidden bg-gradient-to-t from-black/55 via-transparent to-transparent md:block" />

                  <span className="absolute left-3 top-3 hidden rounded-full bg-red-600 px-3 py-1.5 font-['Hanken_Grotesk'] text-[10px] font-bold uppercase tracking-[0.16em] text-white md:block">
                    IT Student
                  </span>

                  <div className="absolute bottom-4 left-4 right-4 hidden md:block">
                    <p className="font-['Bricolage_Grotesque'] text-2xl font-bold leading-tight text-white lg:text-3xl">
                      Chhum Chetra
                    </p>
                    <p className="mt-1 font-['Hanken_Grotesk'] text-sm text-white/75">
                      Also known as Chhuy
                    </p>
                  </div>
                </div>
              </div>

       
              <div className="min-w-0 md:hidden">
                <p className="font-['Bricolage_Grotesque'] text-2xl font-bold leading-tight text-white">
                  Chhum Chetra
                </p>
                <p className="mt-0.5 font-['Hanken_Grotesk'] text-sm text-white/75">
                  Also known as Chhuy
                </p>
                <p className="mt-1.5 font-['Hanken_Grotesk'] text-xs leading-snug text-white/65">
                  IT student, Royal University of Phnom Penh
                </p>
              </div>
            </div>

  
            <div className="mt-3 hidden items-start gap-3 rounded-xl border border-white/15 bg-black/25 p-3 backdrop-blur-sm md:flex">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-600/20 text-red-400">
                <FiBookOpen size={18} />
              </div>

              <div className="min-w-0">
                <p className="mt-0.5 font-['Bricolage_Grotesque'] text-sm font-semibold leading-snug text-white">
                  Royal University of Phnom Penh
                </p>
                <p className="mt-1 font-['Hanken_Grotesk'] text-xs text-white/65">
                  Information Technology
                </p>
              </div>
            </div>
          </div>


          <div
            ref={bioRef}
            className="min-w-0 flex-1 font-['Hanken_Grotesk'] text-white"
          >
            <p className="mb-2 hidden text-[10px] font-semibold uppercase tracking-[0.28em] text-red-400 sm:block sm:text-xs">
              Get to know me
            </p>

            <h3 className="font-['Bungee_Tint'] text-2xl leading-none sm:text-4xl lg:text-6xl">
              About Me
            </h3>

            <p className="mt-3 max-w-2xl text-[12px] leading-6 text-white/80 sm:mt-4 sm:text-base sm:leading-7">
              Hello, I’m Chhum Chetra, an Information Technology student at the
              Royal University of Phnom Penh. I’m passionate about web
              development, especially the MERN stack, and I’m exploring backend
              technologies.
              <span className="hidden sm:inline">
                {" "}
                I build projects and improve my skills through hands-on
                experience.
              </span>
            </p>

            <div className="mt-4 sm:mt-5">
              <h4 className="mb-2 text-[9px] font-bold uppercase tracking-[0.22em] text-white/60 sm:mb-3 sm:text-xs">
                What I Enjoy
              </h4>

              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {ENJOY_ITEMS.map(({ icon: Icon, title, description }) => (
                  <div
                    key={title}
                    className="group min-w-0 rounded-xl border border-white/15 bg-white/[0.07] p-2.5 transition-all duration-300 hover:border-red-400/50 hover:bg-white/[0.12] sm:rounded-2xl sm:p-4"
                  >
                    <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-red-500/15 text-red-400 transition-transform duration-300 group-hover:scale-110 sm:mb-3 sm:h-10 sm:w-10 sm:rounded-xl">
                      <Icon size={18} />
                    </div>

                    <h5 className="text-[11px] font-bold leading-snug text-white sm:text-sm">
                      {title}
                    </h5>

            
                    <p className="mt-1.5 hidden text-xs leading-relaxed text-white/60 lg:block">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 sm:mt-5">
              <a
                href="/Chhum-Chetra-CV-03.pdf"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-red-600 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:text-sm"
              >
                View My CV
                <FiArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}