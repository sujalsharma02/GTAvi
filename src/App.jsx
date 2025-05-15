import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap"

import "remixicon/fonts/remixicon.css";

function App() {
  const [showContent, setShowContent] = useState(false);

  // Initial mask animation
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "power4.inOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "expo.inOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onComplete: () => {
        setShowContent(true);
      },
    });
  }, []);

  // Animation after mask transition
  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      ease: "expo.inOut",
    });

    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: 0.2,
      ease: "expo.inOut",
    });

    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: 0.2,
      ease: "expo.inOut",
    });

    gsap.to(".character", {
      scale: 1.4,
      x: "-50%",
      bottom: "-25%",
      rotate: 0,
      duration: 2,
      delay: 0.2,
      ease: "expo.inOut",
    });

    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: 0.2,
      ease: "expo.inOut",
    });

    const main = document.querySelector(".main");

    const handleMouseMove = (e) => {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`,
        duration: 0.5,
      });
      gsap.to(".sky", {
        x: xMove,
        duration: 0.5,
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
        duration: 0.5,
      });
    };

    main?.addEventListener("mousemove", handleMouseMove);

    return () => {
      main?.removeEventListener("mousemove", handleMouseMove);
    };
  }, [showContent]);

  return (
    <>
      {/* SVG Mask Intro */}
      {!showContent && (
        <div className="svg fixed top-0 left-0 z-[100] w-full h-screen flex items-center justify-center overflow-hidden bg-black">
          <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
            <defs>
              <mask id="viMask">
                <rect width="100%" height="100%" fill="black" />
                <g className="vi-mask-group">
                  <text
                    x="50%"
                    y="50%"
                    fontSize="250"
                    textAnchor="middle"
                    fill="white"
                    dominantBaseline="middle"
                    fontFamily="Arial Black"
                  >
                    VI
                  </text>
                </g>
              </mask>
            </defs>
            <image
              href="./bg.png"
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid slice"
              mask="url(#viMask)"
            />
          </svg>
        </div>
      )}

      {/* Main Content */}
      {showContent && (
        <div className="main w-full rotate-[-10deg] scale-[1.7]">
          <div className="landing relative w-full h-screen bg-black overflow-hidden">
            {/* Navbar */}
            <div className="navbar absolute top-0 left-0 z-10 w-full py-7 px-10">
              <div className="logo flex gap-3">
                <div className="lines flex flex-col gap-[3px]">
                  <div className="line w-9 h-1 bg-white"></div>
                  <div className="line w-6 h-1 bg-white"></div>
                  <div className="line w-3 h-1 bg-white"></div>
                </div>
                <h3 className="text-xl -mt-[5px] leading-none text-white">
                  Rockstar
                </h3>
              </div>
            </div>

            {/* Background Images */}
            <div className="imagesdiv relative w-full h-screen overflow-hidden">
              <img
                className="absolute sky scale-[1.0] rotate-[-20deg] top-0 left-0 w-full h-full object-cover"
                src="./sky.png"
                alt="Sky"
              />
              <img
                className="absolute bg scale-[1.1] rotate-[-3deg] top-0 left-0 w-full h-full object-cover"
                src="./bg.png"
                alt="Background"
              />

              {/* Title Text */}
              <div className="text text-white flex flex-col gap-3 absolute top-7 left-1/2 -translate-x-1/2 scale-[0.25] rotate-[-10deg]">
                <h1 className="text-[6rem] leading-none -ml-20">grand</h1>
                <h1 className="text-[6rem] leading-none ml-15">theft</h1>
                <h1 className="text-[6rem] leading-none -ml-20">auto</h1>
              </div>

              {/* Character Image */}
             <img
          className="absolute character -bottom-[150%] left-[50%]  w-[25vw] object-contain rotate-[-10deg]"
            src="./girlbg.png"
            alt="Character"
             />

            </div>

            {/* Bottom Bar */}
            <div className="btmbar text-white absolute bottom-0 left-0 w-full py-6 px-4 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-3 items-center">
                <i className="text-lg ri-arrow-down-line"></i>
                <h3 className="text-sm font-[Helvetica_Now_Display]">
                  Scroll Down
                </h3>
              </div>
              <img
                className="absolute h-[25px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                src="./ps5.png"
                alt="PS5"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full h-screen flex items-center justify-center bg-black">
            <div className="cntnr flex text-white w-full h-[80%]">
              <div className="limg relative w-1/2 h-full">
                <img
                  className="absolute scale-[1.3] top-1/2 left-1/2 w-[27vw] -translate-x-1/2 -translate-y-1/2"
                  src="./imag.png"
                  alt="Content"
                />
              </div>
              <div className="rg w-[30%] py-20">
                <h1 className="text-5xl">Still Running,</h1>
                <h1 className="text-5xl">Not Hunting</h1>
                <p className="mt-3 text-sm font-[Helvetica_Now_Display]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio possimus, asperiores nam omnis inventore.
                </p>
                <p className="mt-3 text-sm font-[Helvetica_Now_Display]">
                  At eius illum fugit eligendi nesciunt quia similique velit
                  excepturi soluta tenetur illo repellat consectetur laborum.
                </p>
                <p className="mt-3 text-sm font-[Helvetica_Now_Display]">
                  Cupiditate ipsa nostrum autem sapiente, dicta eaque repellat
                  tenetur!
                </p>
                <button className="bg-yellow-500 px-5 py-4 text-black mt-5 text-xl">
                  Download Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;