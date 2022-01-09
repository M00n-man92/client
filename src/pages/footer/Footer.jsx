import { FacebookOutlined, Instagram, LocationCity, Mail, Phone, Room, Twitter } from '@mui/icons-material'
import './footer.scss'

export default function Footer() {
    return (
        <div className="footer">
            <div className="left">
                <div className="title">
                    <span>BANG.</span>
                </div>
                <div className="discrip">
                    <p>yourenever gone ware niles.</p>
                </div>
                <div className="social">
                    <div className="container">
                        <FacebookOutlined />
                    </div>
                    <div className="container">
                        <Instagram />
                    </div>
                    <div className="container">
                        <Twitter />
                    </div>
                </div>
            </div>
            <div className="center">
                <div className="title">
                    <h3 > Links</h3>
                </div>
                
                    <ul>
                        <li>
                            Home
                        </li>
                        <li>
                            Cart
                        </li>
                        <li>
                            Mens
                        </li>
                        <li>
                            Women
                        </li>
                        <li>
                            Accessories
                        </li>
                        <li>
                            Wish List
                        </li>
                        <li>
                            Terms
                        </li>

                    </ul>
                
            </div>
            <div className="right">
                <div className="title">
                    <h4>Contact.</h4>
                </div>
                <div className="container">
                    <Phone />    <h4>(+251) 0911223344</h4>
                </div>
                <div className="container">
                    <Mail />        <h4>betelezra@gmail.com</h4>
                </div>

                <div className="container">
                    <Room />     <h4>   Ethiopia, Addis Ababa around Bole</h4>
                </div>

            </div>

        </div>
    )
}
