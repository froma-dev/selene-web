import { useEffect, useState } from 'react'
import './App.css'
import { GridItem } from "./types/Grid"
import Grid from '@components/Grid'


function App() {
  const [gridItems, setGridItems] = useState<GridItem[]>([])

  useEffect(() => {
    const newGridItems = Array.from({ length: 20 }, (_, index) => ({
      id: String(index + 1),
      title: `Title ${index + 1}`,
      content: `Content ${index + 1}`,
      image: '/vite.svg',
      link: '/vite.svg',
    })) as GridItem[]

    setGridItems(newGridItems)
  }, [])

  return (
    <div className="app">
      <h1>Hi, I'm Selene</h1>
      <Grid gridItems={gridItems} />
    </div>
  )
}

export default App