import { GridItem } from "../types/Grid"
import '@styles/Grid.css'
import GridImage from "@components/GridImage"

const Grid = ({gridItems}: {gridItems: GridItem[]}) => {

  return (
    <ul className="grid">
      {gridItems.map((item) => (
        <li key={item.id} className="grid-item">
          <GridImage src={item.image} alt={item.title} fadeInOnLoad={true} />
          <h2>{item.title}</h2>
          <p>{item.content}</p>
        </li>
    ))}
  </ul>)
}
export default Grid
