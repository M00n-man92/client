import { Add, Minimize, Shop, ShopOutlined, ShoppingBagOutlined } from '@mui/icons-material'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import Announcemets from '../announcmenet/Announcemets'
import Footer from '../footer/Footer'
import Nav from '../nav/Navigation'
import './item.scss'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../../redux/cartRedux'
import { publicRequest, userRequest } from '../../requestMethods'
import { Link } from 'react-router-dom'

export default function Item() {
    const dropzoneStyle = (isPreview) => ({

        backgroundColor: (isPreview),
        

    });
    const deispatch = useDispatch()
    const handleClick = () => {
        setUsedColor(individualItem.color)
        deispatch(addProduct({ ...individualItem, quantity, usedColor, usedSize }))
        // console.log(usedColor)
    }
    const cart = useSelector(state => state.cart)
    // console.log(cart)
    const location = useLocation()
    const id = location.pathname.split("/")[2]
    const [individualItem, setIndividualItem] = useState({})
    const [quantity, setQuantity] = useState(1)
    const [image,setImage]=useState("")
    //  console.log(individualItem.color[0].coloring)
    const count = (type) => {
        if (type === "dec") {
            setQuantity(quantity - 1)
            if (quantity === 1) {
                setQuantity(1)
            }
        }
        else if (type === "acc") {
            setQuantity(quantity + 1)
        }
    }
    useEffect(() => {
        try {
            const getProduct = async () => {
                const reply = await publicRequest.get(`/product/find/${id}`)
                const real = reply.data
                const data = real.data
                // console.log(data)
                setIndividualItem(data)
                // if(individualItem.color){
                //     console.log("DR wesly")
                //     individualItem.color.map(item=>{setUsedColor(item)})
                //     // setUsedColor(individualItem.color)
                // }
                // else if(!individualItem.color[0]){
                //     setUsedColor(individualItem.color)
                // }
                // setUsedColor(individualItem.color[0]?individualItem.color[0]:individualItem.color)
                // console.log(usedColor)
                setImage("")
            }
            getProduct()
        }
        catch (e) {
            console.log(e)
        }

    }, [id])
    const [usedColor, setUsedColor] = useState(null)
    const [usedSize, setUsedSize] = useState(null)
    //   setUsedColor(individualItem.price)
    //   console.log(individualItem.color)
    // console.log(usedColor, usedSize, quantity)
    return (
        <div className="item">
            <div className="headers">
                <Announcemets />
                <Nav />

            </div>
            <div className="wrapperr">
                <div className="letmetellyou">
                    {individualItem.img ? individualItem.img.map((item,i) => (<div className="booby" key={i}><img src={item} alt="" onClick={(e)=>setImage(item)}/></div>)) : <span></span>}
                    {/* <div className="booby"><img src={individualItem.img[0]} alt="" /></div> */}
                </div>
                <div className="imgg">
                    {individualItem.img  ? image?<img src={image} alt="" />:<img src={individualItem.img[0]} alt="" /> : <img src={individualItem.img} alt="" />}
                </div>
                <div className="info">
                    <div className="title">
                        <span>{individualItem.title}</span>
                    </div>
                    <div className="desc">
                        <p>{individualItem.discription}</p>
                    </div>
                    <div className="price">
                        <span>$ {individualItem.price}</span>
                    </div>
                    <div className="selectt">
                        <div className="color">
                            <span>Colour :</span>
                            {individualItem.color ?individualItem.color==="multicolor"?<div className="ohhellnahh" ><img src={individualItem.img[0]} alt="" className="jk" /></div>:<div className="ohhellnahh" style={dropzoneStyle(individualItem.color)}></div>: <span></span>}
                            {individualItem.associate_color ?individualItem.color==="multicolor"? individualItem.associate_color.map((item,i)=>(<Link to={item.id}><div className="ohhellnahh" key={i} ><img src={item.img} alt="" className="jk" /></div></Link>)): individualItem.associate_color.map((r,op) => (<Link to={`/product/${r.id}`}><div className="ohhellnah" key={op} style={dropzoneStyle(r.coloring)}></div></Link>)) : <span></span>}
                            {/* <select name="Color" id="" onClick={(e)=>{setUsedColor(e.target.value)}}> */}


                            {/* {individualItem.color?individualItem.color.map(s=>(<option key={s._id}>{s.coloring}</option>)) : individualItem.color.map((s)=>(<option key={s}>{s}</option>))} */}



                            {/* </select> */}
                        </div>
                        <div className="size">
                            <span>Size :</span>
                            <select name="Size" id="" onClick={(e) => { setUsedSize(e.target.value) }}>
        <option disabled="true">size</option>

                                {individualItem.size?.map((s) => (<option key={s}>{s}</option>))}



                            </select>

                        </div>
                    </div>
                    <div className="bag">
                        <div className="option">
                            <Minimize className="minus" onClick={() => { count("dec") }} />
                            <div className="number">
                                <span>{quantity}
                                </span>
                            </div>
                            <Add className="plus" onClick={() => { count("acc") }} />
                        </div>
                        <div className="cart">
                            <button onClick={handleClick}>Add to Cart</button>
                            <ShoppingBagOutlined className="op" onClick={handleClick} />
                        </div>
                    </div>

                </div>
            </div>
            <div className="footers">
                <Footer />
            </div>
        </div>
    )
}
