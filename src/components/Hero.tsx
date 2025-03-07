import '@styles/Hero.css'
import HeroDots from './HeroDots'

const Hero = ({ref}: {ref: React.RefObject<HTMLDivElement|null>}) => {
    return (
        <div className="hero" ref={ref}>
            <HeroDots />
            <h1><span>Selene</span><span>Fernández</span></h1>
            <p>Illustrator, Designer, & Audiovisual Artist</p>
            <img src="/gray_flower.svg" alt="gray flower" className='gray-flower'/>
        </div>
    )
}

export default Hero
