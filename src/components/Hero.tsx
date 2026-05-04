import "@styles/Hero.css";
import CloudHolder from "./CloudHolder";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import {
  asteriskAnimations,
  type AsteriskAnimationName,
} from "@src/animations/asteriskAnimations";

interface HeroProps {
  asteriskAnimation?: AsteriskAnimationName;
}

const TICKER_ITEMS = [
  "Design", "✦", "Motion", "✦", "Illustration", "✦",
  "Photography", "✦", "Video", "✦", "Creative Direction", "✦",
  "Design", "✦", "Motion", "✦", "Illustration", "✦",
  "Photography", "✦", "Video", "✦", "Creative Direction", "✦",
];

const Hero = ({ asteriskAnimation = "warmBreath" }: HeroProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(useGSAP);
  }, []);

  useGSAP(
    () => {
      // Run the chosen asterisk animation
      asteriskAnimations[asteriskAnimation](".gray-flower");

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
            <svg
              className="gray-flower"
              viewBox="0 0 234 244"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M94.0267 241.129L97.8585 153.763L25.353 201.178L2.86138 162.188L79.1988 122.237L2.85425 82.7735L25.3459 42.822L97.8514 90.237L94.0196 2.87781L139.488 2.87781L135.656 90.237L208.162 42.822L231.131 82.7735L154.316 122.244L231.131 162.195L208.162 201.185L135.656 153.77L139.488 241.137H94.0196L94.0267 241.129Z"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
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
