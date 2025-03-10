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
  centered?: boolean;
}

const ContentSection = ({
  id,
  sectionName,
  sectionDescription,
  children,
  centered = false,
}: ContentSectionProps) => {
  const contentRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(useGSAP, ScrollTrigger);
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      "#work",
      {
        scrollTrigger: "#work",
        y: 0,
        opacity: 0,
        ease: "power2.inOut",
      },
      {
        scrollTrigger: "#work",
        y: -80,
        opacity: 1,
        duration: 1.25,
      }
    );
    gsap.fromTo(
      "#connect",
      {
        scrollTrigger: "#connect",
        y: 0,
        opacity: 0,
        ease: "power2.inOut",
      },
      {
        scrollTrigger: "#connect",
        y: -80,
        opacity: 1,
        duration: 1.25,
      }
    );
  });

  return (
    <section
      className={`content ${centered ? "centered" : ""}`}
      id={id}
      ref={contentRef}
    >
      {sectionName ? <h2 className="content-title">{sectionName}</h2> : null}
      {sectionDescription ? (
        <p className="content-description">{sectionDescription}</p>
      ) : null}
      {children}
    </section>
  );
};

export default ContentSection;
