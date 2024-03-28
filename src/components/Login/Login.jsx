import React,{useState} from 'react'
import './Login.css'
import { assets } from '../../assets/assets'


const Login = ({SetshowLogin}) => {
  const [currState,setCurrState] = useState("Login")
  return (
    <div className='Login'>
      <form action="" className="Login-container">
        <div className="Login-title">
          <h2>{currState}</h2>
          <img onClick={()=>SetshowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="Login-input">
            {currState ==="Login" ? <></> : <input type="text" placeholder='Your Name' required />}            
            <input type="email" placeholder='Your Email' required />
            <input type="password" placeholder='Password' required />
        </div>
        <button>{currState==="Sign Up"?"Create Account":"Login"}</button>
        <div className="Login-condition">
          <input type="checkbox" required/>
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currState==="Login" ? <p>Create a new Account ? <span onClick={()=>setCurrState("Sign Up")}>Click Here</span></p> 
        : 
        <p>Already have a Account ? <span onClick={()=>setCurrState("Login")}>Login Here</span></p>}
        
        
      </form>
    </div>
  )
}

export default Login
