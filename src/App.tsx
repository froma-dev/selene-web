import { useEffect, useRef, useState } from "react";
import "./App.css";
import "@fontsource-variable/merriweather-sans";
import "@fontsource/archivo-black";
import "@fontsource-variable/space-grotesk";
import { ReactLenis } from "lenis/react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { PixiPlugin } from "gsap/PixiPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import Header from "@components/Header";
import Hero from "@components/Hero";
import Grid from "@components/Grid";
import ContentSection from "@components/ContentSection";
import Footer from "@components/Footer";
import LinksList from "@components/LinksList";
import FilterList from "@components/FilterList";
import { type LinkData } from "@components/Link";
import portfolioService from "@services/portfolio";
import { Asset } from "src/types/Asset";
import { CategoryWithId } from "src/types/Category";
const connectDescription =
  "I'm always looking for new opportunities to collaborate and create amazing projects. If you have any questions or just want to say hello, feel free to contact me.";

function App() {
  const [gridItems, setGridItems] = useState<Asset[]>([]);
  const [filteredGridItems, setFilteredGridItems] = useState<Asset[]>([]);
  const [links, setLinks] = useState<LinkData[]>([]);
  const [categories, setCategories] = useState<CategoryWithId[]>([]);
  const [filters, setFilters] = useState<string[]>([]);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(useGSAP, PixiPlugin, TextPlugin);

    const fetchPortfolio = async () => {
      const fetchedGridItems = await portfolioService.getPortfolio();
      setGridItems(fetchedGridItems);
    };
    const fetchLinks = async () => {
      const fetchedLinks = await portfolioService.getContactLinks();
      setLinks(fetchedLinks);
    };
    const fetchCategories = async () => {
      const fetchedCategories = await portfolioService.getCategories();
      setCategories(fetchedCategories);
    };

    fetchCategories();
    fetchPortfolio();
    fetchLinks();
  }, []);

  /* Filtering grid items based on filters */
  useEffect(() => {
    const filteredGridItems = gridItems.filter(
      (gridItem) => filters.length === 0 || true
    );

    console.log("SET filteredGridItems--->>", filteredGridItems);
    setFilteredGridItems(filteredGridItems);
  }, [gridItems, filters]);

  useGSAP(
    () => {
      gsap.fromTo(
        ".gray-flower",
        { rotate: 0, x: 360, ease: "power2.inOut", duration: 1.5 },
        { rotate: -180, x: 0, ease: "power2.inOut", duration: 1.5 }
      );
    },
    { scope: heroRef }
  );

  const handleFilterSelection = (filter: string) => {
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
        <ContentSection id="work" sectionName="Work">
          <FilterList
            selectedFilters={filters}
            onFilterSelect={handleFilterSelection}
            filters={categories}
          />
          {filteredGridItems.length > 0 ? (
            <Grid gridItems={filteredGridItems} />
          ) : null}
        </ContentSection>
        <ContentSection
          id="connect"
          sectionName="Connect"
          sectionDescription={connectDescription}
          centered
        >
          <div className="connect-container">
            <LinksList links={links} />
          </div>
        </ContentSection>
        <Footer />
      </div>
    </ReactLenis>
  );
}

export default App;
