import React from 'react'
import './Navbar.css'
import call from '../../asset/icon/call.png'
import email from '../../asset/icon/email.png'
import facebook from '../../asset/icon/facebook.png'
import instagram from '../../asset/icon/instagram.png'
import youtube from '../../asset/icon/youtube.png'
import twiter from '../../asset/icon/twitter.png'
const Navbar = () => {
  return (
    <div className='navbar d-flex justify-content-around align-items-center'>
        <div className="Nav-name">
            <h2 className='m-0'>Organic</h2>
        </div>
        <div className="navbar-mail align-items-center d-none d-md-flex gap-2">
            <div className="navbar-main">
                <img src={email} alt="" />
            </div>
            <div className="navbar-mail-content">
            <p className='m-0'>Email address</p>
            <p className='m-0'>organic@gmail.com</p>
            </div>
        </div>

        <div className="navbar-support d-flex align-items-center gap-2 d-none d-md-flex">
            <div className="support-icon">
                <img src={call} alt="" />
            </div>
            <div className="navbar-support-content">
            <p className='m-0'>24/7 In Touch</p>
            <p className='m-0'>900900900</p>
            </div>
        </div>

        <div className="navbar-social d-flex gap-2">
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={youtube} alt="" />
            <img src={twiter} alt="" />
         
        </div>

    </div>
  )
}

export default Navbar