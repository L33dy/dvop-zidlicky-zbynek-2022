function PortfolioItem(param) {
    return <div className="portfolio-item">
        <img src={param.src} alt={param.alt} />
            <h1 className="title">{param.title}</h1>
            <p className="description">{param.desc}</p>
    </div>
}

export default PortfolioItem