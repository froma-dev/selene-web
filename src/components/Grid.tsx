import {
  type Asset as AssetType,
  type YoutubeVideoAssetProps,
} from "src/types/Asset";
import "@styles/Grid.css";
import Asset from "@components/Asset";

const Grid = ({
  gridItems,
}: {
  gridItems: (AssetType | YoutubeVideoAssetProps)[];
}) => {
  return (
    <ul className="grid">
      {gridItems.map((item) => (
        <Asset
          key={item.id}
          asset={
            "watchUrl" in item
              ? (item as YoutubeVideoAssetProps)
              : ({ ...item } as AssetType)
          }
        />
      ))}
    </ul>
  );
};
export default Grid;
