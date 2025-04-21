import React from 'react'
import './Slide.css'
import {AnimatePresence,motion} from 'framer-motion'

const Slide = () => {
  return (
    <AnimatePresence>
    <div className='slide bg-warning overflow-x-hidden w-100'>
        <motion.ul
        animate={{ x: ["100%", "-100%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 15,
          ease: "linear",
        }} className='d-flex m-0 gap-4 text-nowrap'>
            <li>Fresh & Healthy</li>
            <li>Pantry Essentials</li>
            <li>Tasty Beverages</li>
            <li>Snacks & Treats</li>
            <li>Organic Choices</li>
            <li>Bakery Fresh</li>
            <li>Stationary</li>
        </motion.ul>
    </div>
    </AnimatePresence>
  )
}

export default Slide