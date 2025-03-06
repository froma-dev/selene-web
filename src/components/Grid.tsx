import { GridItem } from "../types/Grid"
import '@styles/Grid.css'

const Grid = ({gridItems}: {gridItems: GridItem[]}) => {
  return (
    <ul className="grid">
      {gridItems.map((item) => (
        <li key={item.id} className="grid-item">
          <img src={item.image} alt={item.title} />
          <h2>{item.title}</h2>
          <p>{item.content}</p>
        </li>
    ))}
  </ul>)
}
export default Grid
