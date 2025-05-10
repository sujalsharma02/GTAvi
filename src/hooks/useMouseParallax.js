import { useEffect } from "react";
import gsap from "gsap";

export default function useMouseParallax(ref) {
    useEffect(() => {
        if (!ref.current) return;
        const handleMouseMove = (e) => {
            const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
            gsap.to(".main .text", { x: `${xMove * 0.4}%` });
            gsap.to(".sky", { x: xMove });
            gsap.to(".bg", { x: xMove * 1.7 });
        };
        ref.current.addEventListener("mousemove", handleMouseMove);
        return () => {
            if (ref.current) {
                ref.current.removeEventListener("mousemove", handleMouseMove);
            }
        };
    }, [ref]);
}
