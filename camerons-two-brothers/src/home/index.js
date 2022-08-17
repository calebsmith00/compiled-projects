import React from "react"
import "./styles/style.css"
import "../common/styles/separator.css"
import "./styles/serviceArea.css"
import Welcome from './welcome'
import About from './about'
import LawnImages from './lawnImages'
import Services from './services'
import Testimonies from './testimonies'
import Contact from '../contact'
import Footer from '../footer'

export default function Home() {
  return (
    <div className="home-container">
      <Welcome />
      <About />
      <Services />
      {/* <div className="separator"></div> */}
      {/* <LawnImages /> */}
      <Contact />
      <Testimonies />
      <Footer />
    </div>
  );
}
