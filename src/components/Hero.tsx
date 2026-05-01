import "@styles/Hero.css";
import CloudHolder from "./CloudHolder";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const TICKER_ITEMS = [
  "Design", "✦", "Motion", "✦", "Illustration", "✦",
  "Photography", "✦", "Video", "✦", "Creative Direction", "✦",
  "Design", "✦", "Motion", "✦", "Illustration", "✦",
  "Photography", "✦", "Video", "✦", "Creative Direction", "✦",
];

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

      // Stagger-reveal hero text
      gsap.fromTo(
        ".hero-content h1",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.1, ease: "power3.out", delay: 0.2 }
      );
      gsap.fromTo(
        ".hero-content p",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.55 }
      );
    },
    { scope: ref }
  );

  return (
    <>
      {/* Animated ticker bar */}
      <div className="accent-bar" aria-hidden="true">
        <div className="accent-bar-inner">
          {TICKER_ITEMS.map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      </div>

      <section className="hero" ref={ref}>
        <div className="hero-content">
          <h1>
            <span>Selene Fernández</span>
            <img
              src="/asterisk_no_fill.svg"
              alt="decorative asterisk"
              className="gray-flower"
            />
          </h1>
          <p>
            Step into my creative world! Explore my diverse portfolio showcasing
            design and audiovisual production. I hope to inspire you and ignite your
            own creative journey.
          </p>
        </div>

        {/* Scroll hint */}
        <div className="scroll-hint" aria-hidden="true">
          <span>Scroll</span>
          <div className="scroll-arrow" />
        </div>

        <CloudHolder />
      </section>
    </>
  );
};

export default Hero;
