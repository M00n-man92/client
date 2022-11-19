import React, { useEffect, useState } from 'react'
import "./timer.scss"
export default function Timer() {
  const countdown = new Date("Nov 20, 2022 00:00:00").getTime()
  const now = new Date().getTime()
  var p,d,r,f;
  const [ days, setDays] = useState(0);
  const [ hours, setHours] = useState(0);
  const [ minutes, setMin] = useState(0);
  const [ sec, setSecs] = useState(0);

  useEffect(()=>{
    const c = ()=>{
      setInterval(()=>{
        const difference = countdown - now;
        setDays( Math.floor(difference / (1000 * 60 * 60 * 24 )))
        setHours( Math.floor((difference %  (1000 * 60 * 60 * 24 )) / (1000 * 60 * 60)))
        setMin( Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)))
        setSecs(Math.floor((difference % (1000 * 60)) / 1000))
      },1000)
    }
    c();
  },[sec])
//   const timer = setInterval(()=>{
//     const difference = countdown - now;
// var p = Math.floor(difference / (1000 * 60 * 60 * 24 ))
// var d = Math.floor((difference %  (1000 * 60 * 60 * 24 )) / (1000 * 60 * 60))
// var r =  Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
// var f =  Math.floor((difference % (1000 * 60)) / 1000)
// document.getElementById("days").innerHTML = p;
// document.getElementById("hours").innerHTML = d;
// document.getElementById("mins").innerHTML = r;
// document.getElementById("secs").innerHTML = f;
/* setDays(p)
    setHours(d )
    setMin(r)
    setSecs(f) */
    // console.log(difference);
  // },1000)
  
  return (

    <div className='timer'>
      <div className="first">
        <h3>
          Deal of The Day
        </h3>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper congue erosget tincidunt </span>
        <div className="countercontainer">
          <div className="individual">
            <h3 >
              {days}
            </h3>
            <span>
              Days
            </span>
          </div>
          <div className="individual">
            <h3 >{hours}</h3>
            <span>Hours</span>
          </div>
          <div className="individual">
            <h3 >{minutes}</h3>
            <span>Min</span>
          </div>
          <div className="individual">
            <h3 >{sec}</h3>
            <span>sec</span>
          </div>
        </div>
        <button>SHOP NOW</button>
      </div>
      <div className="second">
        <img src="./assets/Gojjam Amhara.jfif" alt="" />
      </div>
    </div>
  )
}
