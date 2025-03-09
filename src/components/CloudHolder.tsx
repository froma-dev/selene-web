import CloudImage from "@assets/CloudImage";
import { useGSAP } from "@gsap/react";
import "@styles/CloudHolder.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
const CloudHolder = () => {
  const cloudHolderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(useGSAP);
  }, []);

  useGSAP(
    () => {
      const clouds = gsap.utils.toArray<HTMLElement>("svg");
      gsap.fromTo(
        clouds[0],
        { y: 541, ease: "power2.inOut", duration: 1.5 },
        { y: 0, ease: "power2.inOut", duration: 1.5 }
      );
      gsap.fromTo(
        clouds[1],
        { y: 541, ease: "power2.inOut", duration: 1.5 },
        { y: 50, ease: "power2.inOut", duration: 1.5 }
      );
      gsap.fromTo(
        clouds[2],
        { y: 541, ease: "power2.inOut", duration: 1.5 },
        { y: 100, ease: "power2.inOut", duration: 1.5 }
      );
    },
    { scope: cloudHolderRef }
  );

  return (
    <div className="cloud-holder" ref={cloudHolderRef}>
      <CloudImage fill="#8EF6E4" />
      <CloudImage fill="#E4FF92" />
      <CloudImage fill="#FFBDFF" />
    </div>
  );
};

export default CloudHolder;
