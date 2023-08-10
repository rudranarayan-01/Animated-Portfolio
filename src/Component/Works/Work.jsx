import "./Work.css"
import React from 'react'
import upWork from "../../img/Upwork.png"
import Fiberr from "../../img/fiverr.png"
import Amazon from "../../img/amazon.png"
import Shopify from "../../img/Shopify.png"
import Facebook from "../../img/Facebook.png"
import { useContext } from "react"
import { themeContext } from "../../Context"

const Work = () => {
      // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="work">
        {/* Left side */}
        <div className="awesome">
            <span style={{color: darkMode?'white': ''}}>Works for All these</span>
            <span>Brands & Clients</span>
            <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Nihil voluptates vero tempora. <br />Lorem ipsum dolor sit amet consectetur, adipisicing elit. </span>
            <button className="button s-button">Hire Me</button>
            <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
        </div>

        {/* right side */}
        <div className="w-right">

            <div className="w-mainCircle">
                <div className="w-seeCircle">
                    <img src={upWork} alt="" />
                </div>
                <div className="w-seeCircle">
                    <img src={Fiberr} alt="" />
                </div>
                <div className="w-seeCircle">
                    <img src={Amazon} alt="" />
                </div>
                <div className="w-seeCircle">
                    <img src={Shopify} alt="" />
                </div>
                <div className="w-seeCircle">
                    <img src={Facebook} alt="" />
                </div>
            </div>
            
            {/* Background circles */}
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>

        </div>
    </div>
  )
}

export default Work