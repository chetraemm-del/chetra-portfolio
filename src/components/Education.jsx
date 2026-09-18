import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Education() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "bottom 25%",
          toggleActions: "play reverse play reverse",
        },
      });

      tl.from(".education-header", {
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      })
        .from(
          ".education-card",
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4",
        )
        .from(".education-title", {
  y: 30,
  opacity: 0,
  duration: 0.5,
  ease: "power2.out",
})
.from(
  ".education-item",
  {
    y: 30,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
    ease: "power2.out",
  },
  "-=0.2"
)
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="bg-black min-h-screen pt-24">
      <div className="lg:mx-16.5 md:mx-12 sm:mx-10 mx-7">
        <div className="education-header mb-8">
          <h1 className="mb-2 font-semibold momo-trust-display-regular text-[10px] sm:text-[13px] text-white">
            Where I’m building my foundation.
          </h1>

          <p className="momo-trust-display-regular text-[7px] sm:text-[10px] text-gray-600 leading-relaxed max-w-2xl">
            My academic journey has helped me develop a strong foundation in
            technology, problem solving, and software development. I continue to
            expand my knowledge through university studies and hands-on
            projects.
          </p>
        </div>

        <div className="education-card w-full bg-white/90 rounded-2xl p-7 sm:p-10 md:p-12 lg:p-14">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
             <h1 className="education-title text-xl md:text-2xl font-bold bungee-tint-regular mb-8">
  Education
</h1>

              <div className="relative">
                <div className="absolute left-[5px] top-2 bottom-2 w-[2px] bg-gray-400"></div>

                <div className="education-item relative pl-8 mb-10">
                  <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-black"></div>

                  <h2 className="momo-trust-display-regular font-semibold text-[13px] sm:text-[15px] md:text-[16px]">
                    Royal University of Phnom Penh (RUPP)
                  </h2>

                  <p className="text-gray-700 text-[9px] sm:text-[11px] md:text-[13px] mt-1">
                    Information Technology
                  </p>

                  <p className="text-gray-500 text-[8px] sm:text-[10px] md:text-[12px] mt-1">
                    2025 – Present
                  </p>
                </div>

                <div className="education-item relative pl-8">
                  <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-black"></div>

                  <h2 className="momo-trust-display-regular font-semibold text-[13px] sm:text-[15px] md:text-[16px]">
                    Master IT School
                  </h2>

                  <p className="text-gray-700 text-[9px] sm:text-[11px] md:text-[13px] mt-1">
                    Modern Full Stack Web Developer
                  </p>

                  <p className="text-gray-500 text-[8px] sm:text-[10px] md:text-[12px] mt-1">
                    2025 – 2026
                  </p>
                </div>
              </div>
            </div>

            <div className="certification">
              <h1 className="text-xl md:text-2xl font-bold bungee-tint-regular mb-8">
                Certification
              </h1>

              <div className="group">
                <div className="bg-white border-gray-600 border-2 rounded-xl p-3 overflow-hidden">
                  <img
                    className="w-full h-40 sm:h-52 md:h-60 lg:h-64 object-cover rounded-lg transition-transform duration-500 group-hover:scale-[1.02]"
                    src="https://tse1.mm.bing.net/th/id/OIP.ExW3AwwO-qJV1um98HGxGgHaE8?r=0&pid=Api&h=220&P=0"
                    alt="Certificate"
                  />
                </div>

                <div className="mt-4">
                  <h2 className="momo-trust-display-regular font-semibold text-[12px] sm:text-[14px]">
                    Full Stack Web Development
                  </h2>

                  <p className="text-gray-600 text-[9px] sm:text-[11px] mt-1">
                    Master IT School · 2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
       <div className="flex justify-end mt-30">
         <div className="education-header mb-8 ">
          <h1 className="mb-2 font-semibold momo-trust-display-regular text-[10px] sm:text-[13px] text-white">
            Learning today, building tomorrow.
          </h1>

          <p className="momo-trust-display-regular text-[7px] sm:text-[10px] text-gray-600 leading-relaxed max-w-2xl">
            A dream is not what you see in your sleep; it is what doesn’t let you sleep.
          </p>
        </div>
       </div>
      </div>
    </section>
  );
}

export default Education;
