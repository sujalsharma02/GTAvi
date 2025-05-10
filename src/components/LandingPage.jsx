import React, { useRef } from "react";
import useMouseParallax from "../hooks/useMouseParallax";
import HeroText from "./HeroText";
import CharacterSection from "./CharacterSection";
import BottomBar from "./BottomBar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const LandingPage = () => {
  const mainRef = useRef();
  useMouseParallax(mainRef);

  useGSAP(() => {
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
  }, []);

  return (
    <div className="main w-full rotate-[-10deg] scale-[1.7]" ref={mainRef}>
      <div className="landing overflow-hidden relative w-full h-screen bg-black">
        <div className="navbar absolute top-0 left-0 z-[10] w-full py-10 px-10">
          <div className="logo flex gap-7">
            <div className="lines flex flex-col gap-[5px]">
              <div className="line w-15 h-2 bg-white"></div>
              <div className="line w-8 h-2 bg-white"></div>
              <div className="line w-5 h-2 bg-white"></div>
            </div>
            <h3 className="text-4xl -mt-[8px] leading-none text-white">
              Rockstar
            </h3>
          </div>
        </div>

        <div className="imagesdiv relative overflow-hidden w-full h-screen">
          <img
            className="absolute sky scale-[1.5] rotate-[-20deg] top-0 left-0 w-full h-full object-cover"
            src="./sky.png"
            alt=""
          />
          <img
            className="absolute scale-[1.8] rotate-[-3deg] bg top-0 left-0 w-full h-full object-cover"
            src="./bg.png"
            alt=""
          />
          <HeroText />
          <img
            className="absolute character -bottom-[150%] left-1/2 -translate-x-1/2  scale-[3] rotate-[-20deg]"
            src="./girlbg.png"
            alt=""
          />
        </div>
        <BottomBar />
      </div>
      <CharacterSection />
    </div>
  );
};

export default LandingPage;
