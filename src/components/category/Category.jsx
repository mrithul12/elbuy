import React from 'react'
import './Category.css'
import CategoryData from './CategoryData'

const Category = () => {
  return (


    <div className='category-container d-flex  mt-5'>
      
      
        {CategoryData.map((item,index)=>{
            return(
                <div className='category-box '>
                  <div className="category-image ">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="category-title">
                    <span>{item.title}</span>
                   
                  </div>
                </div>
            )
        })}
    </div>
    
  )
}

export default Category