import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

import './ProducDetails.css'; // custom styles (optional)

const ProductDetails = () => {
  const { details } = useContext(ProductContext);

  

  return (
    <div className="container my-4">
      {details.map((item, index) => (
        <div className="row mb-4 border p-3 rounded shadow-sm product-detail" key={index}>
          <div className="col-md-5 text-center">
            <img src={item.images} alt={item.title} className="img-fluid rounded" />
          </div>
          <div className="col-md-7">
            <h2>{item.title}</h2>
            <p className="text-muted">{item.category}</p>
            <p>{item.description}</p>
            <div className="mb-2">
              <strong>Rating:</strong> {item.rating}
            </div>
            <ul className="list-unstyled">
              <li><strong>Stock:</strong> {item.stock}</li>
              <li><strong>Brand:</strong> {item.brand}</li>
              <li><strong>Warranty:</strong> {item.warrantyInformation}</li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductDetails;
