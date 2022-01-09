import './products.scss'
import axios from 'axios'
import { filteredproducts } from '../../data'
import Product from './product/Product'
import { useEffect, useState } from 'react'

export default function Products({ cat, sort, filter }) {
    const [products, setProducts] = useState([])
    const [filters, setFilters] = useState([])

    useEffect(() => {
        const fun = async () => {
            try {
                const reply = await axios.get(cat ? `http://localhost:5000/api/product/find?catagory=${cat}` : 'http://localhost:5000/api/product/find')
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

useEffect(()=>{
    if(sort==="newest"){
        setFilters(prev=>
            [...prev].sort((a,b)=>a.createdAt - b.createdAt))
    }
    else if(sort==="asc"){
        setFilters(prev=>
            [...prev].sort((a,b)=>a.price - b.price))
    }
    else {
        setFilters(prev=>
            [...prev].sort((a,b)=> b.price - a.price))
    }
},[sort])
    return (
        <div className="products">
            {cat?filters.map(items => (
                <Product items={items} key={items._id}/>
            )):products.map(items => (
                <Product items={items} key={items._id}/>
            ))}
        </div>
    )
}
