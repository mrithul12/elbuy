import React, { useContext } from 'react'
import './Cart.css'
import { ProductContext } from '../context/ProductContext'
import { Frown } from 'lucide-react'

const Cart = () => {
    const {add,removeCart} = useContext(ProductContext)
    
  return (
    <div className='shop-item mt-5 d-flex gap-2 justify-content-center flex-wrap p-2'>
  {add.length === 0 ? (
    <div className='d-flex flex-column justify-content-center align-items-center'>
 <h1 className='m-0'>Your cart is empty </h1>
 <Frown/>
    </div>
   
    
  ) : (
    add.map((item, index) => {
      return (
        <div key={index} className='shop-containerr'>
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
            <button onClick={() => removeCart(index)}>remove cart</button>
          </div>
        </div>
      );
    })
  )}
</div>

  )

}

export default Cart