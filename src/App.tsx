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
import { type LinkData } from "@components/Link";
import portfolioService from "@services/portfolio";
import { Asset, YoutubeVideoAssetProps } from "src/types/Asset";
import { Category, CategoryWithId } from "src/types/Category";
import youtubeService from "@services/youtube";
import { YT_PLAYLIST_ID } from "@src/config";
const connectDescription =
  "I'm always looking for new opportunities to collaborate and create amazing projects. If you have any questions or just want to say hello, feel free to contact me.";

const contactLinks: LinkData[] = portfolioService.getContactLinks();
type WorkItem = Asset | YoutubeVideoAssetProps;

function App() {
  const [filters] = useState<Category[]>([]);
  const [works, setWorks] = useState<WorkItem[]>([]);
  const [portfolio, setPortfolio] = useState<{
    categories: CategoryWithId[];
  }>({
    categories: [],
  });

  useEffect(() => {
    let mounted = true;

    const fetchAllData = async () => {
      if (!mounted) return;

      try {
        const youtubeWorks = await youtubeService.getVideosFromPlaylist(
          YT_PLAYLIST_ID
        );
        if (mounted) setWorks([...youtubeWorks]);
      } catch (error) {
        console.error("Youtube fetch error:", error);
      }

      try {
        const [categories, portfolioWorks] = await Promise.all([
          portfolioService.getCategories(),
          portfolioService.getPortfolio(),
        ]);

        if (mounted) {
          setPortfolio({
            ...portfolio,
            categories,
          });
          setWorks((prevWorks) => [...prevWorks, ...portfolioWorks]);
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

  const filteredGridItems = works.filter(
    (workItem) =>
      filters.length === 0 ||
      filters.some((filter) => workItem.categories.includes(filter))
  );

  return (
    <ReactLenis root>
      <div className="app">
        <Header logo={{ src: "/asterisk.svg", alt: "asterisk brand logo" }} />
        <Hero />
        <ContentSection id="work" sectionName="Work">
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
            <LinksList links={contactLinks} />
          </div>
        </ContentSection>
        <Footer />
      </div>
    </ReactLenis>
  );
}

export default App;
