import Announcemets from '../announcmenet/Announcemets'
import Catagories from '../catgories/Catagories'
import Footer from '../footer/Footer'
import Menu from '../menu/Menu'
import Nav from '../nav/Navigation'
import Products from '../products/Products'
import './home.scss'
import { MaleOutlined, FemaleOutlined } from '@mui/icons-material'
import { Link } from 'react-router-dom'
export default function Home() {
    return (
        <div className="home">
            <Announcemets />
            <Nav />
            {/* <Catagories/> */}
            <div className="sexcatagories">
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
            </div>
            <Products />
            <Footer />
            {/* <Menu /> */}
        </div>
    )
}
