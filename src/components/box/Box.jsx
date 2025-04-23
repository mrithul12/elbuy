import React from 'react'
import boximage from './BoxData'
import './Box.css'


const Box = () => {
  return (
    <div className='box-container d-flex justify-content-center'>
      
        {boximage.map((item,index)=>{
            return(
                <div className='box d-flex' key={index}>
                       <div className="box-img d-flex flex-column justify-content-center">
                        <img src={item.image} alt={item.title} />
                       </div>
                       <div className="box-content d-flex flex-column justify-content-center">
                        <p className='m-0'>{item.title}</p>
                        <p className='m-0'>{item.description}</p>
                       </div>
                </div>
            )
        })}
    </div>
  )
}

export default Box