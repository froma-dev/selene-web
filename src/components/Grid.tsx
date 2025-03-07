import { GridItem } from "../types/Grid"
import '@styles/Grid.css'
import GridImage from "@components/GridImage"
import { useEffect, useRef } from "react"
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const Grid = ({gridItems}: {gridItems: GridItem[]}) => {
  const gridRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    gsap.registerPlugin(useGSAP, ScrollTrigger)
  }, [])

  useGSAP(() => {
    gsap.fromTo('.grid', {
      scrollTrigger: '.grid',
      y: 0,
      opacity: 0,
      ease: 'power2.inOut',
    }, {
      scrollTrigger: '.grid',
      y: -80,
      opacity: 1,
      duration: 2,
      scrub: 1
    })
  })

  return (
    <ul className="grid" ref={gridRef}>
      {gridItems.map((item) => (
        <li key={item.id} className="grid-item">
          <GridImage src={item.image} alt={item.title} />
          <h2>{item.title}</h2>
          <p>{item.content}</p>
        </li>
    ))}
  </ul>)
}
export default Grid
