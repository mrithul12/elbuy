import React, { useContext } from 'react';
import './Cart.css';
import { ProductContext } from '../context/ProductContext';
import { Frown } from 'lucide-react';


const Cart = () => {
  const { add, removeCart } = useContext(ProductContext);

  return (
    <div className="container mt-5">
      {add.length === 0 ? (
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h1 className="m-0">Your cart is empty</h1>
          <Frown size={48} className="mt-2" />
        </div>
      ) : (
        <div className="row gy-4">
          {add.map((item, index) => (
            <div key={index} className="col-sm-12 col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm cart-card">
                <img
                  src={item.images}
                  alt={item.title}
                  className="card-img-top"
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text fw-bold">${item.price}</p>
                  <button
                    className="btn btn-danger mt-auto"
                    onClick={() => removeCart(index)}
                  >
                    Remove from Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
