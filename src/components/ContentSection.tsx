import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ContentSectionProps {
  sectionName?: string;
  children: React.ReactNode;
}

const ContentSection = ({ sectionName, children }: ContentSectionProps) => {
  const contentRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(useGSAP, ScrollTrigger);
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      ".content",
      {
        scrollTrigger: ".content",
        y: 0,
        opacity: 0,
        ease: "power2.inOut",
      },
      {
        scrollTrigger: ".content",
        y: -80,
        opacity: 1,
        duration: 2,
        scrub: 1,
      }
    );
  });

  return (
    <section className="content" ref={contentRef}>
      {sectionName ? <h2>{sectionName}</h2> : null}
      {children}
    </section>
  );
};

export default ContentSection;
