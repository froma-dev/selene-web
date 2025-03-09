import { GridItem } from "../types/Grid";
import "@styles/Grid.css";
import GridImage from "@components/GridImage";
import Tag from "./Tag";

const Grid = ({ gridItems }: { gridItems: GridItem[] }) => {
  return (
    <ul className="grid">
      {gridItems.map((item) => (
        <li key={item.id} className="grid-item">
          <GridImage src={item.image} alt={item.title} />
          <div className="grid-item-content">
            <h2 className="grid-item-title">{item.title}</h2>
            <p className="grid-item-description">{item.content}</p>
            <Tag name={item.type} className={`${item.type}-tag`} />
          </div>
        </li>
      ))}
    </ul>
  );
};
export default Grid;
