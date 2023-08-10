import React from 'react'
import "./Navbar.css"
import Toggle from '../Toggle/Toggle'

const Navbar = () => {
  return (
    <div className='n-wrapper'>
        <div className="n-left">
            <div className="n-name">Andrew</div>
            <Toggle/>
        </div>

        <div className="n-right">
            <div className="n-list">
                <ul>
                    <li>Home</li>
                    <li>Service</li>
                    <li>Experience</li>
                    <li>Protfolio</li>
                    <li>Testimonials</li>
                </ul>
            </div>
            <button className="n-button">Contact Us</button>
        </div>
    </div>
  )
}

export default Navbar