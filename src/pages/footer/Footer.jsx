import { FacebookOutlined, Instagram, LocationCity, Mail, Phone, Room, Twitter,Telegram } from '@mui/icons-material'
import './footer.scss'
import { Link } from 'react-router-dom'
// import {   } from '@fortawesome/fontawesome-free-solid'
export default function Footer() {
    return (
        <div className="footer">
            <div className="left">
                <div className="title">
                    <span>Leyu Clothing.</span>
                </div>
                <div className="discrip">
                    <p>Wear Better, Look Better.</p>
                </div>
                <div className="social">
                    <div className="container">
                    <a href="https://www.tiktok.com/@leyu__clothing" className='link'>
                    <img src='/assets/Tiktok-icon-on-transparent-background-PNG.png'></img>
                        </a>

                    </div>
                    <div className="container">
                        <a href="https://www.instagram.com/leyu_clothing_and_accessories" className='link'><Instagram /></a>
                    </div>
                    <div className="container">
                    <a href="https://t.me/Leyuclothing" className='link'> <Telegram /></a>
                    </div>
                </div>
            </div>
            <div className="center">
                <div className="title">
                    <h3 > Links</h3>
                </div>
                
                    <ul>
                    
                        <li>
                        <Link to="/" className='link'>
                            Home
                            </Link>
                        </li>
                     
                        <li>
                        <Link to="/cart" className='link'>
                            Cart
                            </Link>
                        </li>
                        <li>
                        <Link to="/products/men" className='link'>
                            Mens
                            </Link>
                        </li>
                        <li>
                        <Link to="/products/women" className='link'>
                            Women
                            </Link>
                        </li>
                        <li>
                        <Link to="/products/accessory" className='link'>
                            Accessories
                            </Link>
                        </li>
                        {/* <li>
                        <Link to="/cart" className='link'></Link>
                            Wish List
                        </li> */}
                        

                    </ul>
                
            </div>
            <div className="right">
                <div className="title">
                    <h4>Contact.</h4>
                </div>
                <div className="container">
                    <Phone />    <h4>(+251) 0965633343</h4>
                </div>
                <div className="container">
                    <Mail />        <h4>email2dream2020@gmail.com</h4>

                </div>

                <div className="container">
                    <Room />     <h4>   Ethiopia, Addis Ababa around Bole</h4>
                </div>

            </div>

        </div>
    )
}
