import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  FiArrowUpRight,
  FiMail,
  FiMessageCircle,
} from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const contactRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 75%",
          toggleActions: "play reverse play reverse",
        },
      });

      tl.from(".contact-header", {
        y: 30,
        opacity: 0,
        duration: 0.65,
        ease: "power3.out",
      })
        .from(
          ".contact-form",
          {
            y: 35,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .from(
          ".contact-input",
          {
            y: 15,
            opacity: 0,
            duration: 0.45,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.25"
        )
        .from(
          ".contact-button",
          {
            y: 12,
            opacity: 0,
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.15"
        );
    },
    { scope: contactRef }
  );

  return (
    <section
      ref={contactRef}
      id="contact"
      className="bg-white px-0 py-8 sm:py-12"
    >
      <div className="relative mx-3 overflow-hidden rounded-2xl bg-[#080808] text-white sm:mx-6 md:mx-10 md:rounded-3xl">
    
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-32 h-72 w-72 rounded-full bg-red-600/[0.08] blur-3xl"
        />

        <div className="relative mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14 md:px-12 md:py-16 lg:px-16">
      
          <div className="contact-header mb-8 md:mb-10">
            <div className="mb-5 flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
              <p className="momo-trust-display-regular text-[9px] font-medium tracking-[0.22em] text-white/50 sm:text-[10px]">
                LET'S TALK
              </p>
            </div>

            <h2 className="bungee-tint-regular text-2xl leading-tight text-red-500 sm:text-3xl md:text-4xl">
              Contact Me
            </h2>

            <p className="momo-trust-display-regular mt-4 max-w-xl text-[9px] leading-6 text-white/55 sm:text-xs sm:leading-7 md:text-sm">
              Have a project in mind or just want to say hello?
              Feel free to send me a message. I'd love to hear from you.
            </p>
          </div>

       
          <div className="contact-form rounded-2xl border border-white/[0.12] bg-white/[0.025] p-5 transition-colors duration-300 hover:border-white/[0.2] sm:p-7 md:p-8">
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
            >
              <input
                type="hidden"
                name="access_key"
                value="4aaa619d-8a4a-4c83-94a0-92b093d22655"
              />

              <div className="grid gap-7 md:grid-cols-2 md:gap-8">
                {/* Name */}
                <div className="contact-input">
                  <label
                    htmlFor="contact-name"
                    className="momo-trust-display-regular mb-2.5 block text-[10px] font-semibold tracking-[0.12em] text-white/65 sm:text-[11px]"
                  >
                    NAME
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    name="name"placeholder="Enter your name"
                    autoComplete="name"
                    required
                    className="w-full border-b border-white/15 bg-transparent py-3 text-xs text-white outline-none transition-all duration-300 placeholder:text-white/30 hover:border-white/30 focus:border-red-500 focus:ring-0 sm:text-sm"
                  />
                </div>

            
                <div className="contact-input">
                  <label
                    htmlFor="contact-email"
                    className="momo-trust-display-regular mb-2.5 block text-[10px] font-semibold tracking-[0.12em] text-white/65 sm:text-[11px]"
                  >
                    EMAIL
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    autoComplete="email"
                    required
                    className="w-full border-b border-white/15 bg-transparent py-3 text-xs text-white outline-none transition-all duration-300 placeholder:text-white/30 hover:border-white/30 focus:border-red-500 focus:ring-0 sm:text-sm"
                  />
                </div>
              </div>

          
              <div className="contact-input mt-8 sm:mt-10">
                <label
                  htmlFor="contact-message"
                  className="momo-trust-display-regular mb-2.5 block text-[10px] font-semibold tracking-[0.12em] text-white/65 sm:text-[11px]"
                >
                  MESSAGE
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell me a little about your idea..."
                  rows={4}
                  required
                  className="w-full resize-y border-b border-white/15 bg-transparent py-3 text-xs leading-6 text-white outline-none transition-all duration-300 placeholder:text-white/30 hover:border-white/30 focus:border-red-500 focus:ring-0 sm:text-sm sm:leading-7"
                />
              </div>

       
              <div className="contact-button mt-7 sm:mt-8">
                <button
                  type="submit"
                  className="group flex w-full items-center justify-between rounded-full border border-white bg-white px-5 py-3.5 text-xs font-semibold text-black transition-all duration-300 hover:border-red-500 hover:bg-red-500 hover:text-white active:scale-[0.99] sm:px-6 sm:py-4 sm:text-sm"
                >
                  <span className="flex items-center gap-2.5">
                    <FiMail
                      size={16}
                      className="transition-transform duration-300 group-hover:-rotate-6"
                    />
                    Send Message
                  </span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black/[0.06] transition-all duration-300 group-hover:translate-x-0.5 group-hover:bg-white/15">
                    <FiArrowUpRight
                      size={18}
                      className="transition-transform duration-300 group-hover:rotate-45"
                    />
                  </span>
                </button>

                <p className="momo-trust-display-regular mt-4 text-center text-[9px] text-white/35 sm:text-[10px]">
                  Usually happy to hear about new ideas and projects.
                </p>
              </div>
            </form>
          </div>

     
          <div className="mt-6 flex items-center gap-2 text-white/35">
            <FiMessageCircle size={13} />
            <p className="momo-trust-display-regular text-[9px] tracking-wide sm:text-[10px]">
              Have something in mind? Let's make it happen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;