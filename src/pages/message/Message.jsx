// import React, { useRef } from 'react'
import Announcemets from '../announcmenet/Announcemets'
import Chat from '../chat/Chat'
import Footer from '../footer/Footer'
import { useEffect, useRef } from 'react'
import axios from 'axios'
import Nav from '../nav/Navigation'
import './message.scss'
import { useState } from 'react'
import { publicRequest } from '../../requestMethods'
import Conversation from '../conversation/Conversation'
import { userRequest } from '../../requestMethods'
import { io } from 'socket.io-client'

export default function Message({ own }) {
    const [convo, setConvo] = useState([])
    const [newmessage, setNewMessage] = useState("")
    const [current, setCurrent] = useState('')
    const [message, setMessage] = useState([])
    const [otheruserpic, setOtheruserpic] = useState()
    const [otheruserid, setOtheruserid] = useState()
    const [arrivalmessage, setArrivalmessage] = useState()
    const [newcurrent, setNewcurrent] = useState()
    // const [socket, setSocket] = useState(null)
    const scrollref = useRef()
    const socket=useRef()
    var people = localStorage.getItem("persist:root")
    var its_my_jam
    var keepittrue
    var lovelokedown
    var alister
    var itrindad
    var id
    var pic
    // var otheruserpic
    if (people) {
        its_my_jam = JSON.parse(people).user
        keepittrue = JSON.parse(its_my_jam).currentUser
        // console.log(keepittrue)
        if (keepittrue !== null) {
            lovelokedown = keepittrue.success
            // console.log(lovelokedown)
            itrindad = keepittrue.data
            id = itrindad._id
            pic = itrindad.profilepic

        }
        else if (keepittrue === null) {
            alister = true
            // console.log("dundundun "+ alister)
        }

    }
    useEffect(() => {
        socket.current=io("https://chatrendering.herokuapp.com/")
        socket.current.on("getMessage",data=>{
            setArrivalmessage({
                sender:data.senderId,
                text:data.text,
                createdAt:Date.now()
            })
        })
    }, [])


    useEffect(() => {
        socket.current.emit("addUser",id) 
        // console.log(socket)
        socket.current.on("getUsers",users=>{})
    }, [id])

useEffect(()=>{
    arrivalmessage&&newcurrent?.members.includes(arrivalmessage.sender)&&
    setMessage((prev)=>[...prev,arrivalmessage])
},[arrivalmessage,newcurrent])
    // console.log(socket)
    useEffect(async () => {
        const getconvo = async () => {
            try {
                const findin = await userRequest.get(`conversation/${id}`)
                if (findin) {
                    // console.log(findin.data)
                    setConvo(findin.data.data)



                }
                else {

                }
            } catch (e) {
                console.log(e)
            }
        }
        getconvo()
    }, [id])
    useEffect(() => {
        const getmessages = async () => {
            // console.log("i di it or the glort")
            try {
                const nerves = await userRequest.get(`message/${id}/${current}`)
                if (nerves) {
                    setMessage(nerves.data.data)

                    const ready = await userRequest.get(`conversation/${id}/${current}`)
                    const jay = ready.data.data
                    // console.log(jay)

                    const nonuser = jay.members.find((m) => m !== id)
                    // console.log(jay[0].members)
                    const launge = await userRequest.get(`user/find/${id}/${nonuser}`)
                    if (launge) {
                        setOtheruserpic(launge.data.data.profilepic)
                        setOtheruserid(launge.data.data._id)
                        // console.log(otheruserid)
                    }
                }
            }
            catch (e) {
                console.log(e.response)
            }


        }
        getmessages()
    }, [current])
// console.log(newcurrent)
    const handlesending = async (e) => {
        e.preventDefault()
        try {
            socket.current.emit("sendMessage",{senderId:id,reciverId:otheruserid,text:newmessage})
            const bruhh = { conversationId: current, sender: id, text: newmessage }
            // console.log(bruhh)
            const hola = await userRequest.post(`message/newmessage/${id}/`, bruhh)
            if (hola) {
                setMessage([...message, hola.data.data])
                setNewMessage("")
            }
        }
        catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        scrollref.current?.scrollIntoView({ behavior: "smooth" })
    }, [message])
    return (
        <div className='message'>
            <div className="header">
                <Announcemets />
                <Nav />
            </div>
            <div className="wrapper">
                <div className="goodmornin">
                    <div className="wutang">
                        {convo.map((item, i) => (<div className="rollinwiththisone" key={i} onClick={(e) => {setCurrent(item._id); setNewcurrent(item)}}>
                            <Conversation conver={item} user={id} />
                        </div>))}


                    </div>
                </div>
                {current === '' ? <div className='imnotsureanymore'><span >Any Issues or questions? Don't be shy, lets talk and have a conversation.</span> </div> : <div className="goodmorinin">

                    <div className="youknowwht" >
                        {message.map((item, i) => (item.sender === id ? <div ref={scrollref} key={i + 9}><Chat message={item.text} picture={pic} own={true} time={item.createdAt} /></div> : <div ref={scrollref} key={i + 984}><Chat message={item.text} picture={otheruserpic} time={item.createdAt} /></div>))}
                        {/* item.sender===id?<Chat own={true} message={item.text} picture={pic}/>:item.sender===current?<Chat message={item.text} picture={pic}/>:<></> */}
                        {/* {item.sender===id?(<Chat own={true} message={item.text} picture={pic}/>):(<Chat message={item.text}/>)} */}
                    </div>
                    <div className="whatitreallymeans">
                        <div className="findyourdreams">
                            <div className="immabeonmtvmama">
                                <textarea name="" id="" cols="30" rows="4" onChange={(e) => { setNewMessage(e.target.value) }} value={newmessage}></textarea>
                            </div>

                            <button className="igoformint" onClick={handlesending}>send</button>
                        </div>

                    </div>
                </div>}

                <div className="somethinelse">
                  {/* <snap>this be the way</snap>   */}
                </div>

            </div>
            <div className="fotter">
                {/* <Footer /> */}
            </div>
        </div>
    )
}
