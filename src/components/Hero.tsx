import "@styles/Hero.css";
import CloudHolder from "./CloudHolder";
//import HeroDots from './HeroDots'
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useEffect } from "react";

const Hero = ({ ref }: { ref: React.RefObject<HTMLDivElement | null> }) => {
  useEffect(() => {
    gsap.registerPlugin(useGSAP);
  }, []);

  useGSAP(
    () => {
      gsap.fromTo(
        [".hero-content", ".hero-image"],
        { opacity: 0, y: 200 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power2.inOut" }
      );
    },
    { scope: ref }
  );

  return (
    <section className="hero" ref={ref}>
      {/* <HeroDots /> */}
      <div className="hero-content">
        <h1>
          <span>Selene</span>
          <span>Fernández</span>
        </h1>
        <p>
          Step into my creative world! Explore my diverse portfolio showcasing
          design, audiovisual production, and photography. I hope to inspire you
          and ignite your own creative journey.
        </p>
        <img
          src="/asterisk_no_fill.svg"
          alt="gray flower"
          className="gray-flower"
        />
      </div>

      {/* <div className="hero-image">
        <img src="/me-sticker.png" alt="Selene" className="hero-img" />
      </div> */}

      <CloudHolder />
    </section>
  );
};

export default Hero;
