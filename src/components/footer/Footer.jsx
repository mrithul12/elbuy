import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer-container d-flex justify-content-between'>
        <div className="footer-list">
            <h3>Costomer service</h3>
            <ul>
                <li>Contact Us</li>
                <li>Delivery Information</li>
                <li>Privacy Policy</li>
                <li>Terms Of Service</li>
                <li>FAQs</li>
            </ul>
        </div>
       
        <div className="footer-list">
            <h3>company</h3>
            <ul>
                <li>about us</li>
                <li>blogs</li>
               
            </ul>
        </div>
        <div className="footer-list">
            <h3>social</h3>
            <ul>
                <li>twiter</li>
                <li>instagram</li>
                <li>facebook</li>
                <li>whatsapp</li>
               
            </ul>
        </div>
        <div className="footer-list">
            <h3>my account</h3>
            <ul>
                <li>Login / Register</li>
                <li>Wallet / Loyalty Reward</li>
                <li>Harvest Rewards Program</li>
                
            </ul>
        </div>
        

    </div>
  )
}

export default Footer