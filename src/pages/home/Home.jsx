import Announcemets from '../announcmenet/Announcemets'
import Catagories from '../catgories/Catagories'
import Footer from '../footer/Footer'
import Nav from '../nav/Navigation'
import Products from '../products/Products'
import './home.scss'

export default function Home() {
    return (
        <div className="home">
            <Announcemets/>
            <Nav/>
            <Catagories/>
            <Products/>
            <Footer/>
        </div>
    )
}
