import './products.scss'
import axios from 'axios'
import { filteredproducts } from '../../data'
import Product from './product/Product'
import { useEffect, useState,useRef } from 'react'
import { publicRequest } from '../../requestMethods'

export default function Products({ cat, sort, filter }) {
    const [products, setProducts] = useState([])
    const [filters, setFilters] = useState([])

    const socartis = {
        g: ["/assets/logo.jpg","/assets/kanye1.jpg",
            "/assets/kanye2.jpg",
            "/assets/kanye3.jpg"
        ]
        , h: ["/assets/kanye10.jpg","/assets/kanye4.jpg",
            "/assets/kanye5.jpg",
            "/assets/kanye6.jpg"],
        i: ["/assets/kanye11.jpg","/assets/kanye7.jpg",
            "/assets/kanye8.jpg"
            , "/assets/kanye9.jpg"],
        key: function (n) {
            return this[Object.keys(this)[n]];
        }
    }
    const [problesm, setProblesm] = useState(0)
    const hello = (hundi) => {
        return socartis.key(hundi - 1)
    }
    // const interval = setInterval(() => {
        
    //     setProblesm(problesm+1)
    //     if (problesm == 4) {setProblesm(1)}
    //     console.log(problesm)
        
    // }, 8000)
    // const slider=()=>{
    //     
    //     setTimeout(slider,5000)
    // }
    const [itemm,setitemm]=useState(0)
    const autoPlay = useRef()
    useEffect(() => {
        autoPlay.current = heandler
    })
    // setInterval(()=>heandler("r"),8000)
    useEffect(() => {
        const andle = () => {
            autoPlay.current()
        }
        // andle()
        const interval = setInterval(andle, 4000)

    }, [])
    
const heandler = () => {

    // else if (digits == "r") {
    itemm != 3 ? setitemm(itemm + 1) : setitemm(0)
    // console.log(itemm)
    // }
}
    useEffect(() => {
        const fun = async () => {
            try {
                const reply = await publicRequest.get(cat ? `product/find?catagory=${cat}` : 'product/find')
                const res = reply.data
                setProducts(res.data)
            }
            catch (e) {
                console.log(e)
            }
        }
        fun()
        
    }, [cat])
    useEffect(() => {
        cat && setFilters(products.filter(item =>
            Object.entries(filter).every(([key, value]) =>

                item[key].includes(value)

            )))
    }, [cat, filter, products])

    useEffect(() => {
        if (sort === "newest") {
            setFilters(prev =>
                [...prev].sort((a, b) => a.createdAt - b.createdAt))
        }
        else if (sort === "asc") {
            setFilters(prev =>
                [...prev].sort((a, b) => a.price - b.price))
        }
        else {
            setFilters(prev =>
                [...prev].sort((a, b) => b.price - a.price))
        }
    }, [sort])

    return (
        <div className="still">

            <div className="products">
                {cat ? filters.map((items, i) => (
                    <Product items={items} toss={i+45} />
                )) : products.map((items, i) => (<><Product items={items} toss={i+434} />
                    {(i + 1) % 8 === 0 ? <div className="porterhouse" key={i+34}>
                        {hello((i + 1) / 8).map((itemsss, i) => (
                            <div className="itsthetruth" key={i+878} style={{ transform: `translateX(${-100 * itemm}vw)` }} >
                                <img className='help' src={itemsss} alt='' ></img>
                            </div>
                        ))}
                        {/*  */}
                    </div>
                        : <></>}
                </>



                ))}
            </div>


        </div>

    )
}
