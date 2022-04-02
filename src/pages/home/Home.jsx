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
                <div className="dopemoney">
                    <div className="keepmoving">
                    
                        <div className="singleproduct">
                            {/* <img src="/assets/1625808057956735e5accb327524affc0e11d1fd12_thumbnail_405x552.webp" alt="" /> */}
                            <div className="priceofproduct">
                            <span>345</span>
                            </div>
                        </div>
                        <div className="singleproduct">
                            {/* <img src="/assets/1625808057956735e5accb327524affc0e11d1fd12_thumbnail_405x552.webp" alt="" /> */}
                            <div className="priceofproduct">
                            <span>345</span>
                            </div>
                        </div>
                        <div className="singleproduct">
                            {/* <img src="/assets/1625808057956735e5accb327524affc0e11d1fd12_thumbnail_405x552.webp" alt="" /> */}
                            <div className="priceofproduct">
                            <span>345</span>
                            </div>
                        </div>
                        <div className="singleproduct">
                            {/* <img src="/assets/1625808057956735e5accb327524affc0e11d1fd12_thumbnail_405x552.webp" alt="" /> */}
                            <div className="priceofproduct">
                            <span>345</span>
                            </div>
                        </div>
                        <div className="singleproduct">
                            {/* <img src="/assets/1625808057956735e5accb327524affc0e11d1fd12_thumbnail_405x552.webp" alt="" /> */}
                            <div className="priceofproduct">
                            <span>345</span>
                            </div>
                        </div>
                        <div className="singleproduct">
                            {/* <img src="/assets/1625808057956735e5accb327524affc0e11d1fd12_thumbnail_405x552.webp" alt="" /> */}
                            <div className="priceofproduct">
                            <span>345</span>
                            </div>
                        </div>
                        <div className="singleproduct">
                            {/* <img src="/assets/1625808057956735e5accb327524affc0e11d1fd12_thumbnail_405x552.webp" alt="" /> */}
                            <div className="priceofproduct">
                            <span>345</span>
                            </div>
                        </div>
                        <div className="singleproduct">
                            {/* <img src="/assets/1625808057956735e5accb327524affc0e11d1fd12_thumbnail_405x552.webp" alt="" /> */}
                            <div className="priceofproduct">
                            <span>345</span>
                            </div>
                        </div>
                        <div className="singleproduct">
                            {/* <img src="/assets/1625808057956735e5accb327524affc0e11d1fd12_thumbnail_405x552.webp" alt="" /> */}
                            <div className="priceofproduct">
                            <span>345</span>
                            </div>
                        </div>
                        <div className="singleproduct">
                            {/* <img src="/assets/1625808057956735e5accb327524affc0e11d1fd12_thumbnail_405x552.webp" alt="" /> */}
                            <div className="priceofproduct">
                            <span>345</span>
                            </div>
                        </div><div className="singleproduct">
                            {/* <img src="/assets/1625808057956735e5accb327524affc0e11d1fd12_thumbnail_405x552.webp" alt="" /> */}
                            <div className="priceofproduct">
                            <span>345</span>
                            </div>
                        </div><div className="singleproduct">
                            {/* <img src="/assets/1625808057956735e5accb327524affc0e11d1fd12_thumbnail_405x552.webp" alt="" /> */}
                            <div className="priceofproduct">
                            <span>345</span>
                            </div>
                        </div><div className="singleproduct">
                            {/* <img src="/assets/1625808057956735e5accb327524affc0e11d1fd12_thumbnail_405x552.webp" alt="" /> */}
                            <div className="priceofproduct">
                            <span>345</span>
                            </div>
                        </div>
                    </div>
                    </div>
                    
                </div>
            </div>
            <Footer />
            {/* <Menu /> */}
        </div>
    )
}
