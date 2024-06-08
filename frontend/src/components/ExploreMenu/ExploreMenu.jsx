import React from 'react'
import './ExploreMenu.css'

import {menu_list} from '../../assets/assets'
const ExploreMenu = (props) => {
  return (
    <div className='explore-menu' id='menu'>
    <h1>Explore our menu</h1>
    <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
    <div className="explore-menu-list">
      {menu_list.map((item,index)=>{
          return (
              <div className='explore-menu-list-item' onClick={()=>{
props.setCategory( prev=>prev===item.menu_name?'all':item.menu_name)
              }} key={index}>
                  <img src={item.menu_image} className={props.category===item.menu_name?'active':''}  alt="" />
                  <p>{item.menu_name}</p>
              </div>
          )
      })}
    </div>
    <hr />
  </div>
  )
}

export default ExploreMenu