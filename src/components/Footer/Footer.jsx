import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='Footer' id='Footer'>
    <div className="Footer-Content">
      <div className="Footer-Content-Left">
        <img src={assets.logo} alt="" />
        {/* <h2>Explore Our Menu</h2> */}
        <p>Choose from a diverse menu featuring a directable array of dishes.Our mission is to satisfy your cravings and elevate your dining experience,one meal at a time.</p>
        <div className="Footer-Social-Icons">
          <img src={assets.facebook_icon} alt="" />
          <img src={assets.linkedin_icon} alt="" />
          <img src={assets.twitter_icon} alt="" />
        </div>
      </div>
      <div className="Footer-Content-Center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About-Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
      </div>
      <div className="Footer-Content-Right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+94 54894 154547</li>
            <li>contact@rasoi.com</li>
          </ul>         
      
      </div>

    </div>   
    <hr />
      <p className="footer-copywrite">
            Copyright 2024 © Rasoi.com - All Rights Reserved.
          </p>   
    </div>
  )
}

export default Footer
