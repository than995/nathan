import React from 'react'
import Pizzaleft from '../assets/pizzaLeft.jpg'
import '../Styles/Contact.css'


function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide' style={{backgroundImage: `url(${Pizzaleft})`}} >  </div>
        <div className='rightSide'>
            <h1>Contact us </h1>
            <form id='contact-form' method='POST' action="">
                <label htmlFor="name">Full name </label>
                <input type="text" name='name' placeholder='Enter full name' />
                <label htmlFor="email">Email </label>
                <input type="email" name='email' placeholder='Enter Email' />
                <label htmlFor="email">Send us a message  </label>
                <textarea placeholder='enter Message' name="message" id="" cols="30" rows="10" required></textarea>
                <button type='submit'>Send Message</button>
            </form>
        </div>
      
    </div>
  )
}

export default Contact
