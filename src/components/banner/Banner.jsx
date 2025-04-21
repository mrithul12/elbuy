import React from 'react'
import './Banner.css'
import bgItems from '../../asset/veg-bg-image.jpg'
import bgDelivery from '../../asset/delivey.jpg'

const Banner = () => {
  return (
    <div className='banner'>
        <div className="sub-banner-1 d-flex justify-content-center align-items-center position-relative">
          <div className="banner-img">
          <img  className='img-fluid' src={bgItems} alt="" />
          </div>
        
            <div className="banner-content w-100 text-nowrap position-absolute">
              <p className='m-0 bg-gradient'>fruits & vegitables, <br /> stationary.</p>
              <div className="banner-button ">
              <button>Shop Now</button>
            </div>
            </div>
            
        </div>
        <div className="sub-banner-2 d-flex justify-content-center align-items-center text-nowrap position-relative">
          <div className="banner-img">
          <img className='img-fluid' src={bgDelivery} alt="" />
          </div>
        
        <div className="banner-content w-100 position-absolute">
              <p className='m-0 bg-gradient'>delivered to your <br /> doorstep.</p>
              <div className="banner-button ">
              <button>Order Now</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Banner