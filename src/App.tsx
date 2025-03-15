import { useEffect, useRef, useState } from "react";
import "./App.css";
import "@fontsource-variable/merriweather-sans";
import "@fontsource/archivo-black";
import "@fontsource-variable/space-grotesk";
import { ReactLenis } from "lenis/react";
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
import { Category, CategoryWithId } from "src/types/Category";
const connectDescription =
  "I'm always looking for new opportunities to collaborate and create amazing projects. If you have any questions or just want to say hello, feel free to contact me.";

function App() {
  const [filteredGridItems, setFilteredGridItems] = useState<Asset[]>([]);
  const [filters, setFilters] = useState<Category[]>([]);
  const [portfolio, setPortfolio] = useState<{
    categories: CategoryWithId[];
    works: Asset[];
    contactLinks: LinkData[];
  }>({
    categories: [],
    works: [],
    contactLinks: [],
  });

  useEffect(() => {
    const fetchPortfolio = async () => await portfolioService.getPortfolio();
    const fetchLinks = async () => await portfolioService.getContactLinks();
    const fetchCategories = async () => await portfolioService.getCategories();

    const fetchAllData = async () => {
      const fetchedCategories = await fetchCategories();
      const fetchedPortfolio = await fetchPortfolio();
      const fetchedLinks = await fetchLinks();

      setPortfolio({
        categories: fetchedCategories,
        works: fetchedPortfolio,
        contactLinks: fetchedLinks,
      });
    };

    fetchAllData();
  }, []);

  /* Filtering grid items based on filters */
  useEffect(() => {
    const filteredGridItems = portfolio.works.filter(
      (workItem) =>
        filters.length === 0 ||
        filters.some((filter) => workItem.categories.includes(filter))
    );

    setFilteredGridItems(filteredGridItems);
  }, [portfolio, filters]);

  const handleFilterSelection = (filter: Category) => {
    if (filters.some((currentFilter) => currentFilter === filter)) {
      setFilters(filters.filter((currentFilter) => currentFilter !== filter));
    } else {
      setFilters([...filters, filter]);
    }
  };

  return (
    <ReactLenis root>
      <div className="app">
        <Header logo={{ src: "/asterisk.svg", alt: "asterisk brand logo" }} />
        <Hero />
        <ContentSection id="work" sectionName="Work">
          <FilterList
            selectedFilters={filters}
            onFilterSelect={handleFilterSelection}
            filters={portfolio.categories}
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
            <LinksList links={portfolio.contactLinks} />
          </div>
        </ContentSection>
        <Footer />
      </div>
    </ReactLenis>
  );
}

export default App;
