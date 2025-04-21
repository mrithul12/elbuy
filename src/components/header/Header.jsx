import React, { useState } from 'react'
import './Header.css'
import { AlignJustify, Search,ShoppingBasket, UserPen, X } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'

const Header = () => {
    const [togle,setTogle] = useState(false)
    const {add} =useContext(ProductContext)
    
  return (
    <div className="header d-flex justify-content-between align-items-center px-3 text-nowrap">
        <div className="logo-name">
            <h2 className='m-0'>Elitehub</h2>
        </div>
        <div className="header-content d-flex gap-3">
            <div className="header-list align-items-center d-none d-md-flex">
                <ul className='d-flex gap-4 list-unstyled m-0 '>
                <li> <NavLink to={'/'}>HOME</NavLink></li>
                <li><NavLink to={'/Shop'}>PRODUCT</NavLink></li>
                <li><NavLink to={'/About'}>ABOUT</NavLink></li>
                <li><NavLink to={'/ContactUs'}>CONTACT Us</NavLink></li>
                </ul>
            </div>
            <div className="header-search  d-none d-md-flex align-items-center ">
            <input type="text" placeholder='search products ' />
            <Search/>
            </div>
            <div className="header-button">
           <NavLink><UserPen/></NavLink> 
            </div>
            <div className="header-cart d-flex align-items-center">
            <NavLink to={'/Cart'}> <ShoppingBasket/></NavLink> {add.length > 0 && add.length}
            </div>


            <div className="header-toggle-bar d-block d-md-none pe-3">
            <AlignJustify onClick={()=>setTogle(true)}/>
            {togle&&(
       <div className="header-toggle-list d-flex justify-content-between d-block d-md-none position-absolute ">
        <ul className='list-unstyled m-0 d-flex flex-column gap-3 mt-3 '>
        <li> <NavLink to={'/'}>HOME</NavLink></li>
                <li><NavLink to={'/Shop'}>PRODUCT</NavLink></li>
                <li><NavLink to={'/About'}>ABOUT</NavLink></li>
                <li><NavLink to={'/ContactUs'}>CONTACT Us</NavLink></li>
                <div className="header-search d-flex align-items-center ">
            <input type="text" placeholder='search products ' />
            <Search/>
            </div>
            </ul>
            
            <div className="header-close pe-3 mt-2">
            <X onClick={()=>setTogle(false)}/>
        </div>
        </div>
       
        )}
        
        </div>
        </div>
    </div>  
  )
}

export default Header