import { useEffect, useState } from "react";
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
import { Asset, YoutubeVideoAssetProps } from "src/types/Asset";
import { Category, CategoryWithId } from "src/types/Category";
import youtubeService from "@services/youtube";
import { YT_PLAYLIST_ID } from "@src/config";
const connectDescription =
  "I'm always looking for new opportunities to collaborate and create amazing projects. If you have any questions or just want to say hello, feel free to contact me.";

type WorkItem = Asset | YoutubeVideoAssetProps;

function App() {
  const [filteredGridItems, setFilteredGridItems] = useState<WorkItem[]>([]);
  const [filters, setFilters] = useState<Category[]>([]);
  const [works, setWorks] = useState<WorkItem[]>([]);
  const [portfolio, setPortfolio] = useState<{
    categories: CategoryWithId[];
    contactLinks: LinkData[];
  }>({
    categories: [],
    contactLinks: [],
  });

  useEffect(() => {
    let mounted = true;

    const fetchAllData = async () => {
      try {
        const [categories, links, portfolioWorks, youtubeWorks] =
          await Promise.all([
            portfolioService.getCategories(),
            portfolioService.getContactLinks(),
            portfolioService.getPortfolio(),
            youtubeService.getVideosFromPlaylist(YT_PLAYLIST_ID),
          ]);

        if (mounted) {
          setPortfolio({
            categories,
            contactLinks: links,
          });
          setWorks([...portfolioWorks, ...youtubeWorks]);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchAllData();

    return () => {
      mounted = false;
    };
  }, []);

  /* Filtering grid items based on filters */
  useEffect(() => {
    const filteredGridItems = works.filter(
      (workItem) =>
        filters.length === 0 ||
        filters.some((filter) => workItem.categories.includes(filter))
    );

    setFilteredGridItems(() => filteredGridItems);
  }, [works, filters]);

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
          ) : (
            <p>Loading...</p>
          )}
        </ContentSection>
        <ContentSection
          id="connect"
          sectionName="Connect"
          sectionDescription={connectDescription}
          centered
        >
          <div className="connect-container">
            {portfolio.contactLinks.length > 0 ? (
              <LinksList links={portfolio.contactLinks} />
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </ContentSection>
        <Footer />
      </div>
    </ReactLenis>
  );
}

export default App;
