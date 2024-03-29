import React, { useContext, useState } from 'react'
import "./Navbar.css"
import {assets} from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/storeContext'

const Navbar = ({SetshowLogin}) => {
  const [menu,setMenu] = useState("");
  const {getTotal} = useContext(StoreContext)
  return (
    <div className="navbar">
      <Link to='/rasoi'><img src={assets.logo} alt="logo" className="logo"/></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick = {()=>setMenu("Home")} className= {menu ==="Home" ? "active": ""}>Home </Link>
        <a href='#Explore-Menu' onClick = {()=>setMenu("Menu")} className= {menu ==="Menu" ? "active": ""}>Menu</a>
        <a href='#AppDownload'onClick = {()=>setMenu("Mobile-App")} className= {menu ==="Mobile-App" ? "active": ""}>Mobile-App</a>
        <a href='#Footer'onClick = {()=>setMenu("Contact-Us")} className= {menu ==="Contact-Us" ? "active": ""}>Contact-Us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search" />
        <div className='navbar-search-icon'>
          <Link to='/cart'><img src={assets.basket_icon} alt="basket"/></Link>
          <div className={getTotal()===0 ? "" :'dot'}></div>  
        </div>
        <button onClick={()=>SetshowLogin(true)}>sign-in</button>  
      </div>
    </div>
  )
}
export default Navbar
