import { useEffect, useRef, useState } from "react";
import "./App.css";
import "@fontsource-variable/merriweather-sans";
import "@fontsource/archivo-black";
import "@fontsource-variable/space-grotesk";
import { GridItem } from "./types/Grid";
import Grid from "@components/Grid";
import { ReactLenis } from "lenis/react";
import Hero from "@components/Hero";
// GSAP
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { PixiPlugin } from "gsap/PixiPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import Header from "@components/Header";
import ContentSection from "@components/ContentSection";
import FilterList from "@components/FilterList";
import { type Filter, type FilterProps } from "@components/Filter";

const types: Filter[] = ["video", "illustration", "design", "animation"];

function App() {
  const [gridItems, setGridItems] = useState<GridItem[]>([]);
  const [filteredGridItems, setFilteredGridItems] = useState<GridItem[]>([]);
  const [filters, setFilters] = useState<Filter[]>([...types]);
  const [filtersList, setFiltersList] = useState<FilterProps[]>([]);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(useGSAP, PixiPlugin, TextPlugin);
    const filtersList = [
      {
        id: "video",
        name: "Video",
      },
      {
        id: "illustration",
        name: "Ilustración",
      },
      {
        id: "design",
        name: "Diseño",
      },
      {
        id: "animation",
        name: "Animación",
      },
    ] as FilterProps[];

    const fetchedGridItems = Array.from({ length: 20 }, (_, index) => ({
      id: String(index + 1),
      title: `Title ${index + 1}`,
      content: `Content ${index + 1}`,
      image: `https://picsum.photos/800/600?random=${index}`,
      link: "/vite.svg",
      type: types[Math.floor(Math.random() * 4)],
    })) as GridItem[];

    setFiltersList(filtersList);
    setGridItems(fetchedGridItems);
  }, []);

  /* Filtering grid items based on filters */
  useEffect(() => {
    const filteredGridItems = gridItems.filter(
      (gridItem) =>
        filters.length === 0 || filters.includes(gridItem.type as Filter)
    );

    setFilteredGridItems(filteredGridItems);
  }, [gridItems, filters]);

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

  const handleFilterSelection = (filter: Filter) => {
    if (filters.includes(filter)) {
      setFilters(filters.filter((currentFilter) => currentFilter !== filter));
    } else {
      setFilters([...filters, filter]);
    }
  };

  return (
    <ReactLenis root>
      <div className="app">
        <Header logo={{ src: "/asterisk.svg", alt: "asterisk brand logo" }} />
        <Hero ref={heroRef} />
        <ContentSection id="projects" sectionName="Projects">
          <FilterList
            selectedFilters={filters}
            onFilterSelect={handleFilterSelection}
            filters={filtersList}
          />
          <Grid gridItems={filteredGridItems} />
        </ContentSection>
      </div>
    </ReactLenis>
  );
}

export default App;
