import React from 'react'
import './Explore.css'
import { menu_list } from '../../assets/assets'
const Explore = ({category,setCategory}) => {
  
  return (
    <div className='Explore-Menu' id='Explore-Menu'>
        <h1>Explore Our Menu</h1>
        <p className='Explore-Menu-Text'>Choose from a diverse menu featuring a directable array of dishes.Our mission is to satisfy your cravings and elevate your dining experience,one meal at a time. </p>   
        <div className="Explore-Menu-List">
          {menu_list.map((item,index)=>{
            return (
              <div onClick={()=>setCategory(prev=>prev ===item.menu_name ?"All":item.menu_name)} key ={index} className='Explore-Menu-List-Items'>
                <img className= {category===item.menu_name?"active":"" }src={item.menu_image} alt="menu" />
                <p>{item.menu_name}</p>
              </div>
            ) 
          })}
        </div>
        <hr />
    </div>
  )
}

export default Explore
