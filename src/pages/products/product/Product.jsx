import { FavoriteBorderOutlined, ShoppingBagOutlined, TrendingUpOutlined } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import './product.scss'
import { addProduct, removeProduct } from '../../../redux/likeredux'
import { useEffect } from 'react'

export default function Product({ items, toss }) {
    //   console.log(toss)
    const dispatch=useDispatch()
    const likes=useSelector(state=>state.like)
//    console.log(likes)
// console.log(likes.products)
const products=likes.products

const handleClick = async() => {
    let quantity=likes.quantity
    let outofline=TrendingUpOutlined
    for (let pro of products){
        // console.log(pro)
        if (items._id===pro._id){
            // console.log(true)
            console.log(products.indexOf(items))
            let i= products.indexOf(items)
      
           await dispatch(removeProduct({i,quantity}))
            console.log("touches")
            outofline=false
            // console.log(products)
        }
       
        // console.log(pro._id)
    }
    
outofline && await dispatch(addProduct(items))
// console.log(products)

}

// useEffect(()=>{console.log(likes.products)},[handleClick])
console.log(products)
    return (
        <div className="product" key={toss}>
            {/* <div className="circle"></div> */}
            <img src={items.img} alt="" />

            <div className="display">
                <FavoriteBorderOutlined className="icon" onClick={handleClick}/>
                <Link className="link" to={`/product/${items._id}`}><ShoppingBagOutlined className="icon" /></Link>

            </div>
            <div className="price">
                <span>$ {items.price}</span>
            </div>


        </div>
    )
}
