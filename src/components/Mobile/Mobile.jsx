import React from 'react'
import './Mobile.css'
import { assets } from '../../assets/assets'
const Mobile = () => {
  return (
    <div class="AppDownload" id ="AppDownload">
    <p>For Better Experience Download <br /> Rasoi App</p> 
      <div className="AppDownloadPlatform">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  )
}

export default Mobile
