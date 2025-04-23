import React from 'react'
import './Reviws.css'
import vegetableBlogs from './ReviesData'
const Reviws = () => {
  return (
    <div className='revie-hero mt-4'>
       
        <div className='d-flex flex-wrap reviw gap-3'>

       
        {vegetableBlogs.map((item,index)=>{
          return(
            <div className="revies-card d-flex gap-2">
            <div className="review-image">
              <img src={item.image} alt="" />
            </div>
            <div className="review-content d-grid p-1">
            <div className="revies-title">
              <h2 className="m-0">{item.title}</h2>
            </div>
            <div className="revies-description">
              <p className="m-0">{item.summary}</p>
            </div>
            <div className="revie-burron">
              <button>read more</button>
            </div>
            </div>
           
          </div>
         
          )
        })}
         </div>
    </div>
  )
}

export default Reviws