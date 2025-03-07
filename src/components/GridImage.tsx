const GridImage = ({src, alt}: {src: string, alt: string}) => {
    const onLoadHandler = (event: React.SyntheticEvent<HTMLImageElement>) => {
        if (event.currentTarget.complete) {
            event.currentTarget.classList.add('loaded');
        }
    }
    return (
        <img src={src} alt={alt} onLoad={onLoadHandler}/>
    )
}

export default GridImage