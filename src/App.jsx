import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "remixicon/fonts/remixicon.css";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Projects from "./pages/Projects";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

function Home() {
  let [showContent, setShowContent] = useState(false);
  const [showThirdIntro, setShowThirdIntro] = useState(true);
  const secondSectionRef = useRef(null);
  const thirdSectionRef = useRef(null);
  const location = useLocation();

  useGSAP(() => {
    // Only run intro animation on home page
    if (location.pathname !== "/") return;

    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg")?.remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  }, [location.pathname]);

  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    });

    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".character", {
      scale: 1.4,
      x: "-50%",
      bottom: "-25%",
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
      });
    });
  }, [showContent]);

  // Third landing section intro animation
  useGSAP(() => {
    if (!showThirdIntro) return;
    gsap.set(".third-vi-mask-group", {
      scale: 1,
      rotate: 0,
      transformOrigin: "50% 50%",
    });
    const tl = gsap.timeline();
    tl.to(".third-vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".third-vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".third-svg")?.remove();
          setShowThirdIntro(false);
          this.kill();
        }
      },
    });
  }, [showThirdIntro]);

  // Zoom effect for "Still Running, Not Hunting" in second landing section
  useGSAP(() => {
    if (!showContent) return;

    gsap.fromTo(
      ".zoom-text",
      {
        scale: 1,
        opacity: 1,
        y: 0,
      },
      {
        scale: 2,
        opacity: 0,
        y: -50,
        ease: "power2.out",
        scrollTrigger: {
          trigger: secondSectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      }
    );
  }, [showContent]);

  // Animation for person.png in third landing section
  useGSAP(() => {
    if (!showContent) return;

    gsap.fromTo(
      ".person-character",
      {
        scale: 0.8,
        bottom: "-30%",
        opacity: 0,
      },
      {
        scale: 1,
        bottom: "7vh",
        opacity: 1,
        duration: 1.5,
        ease: "Expo.easeInOut",
        scrollTrigger: {
          trigger: thirdSectionRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: 0.5,
          toggleActions: "play none none reverse",
        },
      }
    );
  }, [showContent]);

  return (
    <>
      {/* Navbar always renders, regardless of route */}
      <div className="navbar absolute top-0 left-0 z-[10] w-full py-10 px-10">
        <div className="logo flex gap-7 justify-between items-center">
          <div className="flex gap-7">
            <div className="lines flex flex-col gap-[5px]">
              <div className="line w-15 h-2 bg-white"></div>
              <div className="line w-8 h-2 bg-white"></div>
              <div className="line w-5 h-2 bg-white"></div>
            </div>
            <h3 className="text-4xl -mt-[8px] leading-none text-white">
              its ME
            </h3>
          </div>
          <nav className="flex gap-8">
            <Link to="/" className="text-white hover:text-yellow-500 transition-colors duration-300">Home</Link>
            <Link to="/projects" className="text-white hover:text-yellow-500 transition-colors duration-300">Projects</Link>
          </nav>
        </div>
      </div>

      {/* Show intro animation only on home page */}
      {location.pathname === "/" && (
        <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
          <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
            <defs>
              <mask id="viMask">
                <rect width="100%" height="100%" fill="black" />
                <g className="vi-mask-group">
                  <text
                    x="50%"
                    y="50%"
                    fontSize="100"
                    textAnchor="middle"
                    fill="white"
                    dominantBaseline="middle"
                    fontFamily="Arial Black"
                  >
                    BRO
                  </text>
                </g>
              </mask>
            </defs>
            <image
              href="./20250510_1540_Serene Sunset Glow_simple_compose_01jtwtrvkff899124k295zvqqs.png"
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid slice"
              mask="url(#viMask)"
            />
          </svg>
        </div>
      )}

      {location.pathname === "/" && showContent && (
        <div className="main w-full rotate-[-10deg] scale-[1.7] overflow-hidden">
          <div className="landing overflow-hidden relative w-full h-screen bg-black">
            <div className="imagesdiv relative overflow-hidden w-full h-screen">
              <img
                className="absolute sky scale-[1.5] rotate-[-20deg] top-0 left-0 w-full h-full object-cover"
                src="./sky.png"
                alt=""
              />
              <div className="text text-white flex flex-col gap-3 absolute top-20 left-1/2 -translate-x-1/2 scale-[1.4] rotate-[-10deg] md:scale-[1.4] scale-[0.8]">
                <h1 className="text-[12rem] leading-none ml-0 md:text-[12rem] text-[6rem]">I</h1>
                <h1 className="text-[12rem] leading-none ml-20 md:text-[12rem] text-[6rem] md:ml-20 ml-10">AM</h1>
                <h1 className="text-[12rem] leading-none ml-40 md:text-[12rem] text-[6rem] md:ml-40 ml-20">ANANDAM</h1>
              </div>
              <img
                className="absolute character -bottom-[150%] left-1/2 -translate-x-1/2 scale-[3] rotate-[-20deg]"
                src="./girlbg.png"
                alt=""
              />
            </div>
            <div className="btmbar text-white absolute bottom-0 left-0 w-full py-15 px-10 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-4 items-center">
                <i className="text-4xl ri-arrow-down-line"></i>
                <h3 className="text-xl font-[Helvetica_Now_Display]">
                  Scroll Down
                </h3>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-bold tracking-widest text-center select-none">
                <img src="./ps5.png" alt="ps5" className="mx-auto mt-4 h-[55px]" />
              </div>
            </div>
          </div>
          <div className="w-full h-screen flex items-center justify-center bg-black" ref={secondSectionRef}>
            <div className="cntnr flex text-white w-full h-[80%]">
              <div className="limg relative w-1/2 h-full">
                <img
                  className="absolute scale-[1.3] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  src="./imag.png"
                  alt=""
                />
              </div>
              <div className="rg w-[30%] py-30">
                <h1 className="zoom-text">
                  Still Running,<br />Not Hunting
                </h1>
                <p className="text-xl font-[Helvetica_Now_Display] leading-relaxed mt-16">
                  I am vibe coder and Just doing some editing stuff.
                  <br />
                  Perfection is impossible just strive to do ur best 🤍
                </p>
                <a
                  href="https://bento.me/anandam?fbclid=PAZXh0bgNhZW0CMTEAAaePYciWx8rpccp0KMbNBOZ9RFm70fphgLi-p524JeK3aNRB57zDoFW7MEmFnA_aem__AULZPbXyJv-29HDT843Pg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-yellow-500 px-10 py-10 text-black mt-20 text-4xl hover:bg-yellow-400 transition-colors duration-300">
                    EXPLORE
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="landing w-full h-screen bg-black flex items-center justify-center relative" ref={thirdSectionRef}>
            <div className="hero w-full h-screen flex items-center justify-center text-center relative overflow-hidden z-20">
              {/* Empty for now */}
            </div>
            <img
              src="/rtee2.png"
              alt="Background"
              className="absolute top-0 left-0 w-full h-full object-contain z-0"
              style={{ background: 'black' }}
            />
            <img
              src="/person.png"
              alt="Person"
              className="absolute z-10 person-character"
            />
          </div>
        </div>
      )}
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}

export default App;
