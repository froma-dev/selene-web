import '@styles/Hero.css'
//import HeroDots from './HeroDots'

const Hero = ({ref}: {ref: React.RefObject<HTMLDivElement|null>}) => {
    return (
        <section className="hero" ref={ref}>
            {/* <HeroDots /> */}
            <h1><span>Selene</span><span>Fernández</span></h1>
            <p>Illustrator, Designer, & Audiovisual Artist</p>
            <img src="/asterisk_no_fill.svg" alt="gray flower" className='gray-flower'/>
        </section>
    )
}

export default Hero
