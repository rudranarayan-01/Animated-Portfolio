import "./Service.css"
import HeartImoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import React from 'react'
import Card from "../Card/Card"
import Resume from "./Rudranarayan Sahu.pdf"
import { themeContext } from "../../Context";
import { useContext } from "react"

const Service = () => {
     // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Service">
        {/* Left Side */}
        <div className="awesome">
            <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
            <span>Services</span>
            <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Nihil voluptates vero tempora.</span>
            <a href={Resume} download ><button className="button s-button">Download CV</button></a>
            <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
        </div>

        {/* Right Side */}

        {/* First Card */}
        <div className="cards" style={{left:"16rem"}}>
           <Card emoji={HeartImoji} heading={"Design"} detail={"Figma, Sketch, Photoshop, Adobe, Adobe xd"} />
        </div>
        {/* Second Card */}
        <div className="cards" style={{top:"12rem",left:"-4rem"}}>
           <Card emoji={Glasses} heading={"Developer"} detail={"HTML, CSS, JAVASCRIPT, REACT, NODE.JS, MongoDB"} />
        </div>
        {/* Third Card */}
        <div className="cards" style={{top:"19rem",left:"12rem"}}>
           <Card emoji={Humble} heading={"UX/UI"} detail={"Lorem ispum dummy text are usually use in section where we need some random text"} color="rgba(252, 166, 31, 0.45)" />
        </div>

        <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>

    </div>
  )
}

export default Service