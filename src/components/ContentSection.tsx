import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@styles/ContentSection.css";
interface ContentSectionProps {
  id: string;
  sectionName?: string;
  sectionDescription?: string;
  children: React.ReactNode;
}

const ContentSection = ({ id, sectionName, sectionDescription, children }: ContentSectionProps) => {
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
        duration: 1.5
      }
    );
  });

  return (
    <section className="content" id={id} ref={contentRef} sectionDescription={sectionDescription}>
      {sectionName ? <h2 className="content-title">{sectionName}</h2> : null}
      {sectionDescription ? <p className="content-description">{sectionDescription}</p> : null}
      {children}
    </section>
  );
};

export default ContentSection;
