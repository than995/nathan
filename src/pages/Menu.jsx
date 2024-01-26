import React from 'react'
import {MenuList}  from '../helpers/menuList'
import MenuItem from '../components/MenuItems'
import '../Styles/Menu.css'


function Menu() {
  return (
    <div className='menu'>
      <h1 className='menuTitle'>Our Menu </h1>
      <div className="menuList">
         {MenuList.map((menuItem, key)=>{
             return  <MenuItem image={menuItem.image} name={menuItem.name} price={menuItem.price} key={key}/>
         })}
      </div>
    </div>
  )
}

export default Menu;
