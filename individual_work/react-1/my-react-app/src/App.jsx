import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import PortfolioItem from "./components/PortfolioItem.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <div className="navbar">
            <div className="content">
                <div className="start">
                    <div>About</div>
                    <div>Services</div>
                    <div>Portfolio</div>
                </div>
                <div className="end">
                    <div>Contact</div>
                </div>
            </div>
        </div>
        <div className="portfolio">
            <div className="portfolio-header">
                <h1>Portfolio <span>Recent Work</span></h1>
            </div>
            <hr />
                <div className="portfolio-content">
                    <PortfolioItem src="../images/nature.png" alt="Nature 1" title="Portfolio Title" desc="Upon yielding, kind sea subdue very seed sixth them Jesser one lesser there earth days were multiply so sixth fifth that man fowl made"></PortfolioItem>
                    <PortfolioItem src="../images/nature.png" alt="Nature 1" title="Portfolio Title" desc="Upon yielding, kind sea subdue very seed sixth them Jesser one lesser there earth days were multiply so sixth fifth that man fowl made"></PortfolioItem>
                </div>
        </div>
    </div>
  )
}

export default App
