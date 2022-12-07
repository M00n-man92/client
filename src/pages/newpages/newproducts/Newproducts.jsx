import React, { useState } from 'react'
import "./newproducts.scss"
import Products from '../../products/Products'
import Product from '../../products/product/Product'
import { fontWeight } from '@mui/system'
export default function NewProducts() {
  const nav =["Hot", "On SALE","Trending Now", "New Arrival"]
  const navPointer = [0,1,2,3];
  const [isLined, setIsLined] = useState(0);
  return (
    
    <div className='newproducts'>
      <h3>Our Product</h3>
      <div className="container">
        {nav.map((item,index)=>(
          <span onClick={(e)=>{setIsLined(index)}} key={index} style= {index === isLined?{ textDecorationLine: "underline", fontWeight:"Bold" , textDecorationThickness:"10%"}:{}}>{item}</span>
        ))}
      </div>
      <div className="productscontainer">
      <Products sex="women"/>
      </div>
    </div>

  )
}
