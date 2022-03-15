import './navi.scss'
import { Person, FavoriteBorder, ShoppingCartOutlined, SearchOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutSuccess } from '../../redux/userRedux';
import { LogoutOutlined } from '@mui/icons-material';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/apiCall'
import { useHistory } from 'react-router-dom';
import { publicRequest } from '../../requestMethods'
import { isAsyncThunkAction } from '@reduxjs/toolkit';
// import { Link } from 'react-router-dom'
// import {useNavigate}
export default function Nav() {
    const quantity = useSelector(state => state.cart.quantity)
    const user = useSelector(state => state.user)


    var people = localStorage.getItem("persist:root")
    var its_my_jam
    var keepittrue
    var lovelokedown
    var alister
    const history = useHistory()
    const dispatch = useDispatch()
    const lbetenestwal = () => {
        logout(dispatch)

        history.push("/")
    }
    const [weare, setWeare] = useState([])
    const [tadyaechilij, setTadyaechilij] = useState(true)
    const wegesha = async (chnke) => {
        // console.log("fiker alrgn " +chnke.length)
        
    if(chnke.length==0){
            // console.log("lemr ynegen maenger")
            setWeare([])
            setTadyaechilij(true)
            }
        else if (chnke.length>=0){
            // console.log("alegn")
            try {
                const huluaynger = await publicRequest.get(`product/search?q=${chnke}`)
                // console.log(huluaynger)
                setTadyaechilij(huluaynger.data.success)
                setWeare(huluaynger.data.data.slice(0,8))
                // console.log(weare)
            }
            catch (e) {
                console.log(e)
            }
        }
        
        

    }
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
            <div className="left">
                {/* <div className="languge">
                        <span>EN</span>
                    </div> */}
                <Link className="link" to="/">
                    <div className="navigatoe">
                        <span>Home</span>
                    </div></Link>
            </div>
            <div className={`center ${alister ? "yetmbihon" : ""}`}>
                <h3>LEYU CLOTHING</h3>
            </div>
            <div className={`right ${lovelokedown ? "take" : ""}`}>
                <div className="container">
                    <div className="itrusteverypartofyou">
                        <div className="serasch">
                            <input type="text" className={`uworryaboutthewrongthings ${lovelokedown ? "uworryaboutthewrongthingsbabe" : ""}`} placeholder='Search products ' onKeyUp={(e) => wegesha(e.target.value.trim())} />
                            <SearchOutlined />






                        </div>
                        <div className="tellmewhaturwaitnfor">
                           
                                {tadyaechilij?weare?weare.map((item, i) => ( <div className="alegineneeye" key={i}><Link to={`/product/${item._id}`}  className="link" key={i}>{item.title}</Link></div>)):<span></span>:
                                <div className="alegineneeye">
                                <span>No search results</span>
                                </div>
                                
                                }
                               
                            
                        </div>


                    </div>
                    <Link className="link" to="/cart">
                        <div className={`image ${lovelokedown ? "likeido" : ""}`}>

                            <Badge  badgeContent={quantity} anchorOrigin={{ horizontal: 'left', vertical: "top" }} overlap="circular" color="primary"  ><ShoppingCartOutlined /></Badge>

                        </div>
                    </Link>
                    {/* <div className="image">

                        <Badge badgeContent={quantity} anchorOrigin={{horizontal:'left',vertical:"top"}} overlap="circular" color="primary" className="somethin"><FavoriteBorder></FavoriteBorder></Badge>
                        </div> */}

                    {lovelokedown ? <div className="image">
                        <LogoutOutlined onClick={lbetenestwal} className="belhidatenager" />

                    </div> : <>
                        <div className="ereesey">
                            <Link className="link" to="/login">  <span>Login</span>
                            </Link>
                        </div>
                        <div className="ereesey">

                            <Link className="link" to="/register">  <span>Register</span>
                            </Link>
                        </div>
                    </>}

                </div>

            </div>
        </div>


    )
}
