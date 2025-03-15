import { Asset } from "src/types/Asset";
import "@styles/Grid.css";
import GridImage from "@components/GridImage";
import Tag from "./Tag";

const Grid = ({ gridItems }: { gridItems: Asset[] }) => {
  return (
    <ul className="grid">
      {gridItems.map((item) => (
        <li key={item.id} className="grid-item">
          <GridImage src={item.thumbnail} alt={item.title} />
          <div className="grid-item-content">
            <h2 className="grid-item-title">{item.title}</h2>
            <p className="grid-item-description">{item.description}</p>
            <div className="grid-item-tags">
              {item.categories.map((category) => (
                <Tag
                  key={category}
                name={category}
                className={`${category.toLowerCase()}-tag`}
                />
              ))}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
export default Grid;
