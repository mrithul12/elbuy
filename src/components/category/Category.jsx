import React from 'react'
import './Category.css'
import CategoryData from './CategoryData'

const Category = () => {
  return (
    <div className='category-container d-flex overflow-scroll justify-content-center'>
      
        {CategoryData.map((item,index)=>{
            return(
                <div className='category-box position-relative'>
                  <div className="category-image">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="category-title position-absolute z-1">
                    <span>{item.title}</span>
                  </div>
                </div>
            )
        })}
    </div>
  )
}

export default Category