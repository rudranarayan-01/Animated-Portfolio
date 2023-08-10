import "./Intro.css"
import React from 'react'
import Github from "../../img/github.png"
import Linkedin from "../../img/linkedin.png"
import Instagram from "../../img/instagram.png"
import Vector1 from "../../img/Vector1.png"
import Vector2 from "../../img/Vector2.png"
import boy from "../../img/boy.png"
import glassesimoji from "../../img/glassesimoji.png"
import crown from "../../img/crown.png"
import FloatingDiv from "../FloatingDiv/FloatingDiv"
import { themeContext } from "../../Context"
import { useContext } from "react"
import { motion } from "framer-motion"


const Intro = () => {

    const transition = {duration:2, type:"spring"}

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro">

        <div className="i-left">
            <div className="i-name">
                <span style={{ color: darkMode ? "white" : "" }}>Hi! I am</span>
                <span>Rudranarayan Sahu</span>
                <span>Web Developer</span>
            </div>

            <button className="i-button">Hire me</button>
            <div className="i-icons">
                <a href="www.github.com"><img src={Github} alt="Github" /></a>
                <a href="www.linkedin.com"><img src={Linkedin} alt="Linkedin" /></a>
                <a href="www.instagram.com"><img src={Instagram} alt="Instagram" /></a>
            </div>
            
        </div>

        <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={boy} alt="" />
            <motion.img initial={{ left: "-36%" }} whileInView={{ left: "-24%" }} transition={transition} src={glassesimoji} alt=""/>
            <div style={{top:"-4%",left:"68%"}}>
            <FloatingDiv image={crown} txt1={"WEB"} txt2={"DEVELOPER"}/>
            </div>
        </div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div className="blur" style={{background: "#C1F5FF", top: "17rem", width: "21rem", height: "11rem", left: "-9rem",}}></div>
    </div>
  )
}

export default Intro