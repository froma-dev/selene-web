import '@styles/Header.css'
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { useEffect, useRef } from 'react'

const Header = () => {
    const brandRef = useRef<HTMLDivElement>(null)
    const tl = useRef<GSAPTimeline>(null)

    useEffect(() => {
        gsap.registerPlugin(useGSAP)
    }, [])

    useGSAP(() => {

            const t = 0
        const [brandImage, brandName] = gsap.utils.toArray<Element>(['.brand-image', '.brand-name'])
        console.log('brandImage = ', brandImage)
        console.log('brandName = ', brandName)

        tl.current = gsap
            .timeline()
            .to(brandImage, { x: 100 }, '<')
            .to(brandName, { x: 0 }, '<')
    }, [])

    return (
        <header>
            <div className="brand">
                <img src="/asterisk_no_fill.svg" alt="gray flower" className='brand-image' />
                <h1 className='brand-name'>Selene Fernández</h1>
            </div>
            <nav>
                <ul>
                    <li><a href="/about">About</a></li>
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header