import {
  type Asset as AssetType,
  type YoutubeVideoAssetProps,
} from "@src/types/Asset";
import GridImage from "@components/GridImage";
import Tag from "@components/Tag";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
const Asset = ({ asset }: { asset: AssetType | YoutubeVideoAssetProps }) => {
  return (
    <li className="grid-item">
      {"watchUrl" in asset ? (
        <LiteYouTubeEmbed id={asset.id} title={asset.title} />
      ) : (
        <GridImage src={asset.thumbnail} alt={asset.title} />
      )}
      <div className="grid-item-content">
        <h2 className="grid-item-title">{asset.title}</h2>
        <p className="grid-item-description">{asset.description}</p>
        <div className="grid-item-tags">
          {asset.categories.map((category) => (
            <Tag
              key={category}
              name={category}
              className={`${category.toLowerCase()}-tag`}
            />
          ))}
        </div>
      </div>
    </li>
  );
};

export default Asset;
