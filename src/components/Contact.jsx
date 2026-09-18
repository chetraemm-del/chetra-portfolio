import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const contactRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 75%",
          end: "bottom 25%",
          toggleActions: "play reverse play reverse",
        },
      });

      tl.from(".contact-header", {
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      })
        .from(
          ".contact-form",
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          ".contact-input",
          {
            y: 25,
            opacity: 0,
            duration: 0.5,
            stagger: 0.15,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .from(
          ".contact-button",
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.2"
        );
    },
    { scope: contactRef }
  );

  return (
    <section
      ref={contactRef}
      id="contact"
      className="bg-white min-h-screen py-10 mb-20"
    >
      <div className="bg-black mx-5 sm:mx-7 md:mx-10 min-h-[90vh] rounded-2xl px-7 sm:px-10 md:px-14 lg:px-20 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto">

          <div className="contact-header mb-12">
            <p className="text-gray-500 momo-trust-display-regular text-[8px] sm:text-[10px] mb-3">
              LET'S TALK
            </p>

            <h1 className="text-white lg:text-3xl md:text-2xl sm:text-xl text-lg font-bold bungee-tint-regular mt-10">
              Contact me
            </h1>

            <p className="text-gray-500 momo-trust-display-regular text-[9px] sm:text-[11px] md:text-[12px] max-w-lg mt-4 leading-relaxed">
              Have a project in mind or just want to say hello?
              Feel free to send me a message. I’d love to hear from you.
            </p>
          </div>

          <div className="contact-form border border-gray-500 pl-5 pr-5 sm:pl-7 sm:pr-7 py-5 rounded-2xl">
            <form
              className="max-w-4xl"
              action="https://api.web3forms.com/submit"
              method="POST"
            >
              <input
                type="hidden"
                name="access_key"
                value="4aaa619d-8a4a-4c83-94a0-92b093d22655"
              />

              <div className="grid md:grid-cols-2 gap-8">
                <div className="contact-input">
                  <label className="block text-gray-500 text-[9px] sm:text-[11px] mb-3 momo-trust-display-regular">
                    NAME
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                    className="w-full bg-transparent border-b border-gray-700 text-white placeholder:text-gray-600 outline-none py-3 text-[10px] sm:text-[12px] focus:border-white transition-colors duration-300"
                  />
                </div>

                <div className="contact-input">
                  <label className="block text-gray-500 text-[9px] sm:text-[11px] mb-3 momo-trust-display-regular">
                    EMAIL
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    className="w-full bg-transparent border-b border-gray-700 text-white placeholder:text-gray-600 outline-none py-3 text-[10px] sm:text-[12px] focus:border-white transition-colors duration-300"
                  />
                </div>
              </div>

              <div className="contact-input mt-10">
                <label className="block text-gray-500 text-[9px] sm:text-[11px] mb-3 momo-trust-display-regular">
                  MESSAGE
                </label>

                <textarea
                  name="message"
                  placeholder="Send your message here"
                  rows="5"
                  required
                  className="w-full bg-transparent border-b border-gray-700 text-white placeholder:text-gray-600 outline-none py-3 text-[10px] sm:text-[12px] resize-none focus:border-white transition-colors duration-300"
                ></textarea>
              </div>

              <div className="contact-button mt-10 md:me-0 me-5">
                <button
                  type="submit"
                  className="group flex items-center justify-center gap-4 bg-white text-black px-6 py-3 rounded-full text-[9px] sm:text-[11px] font-semibold border hover:bg-black hover:text-white hover:border-white cursor-pointer transition-all duration-300 w-full active:scale-95"
                >
                  Send Message

                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

