import { FavoriteBorderOutlined, ShoppingBagOutlined } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import './product.scss'

export default function Product({ items, toss }) {
    //   console.log(toss)
    return (
        <div className="product" key={toss}>
            {/* <div className="circle"></div> */}
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
