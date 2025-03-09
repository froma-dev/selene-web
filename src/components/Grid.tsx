import { GridItem } from "../types/Grid";
import "@styles/Grid.css";
import GridImage from "@components/GridImage";

const Grid = ({ gridItems }: { gridItems: GridItem[] }) => {
  return (
    <ul className="grid">
      {gridItems.map((item) => (
        <li key={item.id} className="grid-item">
          <GridImage src={item.image} alt={item.title} />
          <div className="grid-item-content">
            <h2 className="grid-item-title">{item.title}</h2>
            <p className="grid-item-description">{item.content}</p>
            <span className="tag">{item.type}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};
export default Grid;
