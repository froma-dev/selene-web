import CloudImage from "@assets/CloudImage";
import { useGSAP } from "@gsap/react";
import "@styles/CloudHolder.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CloudHolder = () => {
  const cloudHolderRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(useGSAP);
  }, []);

  useGSAP(
    () => {
      const clouds = gsap.utils.toArray<HTMLElement>("svg");
      const glows = gsap.utils.toArray<HTMLElement>(".cloud-glow");

      // Animate clouds in
      gsap.fromTo(clouds[0],
        { y: 541 }, { y: 0, ease: "power2.inOut", duration: 1.5 }
      );
      gsap.fromTo(clouds[1],
        { y: 541 }, { y: 50, ease: "power2.inOut", duration: 1.5 }
      );
      gsap.fromTo(clouds[2],
        { y: 541 }, { y: 100, ease: "power2.inOut", duration: 1.5 }
      );

      // Animate glows in sync with their cloud
      gsap.fromTo(glows[0],
        { y: 541, opacity: 0 }, { y: 0, opacity: 0.45, ease: "power2.inOut", duration: 1.5 }
      );
      gsap.fromTo(glows[1],
        { y: 541, opacity: 0 }, { y: 50, opacity: 0.45, ease: "power2.inOut", duration: 1.5 }
      );
      gsap.fromTo(glows[2],
        { y: 541, opacity: 0 }, { y: 100, opacity: 0.45, ease: "power2.inOut", duration: 1.5 }
      );
    },
    { scope: wrapperRef }
  );

  return (
    <div ref={wrapperRef} style={{ position: "relative", gridRow: 2, width: "100%" }}>
      {/* Glow divs — outside the mask, render freely */}
      <div className="cloud-glow cloud-glow-1" />
      <div className="cloud-glow cloud-glow-2" />
      <div className="cloud-glow cloud-glow-3" />

      {/* Masked wrapper — clouds fade at the bottom */}
      <div className="cloud-holder-wrapper">
        <div className="cloud-holder" ref={cloudHolderRef}>
          <CloudImage fill="#C8FF00" />
          <CloudImage fill="#00F5D4" />
          <CloudImage fill="#FF2D78" />
        </div>
      </div>
    </div>
  );
};

export default CloudHolder;
