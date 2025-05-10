import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function useIntroAnimation(setShowContent) {
    useGSAP(() => {
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
            onComplete: function () {
                setShowContent(true); // Let React handle DOM unmounting
            },
        });
    }, []);
}