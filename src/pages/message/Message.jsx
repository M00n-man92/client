import React from 'react'
import Announcemets from '../announcmenet/Announcemets'
import Footer from '../footer/Footer'

import Nav from '../nav/Navigation'
import './message.scss'
export default function Message() {
    return (
        <div className='message'>
            <div className="header">
                <Announcemets />
                <Nav />
            </div>
            <div className="wrapper">
                <div className="goodmorinin">
                    <div className="youknowwht">

                    </div>
                    <div className="whatitreallymeans">
                        <div className="findyourdreams">
                            <div className="immabeonmtvmama">
                                <textarea name="" id="" cols="30" rows="7"></textarea>
                            </div>

                            <button className="igoformint">send</button>
                        </div>

                    </div>
                </div>

            </div>
            <div className="fotter">
                <Footer />
            </div>
        </div>
    )
}
