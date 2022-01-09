import { FavoriteBorderOutlined, ShoppingBagOutlined } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import './product.scss'

export default function Product({ items }) {
    return (
        <div className="product" key={items._id}>
            <div className="circle"></div>
            <img src={items.img} alt="" /> 
             
               <div className="display">
                <FavoriteBorderOutlined className="icon" />
                <Link className="link" to={`/product/${items._id}`}><ShoppingBagOutlined className="icon" /></Link>
                
                </div>
            <div className="price">
                <span>$ {items.price}</span>
            </div>


        </div>
    )
}
