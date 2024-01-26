import React from 'react'
import { Instagram, Twitter, Facebook, LinkedIn } from '@mui/icons-material'
import '../Styles/Footer.css'


function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <Instagram /> <LinkedIn/> <Twitter/> <Facebook/>
      </div>
      <p> &copy; 2021 info.Pyunik@gmail.com </p>
    </div>
  )
}

export default Footer