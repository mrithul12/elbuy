import React, { useContext} from 'react'
import './Shop.css'

import { ProductContext } from '../context/ProductContext'
const Shop = () => {

  const {product,addTocart} = useContext(ProductContext)
   
  return (
    
    <div className='shop p-3 mt-5'>
      {product.map((item,index)=>{
            return(
              <div key={index} className='shop-container'>
                <div className="shop-product-image">
                  <img src={item.images} alt={item.title} />
                </div>
                <div className="shop-product-title">
                  <p>{item.title}</p>
                </div>
                <div className="shop-product-price">
                  <p>{item.price}</p>
                </div>
                <div className="shop-button">
                  <button onClick={()=>addTocart(item)}>add to cart</button>
                </div>
              </div>
            )
      })}
    </div>

  )
}

export default Shop