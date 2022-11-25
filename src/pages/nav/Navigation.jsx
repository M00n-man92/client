import './navi.scss'
import { ArrowForwardIosOutlined, ArrowBackIosNewOutlined, ShoppingBagOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
// import { logoutSuccess } from '../../redux/userRedux';
import { LogoutOutlined } from '@mui/icons-material';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/apiCall'
import { useHistory } from 'react-router-dom';
import { publicRequest } from '../../requestMethods'
import { useLocation } from 'react-router'
// import { Link } from 'react-router-dom'
// import {useNavigate}

export default function Nav() {
	// const likes = useSelector(state => state.like)
	// const likesnum = likes.quantity
	const [itemm, setitemm] = useState(0)
	const quantity = useSelector(state => state.cart.quantity)
	// const user = useSelector(state => state.user)
	const location = useLocation()
	// console.log(location.pathname)

	var people = localStorage.getItem("persist:root")
	var its_my_jam
	var keepittrue
	var lovelokedown
	var alister
	const history = useHistory()
	const dispatch = useDispatch()
	const nion = (digits) => {
		if (digits === "l") {
			itemm !== 0 ? setitemm(itemm - 1) : setitemm(3)
			// console.log(itemm)
		}
		else if (digits === "r") {
			itemm !== 3 ? setitemm(itemm + 1) : setitemm(0)
			// console.log(itemm)
		}
	}
	const lbetenestwal = async () => {

		await logout(dispatch)
		history.push(location.pathname)
		window.location.reload()
	}
	// const [weare, setWeare] = useState([])
	// const [tadyaechilij, setTadyaechilij] = useState(true)
	/* const wegesha = async (chnke) => {
		// console.log("fiker alrgn " +chnke.length)

		if (chnke.length === 0) {
			// console.log("lemr ynegen maenger")
			setWeare([])
			setTadyaechilij(true)
		}
		else if (chnke.length >= 0) {
			// console.log("alegn")
			try {
				const huluaynger = await publicRequest.get(`product/search?q=${chnke}`)
				// console.log(huluaynger)
				setTadyaechilij(huluaynger.data.success)
				setWeare(huluaynger.data.data.slice(0, 8))
				// console.log(weare)
			}
			catch (e) {
				console.log(e)
			}
		} 
	}*/

	useEffect(() => {

	}, [lbetenestwal])
	if (people) {
		its_my_jam = JSON.parse(people).user
		keepittrue = JSON.parse(its_my_jam).currentUser
		// console.log(keepittrue)
		if (keepittrue !== null) {
			lovelokedown = keepittrue.success
			// console.log(lovelokedown)

		}
		else if (keepittrue === null) {
			alister = true
			// console.log("dundundun "+ alister)
		}

	}
	return (

		<div className="wrapper">
			<div className={`center ${alister ? "yetmbihon" : ""}`}>
				<Link className='link' to="/">
					<div className="higer" >
						<h3>Ethiopian</h3>
					</div>
					<div className="lower">
						<span>
							Fashion
						</span>
					</div>
				</Link>
			</div>
			<div className="left">

				<div className="lightnigga">

					<ArrowBackIosNewOutlined className='ion' onClick={() => nion("l")} />
				</div>
				<div className="killakilla">
					<div className='mneyeserahnew' style={{ transform: `translateX(${-12 * itemm}vw)` }}>
						<Link className='link' to="/clothingproducts/men">
							<div className="navigatoe">
								<span>MEN</span>
							</div>
						</Link>
						<Link className='link' to="/clothingproducts/women">
							<div className="navigatoe">
								<span>WOMEN</span>
							</div>
						</Link>
						<Link className='link' to="/clothingproducts/women">
							<div className="navigatoe">
								<span>KIDS</span>
							</div>
						</Link>
						<Link className='link' to="/clothingproducts/women">
							<div className="navigatoe">
								<span>COLLECTIONS</span>
							</div>
						</Link>


						<Link className='link' to="/accessory">
							<div className="navigatoe">
								<span>TRENDS</span>
							</div>
						</Link>


					</div>
				</div>

				<div className="darknigga">
					{/* <img src="/assets/arrowr.png" alt="" /> */}

					<ArrowForwardIosOutlined className='ion' onClick={() => nion("r")} />
				</div>

			</div>

			<div className={`right ${lovelokedown ? "take" : ""}`}>
				<div className="container">
					<Link className="link" to="/cart">
						<div className={`image ${lovelokedown ? "likeido" : ""}`}>

							<Badge badgeContent={quantity} max={10} anchorOrigin={{ horizontal: 'right', vertical: "top", marginLeft:"10%" }}  color="error" className='image' >
								<div className="star">
									<ShoppingBagOutlined className="belhidatenager" />
								</div>
							</Badge>

						</div>
					</Link>
					{/* <Link className='link' to="/likes">
						<div className={`image ${lovelokedown ? "likeido" : ""}`}>
							<Badge anchorOrigin={{ horizontal: 'right', vertical: "top" }} overlap="circular" color="primary" className="somethin">
								<FavoriteBorder className="belhidatenager"></FavoriteBorder>
							</Badge>
						</div>
					</Link> */}
					{lovelokedown ?
						<div className="suicidal">

							{/* <div className="star">
								<Link className="link" to="/message"><MessageOutlined className="belhidatenager" /></Link>
							</div> */}

							<div className="star">
								<LogoutOutlined onClick={lbetenestwal} className="belhidatenager" />
							</div>


						</div>

						: <div className="rocky">
							<div className="ereesey">
								<Link className="link" to="/login">
									<span>Login</span>
								</Link>
							</div>
							{/* <div className="ereesey">

								<Link className="link" to="/register">  <span>Signup</span>
								</Link>
							</div> */}

						</div>}

				</div>

			</div>
		</div >


	)
}
