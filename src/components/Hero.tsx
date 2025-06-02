import "@styles/Hero.css";
import CloudHolder from "./CloudHolder";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(useGSAP);
  }, []);

  useGSAP(
    () => {
      gsap.fromTo(
        ".gray-flower",
        { rotate: 0, x: 360, ease: "power2.inOut", duration: 1.5 },
        { rotate: -180, x: 0, ease: "power2.inOut", duration: 1.5 }
      );
    },
    { scope: ref }
  );

  return (
    <section className="hero" ref={ref}>
      <div className="hero-content">
        <h1>
          <span>Selene Fernández</span>
          <img
            src="/asterisk_no_fill.svg"
            alt="gray flower"
            className="gray-flower"
          />
        </h1>
        <p>
          Step into my creative world! Explore my diverse portfolio showcasing
          design and audiovisual production. I hope to inspire you and ignite your
          own creative journey.
        </p>
      </div>
      <CloudHolder />
    </section>
  );
};

export default Hero;
