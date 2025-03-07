import '@styles/HeroDots.css'

const HeroDots = () => {
    return (
        <div className="hero-dots">
            {Array.from({ length: 100 }).map((_, index) => (
                <div key={index} className="dot"></div>
            ))}
        </div>
    )
}

export default HeroDots