import Announcemets from '../announcmenet/Announcemets'
import Catagories from '../catgories/Catagories'
import Footer from '../footer/Footer'
import Menu from '../menu/Menu'
import Nav from '../nav/Navigation'
import Products from '../products/Products'
import './home.scss'
import { MaleOutlined, FemaleOutlined, ArrowForwardIosOutlined, ArrowBackIosNewOutlined } from '@mui/icons-material'
// import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { publicRequest } from '../../requestMethods'
import Product from '../products/product/Product'
export default function Home() {

    const [productm, setProductm] = useState([])
    const [itemm,setitemm]=useState(0)

    const nion = (digits) => {
        if (digits == "l") {
            itemm != 0 ? setitemm(itemm - 1) : setitemm(2)
            // console.log(itemm)
        }
        else if (digits == "r") {
            itemm != 2 ? setitemm(itemm + 1) : setitemm(0)
            console.log(itemm)
        }
    }
    // console.log(itemm)
    useEffect(() => {
        const stuallday = async () => {
            const answer = await publicRequest.get('/product/find/limit/home')
            setProductm(answer.data.data)
        }
        stuallday()
    },[])
    return (
        <div className="home">
            <Announcemets />
            <Nav />
            {/* <Catagories/> */}
            {/* <div className="sexcatagories">
                <Link to="/products/men" className='link'>
                <div className="makecatagory" >
                    <MaleOutlined />
                    <span className="malespan">
                        MEN
                    </span>

                </div>
            
                </Link>
                <Link to="/products/women" className='link' >
                <div className="femakecatagory">
                    <FemaleOutlined />
                    <span className="malespan">
                        WOMEN
                    </span>

                </div> 
                </Link>
            </div> */}
            {/* <Products /> */}
            <div className="beautify">
                <div className="companyname">
                    <img src="/assets/laser.webp" alt="" />
                </div>
                <div className="sliderorproduct">
                    <div className="lightnigga">
                        {/* <img src="/assets/arrowr.png" alt="" /> */}
                        <ArrowBackIosNewOutlined className='ion' onClick={()=>nion("l")} />
                    </div>
                    <div className="dopemoney">
                        <div className="keepmoving" style={ {transform: `translateX(${-100 * itemm}vw)`} }>
                            {productm.map((item, i) => (
                                // <Link to=`/product/${item._id}` ></Link>
                                // <Product items={item} toss={i} />
                                <>
                                    <Link className='link' to={`/product/${item._id}`}>
                                        <div className="singleproduct" key={i}>
                                            <img src={item.img} alt="" />
                                            <div className="priceofproduct">
                                                <span>$ {item.price}</span>
                                            </div>
                                        </div>
                                    </Link></>


                            ))}


                        </div>
                    </div>
                    <div className="darknigga">
                    {/* <img src="/assets/arrowr.png" alt="" /> */}

                    <ArrowForwardIosOutlined className='ion'  onClick={()=>nion("r")} />
                </div>
                    

                </div>
                <div className="companyname">
                        <img src="/assets/campaigns.jpg" alt="" />
                    </div>
            </div>
            <Footer />
            {/* <Menu /> */}
        </div>
    )
}
