import React, { useEffect, useState } from 'react'
import './Header.css'
import { AlignJustify, Search,ShoppingBasket, UserPen, X } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import { motion } from 'framer-motion'
const Header = () => {
    const [togle,setTogle] = useState(false)
    const {add} =useContext(ProductContext)

    const [isScrolled, setIsScrolled] = useState(false);
    console.log("is scrolled ", isScrolled)

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const targetScroll = window.innerHeight * 0.2;

            if (scrollY > targetScroll) {
                setIsScrolled(true);
              } else {
                setIsScrolled(false);
              }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll);
          };
    })
    
  return (
    
    <motion.div 
    key={isScrolled ? 'scrolled' : 'top'}
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{
      duration: 0.6,
      ease: [0.25, 0.8, 0.25, 1]  // smooth cubic bezier curve
    }}
    className={` ${isScrolled ? 'header-active' : 'header'}  header  d-flex justify-content-center  align-items-center text-nowrap `}>
      
        <div className="header-content d-flex justify-content-center  gap-5 position-relative">
            <div className="header-list align-items-center justify-content-center d-none d-md-flex">
                <ul className='d-flex gap-5 list-unstyled m-0 justify-content-center '>
                <li> <NavLink to={'/'}>HOME</NavLink></li>
                <li><NavLink to={'/Shop'}>PRODUCT</NavLink></li>
                <li><NavLink to={'/About'}>ABOUT</NavLink></li>
                <li><NavLink to={'/Contact'}>CONTACT Us</NavLink></li>
                <li><NavLink to={'/Reviws'}>BLOGS</NavLink></li>
                <li><NavLink to={'/ProductDetails'}> PRODUCT DETAILS</NavLink></li>
                <li><NavLink to={'/Cart'}> CART</NavLink> {add.length > 0 && add.length}</li>
                </ul>
            </div>
        


            <div className="header-toggle-bar d-block d-md-none ">
            <AlignJustify onClick={()=>setTogle(true)}/>
            {togle&&(
       <div className="header-toggle-list d-flex justify-content-between d-block d-md-none  position-relative"> 
       <ul className='list-unstyled m-0 d-flex flex-column gap-3  '>
        <li> <NavLink to={'/'}>HOME</NavLink></li>
                <li><NavLink to={'/Shop'}>PRODUCT</NavLink></li>
                <li><NavLink to={'/About'}>ABOUT</NavLink></li>
                <li><NavLink to={'/ContactUs'}>CONTACT Us</NavLink></li>
                <div className="header-search d-flex align-items-center ">
            <input type="text" placeholder='search products ' />
            <Search/>
            </div>
            <li><NavLink to={'/Reviws'}>BLOGS</NavLink></li>
                <li><NavLink to={'/ProductDetails'}> PRODUCT DETAILS</NavLink></li>
                <li><NavLink to={'/Cart'}> CART</NavLink> {add.length > 0 && add.length}</li>
            </ul>
            
            <div className="header-close position-absolute">
            <X onClick={()=>setTogle(false)}/>
        </div> 
        </div>
       
         )} 
        
         </div> 
        </div>
    </motion.div>  
  )
}

export default Header