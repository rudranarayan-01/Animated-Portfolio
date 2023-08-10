import "./Card.css"

import React from 'react'

const Card = ({emoji,heading,detail}) => {
  return (
    <div className="card">
        <img src={emoji} alt="" />
        <span>{heading}</span>
        <span>{detail}</span>
        <button className="c-button">LEARN MORE</button>
    </div>
  )
}

export default Card