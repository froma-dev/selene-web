import { useEffect, useState } from 'react'
import './App.css'
import '@fontsource-variable/merriweather-sans'
import '@fontsource/archivo-black'
import { GridItem } from "./types/Grid"
import Grid from '@components/Grid'
import { ReactLenis, useLenis } from 'lenis/react'
import Hero from '@components/Hero'

function App() {
  const [gridItems, setGridItems] = useState<GridItem[]>([])

  useEffect(() => {
    const newGridItems = Array.from({ length: 20 }, (_, index) => ({
      id: String(index + 1),
      title: `Title ${index + 1}`,
      content: `Content ${index + 1}`,
      image: `https://picsum.photos/800/600?random=${index}`,
      link: '/vite.svg',
    })) as GridItem[]

    setGridItems(newGridItems)
  }, [])

  const lenis = useLenis(({scroll}) => {
    console.log(scroll)
  })

  return (
    <ReactLenis root>
      <div className="app">
        <Hero />
        <Grid gridItems={gridItems} />
      </div>
    </ReactLenis>
  )
}

export default App