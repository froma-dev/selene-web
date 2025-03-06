const GridImage = ({src, alt, fadeInOnLoad}: {src: string, alt: string, fadeInOnLoad: boolean}) => {
    const onLoadHandler = (event: React.SyntheticEvent<HTMLImageElement>) => {
        if (fadeInOnLoad && event.currentTarget.complete) {
            event.currentTarget.classList.add('loaded');
        }
    }
    return (
        <img src={src} alt={alt} className={fadeInOnLoad ? 'fade-in-on-load' : ''} onLoad={onLoadHandler}/>
    )
}

export default GridImage