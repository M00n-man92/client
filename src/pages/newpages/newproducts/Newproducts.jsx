import React from 'react'
import "./newproducts.scss"
import Products from '../../products/Products'
import Product from '../../products/product/Product'
export default function NewProducts() {
  return (
    
    <div className='newproducts'>
      <h3>Our Product</h3>
      <div className="container">
        <span>Hot</span>
        <span>On SALE</span>
        <span>Trending Now</span>
        <span>New Arrival</span>
      </div>
      <div className="productscontainer">
      <Products sex="women"/>
      </div>
    </div>

  )
}
