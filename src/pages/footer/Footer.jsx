import { FacebookOutlined, Instagram, LocationCity, Mail, Phone, Room, Twitter, Telegram } from '@mui/icons-material'
import './footer.scss'
import { Link } from 'react-router-dom'
// import {   } from '@fortawesome/fontawesome-free-solid'
export default function Footer() {
	const dropzoneStyle = (isPreview, notpreview) => ({

		width: (isPreview),
		height: (notpreview),
		color:"#34251F"

	});
	return (

		<div className="footer">
			<div className="title">
				<div className="higer"><h3>Ethiopian</h3></div>
				<div className="lower"><span>Fashion</span></div>
				
			</div>
			<div className="footering">
				<div className="left">

					<div className="discrip">
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacus, auctor pretium ac ultrices. Dui lacus dignissim tincidunt urna, at enim tempo.</p>
					</div>
					<div className="social">
						<div className="container" >
							<a href="https://www.tiktok.com" className='link'>
								<img src='/assets/Tiktok-icon-on-transparent-background-PNG.png' ></img>
							</a>

						</div>
						<div className="container">
							<a href="https://www.instagram.com" className='link'><Instagram style={dropzoneStyle(20, 20)} /></a>
						</div>
						<div className="container">
							<a href="https://t.me/" className='link'> <Telegram style={dropzoneStyle(20, 20)} /></a>
						</div>
						<div className="container">
							<a href="https://facebook.com/" className='link'> <FacebookOutlined style={dropzoneStyle(20, 20)} /></a>
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
						<Phone style={dropzoneStyle(15, 15)} />    <h4>(+251) 0965633343</h4>
					</div>
					<div className="container">
						<Mail style={dropzoneStyle(15, 15)} />        <h4>email2dream2020@gmail.com</h4>

					</div>

					<div className="container">
						<Room style={dropzoneStyle(15, 15)} />     <h4>   Ethiopia, Addis Ababa around Bole</h4>
					</div>

				</div>
				<div className="farright">
					<div className="headering">
						<h3>My Account</h3>
					</div>
					<div className="items">
						<Link to="/login" className='link'>sign in</Link>
						<Link to="/cart" className='link'>view cart</Link>
					</div>
				</div>
			</div>


		</div>
	)
}
