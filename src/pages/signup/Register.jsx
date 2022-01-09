import './register.scss'
import { useState } from 'react'
import { publicRequest } from '../../requestMethods'
import { Link } from 'react-router-dom'
export default function Register() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    console.log(name, email, password)
    const user = { name, email, password }
    const [success, setSuccess] = useState(false)
    const [msg, setMsg] = useState("false")
    const handler = async (e) => {
        e.preventDefault()
        try {
            const res = await publicRequest.post("/user/register", user)
            const rep = res.data
            console.log(rep)
            setSuccess(rep.success)
            setMsg(rep.msg)
        }
        catch (e) {

        }
    }
    console.log(success)
    return (
        <div className="Register">
            <div className="registertitle">Register</div>
            <div className="loki">
                <div className="title">
                    <span>Create New Account</span>
                </div>
                <form className="registerform">
                    <div className="lael"><label> Username</label>
                        <input type="text" placeholder="Your User Name" onChange={e => setName(e.target.value)} /></div>
                    <div className="lael">
                        <label> Email</label>
                        <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="lael">
                        <label> Password</label>
                        <div className="yeyeye">
                            <input type="password" placeholder="password must contain multiple characters" onChange={e => setPassword(e.target.value)} />

                            {password.length < 8 && password.length >= 1 ? <span className="reddevil">please enter more characters</span> : <span></span>}
                        </div>
                    </div>
                    <div className="inside">
                        <span>By joining this platform you've agreed to our <b>Privacy Policy</b>  </span>
                    </div>
                    <div className="klill"> <button type="submit" onClick={handler}>Register</button>
                        {success ? <span>{msg}</span> : <span></span>}
                    </div>

                </form>
            </div>

            <div className="tio"><h4>Do you have an account?</h4>
                <Link to="/login" className='link'><button  >Login </button></Link></div>



        </div>
    )
}
