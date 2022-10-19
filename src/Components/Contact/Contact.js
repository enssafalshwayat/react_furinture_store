import React from 'react'
import './Contact.css'
export default function Contact() {
  return (
    <div id='contact' className='contact'>
        <div className='container'>
           
            <div className='box'>
                <h4>Information</h4>
                <ul>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>News</li>
                    <li>Store</li>
                </ul>
            </div>

            <div className='box'>
                <h4>Collections</h4>
                <ul>
                    <li>Wooden Chair</li>
                    <li>Royal Cloth Sofa</li>
                    <li>Accent Chair</li>
                    <li>Bed</li>
                    <li>Hanging Lamp</li>
                </ul>
            </div>

            <div className='box'>
                <h4>My Accounts</h4>
                <ul>
                    <li>My Account</li>
                    <li>Wishlist</li>
                    <li>Community</li>
                    <li>Order History</li>
                    <li>My Cart</li>
                </ul>
            </div>

            <div className='box'>
                <h4>Newsletter</h4>
                <p>Subscribe to get latest news,update and information.</p>
                <div className='input-icon'>
                   <input type='text' placeholder='Enter Email Here...'/>
                   <span><i className="fa fa-external-link-square" aria-hidden="true"></i> </span>
                </div>   
            </div>



        </div>
    </div>
  )
}






















