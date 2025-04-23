import React from 'react'
import featuredData from './feturedData'
import './Featured.css'

const Featured = () => {
  return (
<div className='text-center featur-heading'>
<h1 className='text-center'>featured products</h1>

    <div className='featured mt-4'>

        {featuredData.map((item,index)=>{
            return(
                <div className='hero'>
                    <div className="featured-image  ">
                        <img src={item.image} alt={item.title} />
                    </div>
                    <div className="featured-hero d-flex justify-content-between text-start alighn-align-items-center">
                    <div className="featured-content">
                        <div className="featured-title">
                        <p className='m-0'>{item.title}</p>
                        </div>
                        <div className="featured-category d-flex gap-2">
                        <p className='m-0'>{item.category}</p>
                        <span>{item.rating}</span>
                        </div>
                        
                    </div>
                    <div className="fatured-price d-flex align-items-center">
                        <p className='m-0'>${item.price}</p>
                    </div>
                    </div>
                   <div className="featured-button">
                    <button className='w-100'>add to cart</button>
                   </div>
                </div>
            )
        })}
    </div>
    </div>
  )
}

export default Featured