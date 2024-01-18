import "../styles/index.scss";
import React from 'react'
import CvDeveloper from "./CvDeveloper"
import sword from "../images/swc-sword.png"
import swordSvg from "../images/sword.svg"

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Hi React</h1>
        </section>
        <img src={sword} alt="sword" width="250"/>
        <img src={swordSvg} alt="swordSVG" width="250"/>
        <CvDeveloper />
      </main>
      
    </>
  )
}

export default App;