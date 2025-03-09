import { useEffect, useRef, useState } from "react";
import "./App.css";
import "@fontsource-variable/merriweather-sans";
import "@fontsource/archivo-black";
import "@fontsource-variable/space-grotesk";
import { GridItem } from "./types/Grid";
import Grid from "@components/Grid";
import { ReactLenis, useLenis } from "lenis/react";
import Hero from "@components/Hero";
// GSAP
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { PixiPlugin } from "gsap/PixiPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import Header from "@components/Header";
import ContentSection from "@components/ContentSection";
import TagHolder from "@components/TagHolder";

// TODO
const types = ["video", "illustration", "design", "animation"];

function App() {
  const [gridItems, setGridItems] = useState<GridItem[]>([]);
  const [filteredGridItems, setFilteredGridItems] = useState<GridItem[]>([]);
  const [filter, setFilter] = useState("all");
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(useGSAP, PixiPlugin, TextPlugin);

    const fetchedGridItems = Array.from({ length: 20 }, (_, index) => ({
      id: String(index + 1),
      title: `Title ${index + 1}`,
      content: `Content ${index + 1}`,
      image: `https://picsum.photos/800/600?random=${index}`,
      link: "/vite.svg",
      type: types[Math.floor(Math.random() * 4)],
    })) as GridItem[];

    setGridItems(fetchedGridItems);
  }, []);

  useEffect(() => {
    const filteredGridItems = gridItems.filter(
      (gridItem) => filter === "all" || gridItem.type === filter
    );

    setFilteredGridItems(filteredGridItems);
  }, [gridItems, filter]);

  useGSAP(
    () => {
      // gsap code here...
      gsap.fromTo(
        ".gray-flower",
        { rotate: 0, x: 360, ease: "power2.inOut", duration: 1.5 },
        { rotate: -180, x: -220, ease: "power2.inOut", duration: 1.5 }
      );
    },
    { scope: heroRef }
  );

  const onClickHandler = (filterBy: string) => {
    if (filter === filterBy) setFilter("all");
    else setFilter(filterBy);
  };

  return (
    <ReactLenis root>
      <div className="app">
        <Header logo={{ src: "/asterisk.svg", alt: "asterisk brand logo" }} />
        <Hero ref={heroRef} />
        <ContentSection id="projects" sectionName="Projects">
          <TagHolder
            selectedTag={filter}
            tags={[
              {
                id: "video",
                icon: " ",
                name: "Video",
                buttonTag: true,
                onClick: () => onClickHandler("video"),
              },
              {
                id: "illustration",
                icon: " ",
                name: "Ilustración",
                buttonTag: true,
                onClick: () => onClickHandler("illustration"),
              },
              {
                id: "design",
                icon: " ",
                name: "Diseño",
                buttonTag: true,
                onClick: () => onClickHandler("design"),
              },
              {
                id: "animation",
                icon: " ",
                name: "Animación",
                buttonTag: true,
                onClick: () => onClickHandler("animation"),
              },
            ]}
          />
          <Grid gridItems={filteredGridItems} />
        </ContentSection>
      </div>
    </ReactLenis>
  );
}

export default App;
