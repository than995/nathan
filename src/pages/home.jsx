import React from 'react'
import { Link } from 'react-router-dom'
import Piz from '../assets/pizza.jpeg'
import '../Styles/Home.css'


function home() {
  return (
    <div className='home' style={{backgroundImage: `url(${Piz})`}}>
      <div className='headerContainer' >
        <h1>Pyunik Pizzeria</h1>
        <p>PIZZA TP FIT ANY TASTE </p>

        <Link to={'/menu'}>
          <button>Order now </button>
        </Link>
        
      </div> 
    </div>
  )
}

export default home
