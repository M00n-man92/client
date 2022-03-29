import React from 'react'
import '../catagories.scss'
// import '../catagories.scss'
import Announcemets from '../../announcmenet/Announcemets'
import Nav from '../../nav/Navigation'
import Catagories from '../Catagories'
import { maleCatagory } from '../../../data'
import Footer from '../../footer/Footer'
import Products from '../../products/Products'
export default function MaleCat() {
  return (
    <>
    <Announcemets />
        <Nav />
        <Catagories sex={maleCatagory} />
        <Products sex="men"/>
        <Footer />
</>
        

//     <div className="catagory">
            
//     <div className="blamegame">
//        {/* <span>Catagories</span> */}
        
//     </div>
//     <div className="lovetoplay">
//     {maleCatagory.map((item,i)=>(
//         <Catitem item={item} id={i} key={i} />
//     ))}
//     </div>
    
// </div>
  )
}
