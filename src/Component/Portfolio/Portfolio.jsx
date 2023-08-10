import "./Portfolio.css"
import React from 'react'
import {Swiper,SwiperSlide} from "swiper/react"
import "swiper/css"
import node from "../../img/node.png"
import chatApp from "../../img/chatApp.png"
import portfolio from "../../img/portfolio.png"
import Hoc from "../../img/hoc.png"
import { useContext } from "react"
import { themeContext } from "../../Context"

const Portfolio = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio">
        {/* Headings */}
        <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
        <span>Portfolio</span>

        {/* Slider */}
        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={portfolio} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={node} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={chatApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Hoc} alt="" />
        </SwiperSlide>
      </Swiper>

    </div>
  )
}

export default Portfolio