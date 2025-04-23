import React from 'react'
import './Section.css'
import vegitables from '../../asset/vegitables-image.png'
const Section = () => {
  return (
    <div className='section d-flex justify-content-between'>
         <div className="section-content d-flex flex-column align-items-center justify-content-center">
            <p>its all organic & natural here</p>
            <h1>organic products</h1>
            <h2>for a better world</h2>
            <button>read more</button>
         </div>
         <div className="section-image d-flex justify-content-center align-items-center">
            <img src={vegitables} alt="" />
         </div>
    </div>
  )
}

export default Section