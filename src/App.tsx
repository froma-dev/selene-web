import { useEffect, useRef, useState } from 'react'
import './App.css'
import '@fontsource-variable/merriweather-sans'
import '@fontsource/archivo-black'
import { GridItem } from "./types/Grid"
import Grid from '@components/Grid'
import { ReactLenis, useLenis } from 'lenis/react'
import Hero from '@components/Hero'
// GSAP
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react";
    
import { PixiPlugin } from "gsap/PixiPlugin"
import { TextPlugin } from "gsap/TextPlugin"
import Header from '@components/Header'
function App() {
  const [gridItems, setGridItems] = useState<GridItem[]>([])
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const newGridItems = Array.from({ length: 20 }, (_, index) => ({
      id: String(index + 1),
      title: `Title ${index + 1}`,
      content: `Content ${index + 1}`,
      image: `https://picsum.photos/800/600?random=${index}`,
      link: '/vite.svg',
    })) as GridItem[]
    
    setGridItems(newGridItems)
    gsap.registerPlugin(useGSAP,PixiPlugin,TextPlugin)
  }, [])

  const lenis = useLenis(({scroll}) => {
    console.log(scroll)
  })

  useGSAP(() => {
    // gsap code here...
    gsap.fromTo('.gray-flower', 
      { rotate: 0,  x: -360, ease: 'power2.inOut', duration: 1.5 }, 
      { rotate: 180,  x: 0, ease: 'power2.inOut', duration: 1.5 }
    )
}, {scope: heroRef})

  return (
    <ReactLenis root>
      <div className="app">
        <Header />
        <Hero ref={heroRef}/>
        <section className="content">
          <Grid gridItems={gridItems}/>
        </section>
      </div>
    </ReactLenis>
  )
}

export default App