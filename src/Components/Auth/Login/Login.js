import React,{useState,useContext} from 'react'
import {AuthContetx} from '../../../context/Auth'
import {useNavigate,Link} from 'react-router-dom'
import '../Style.css'
function Login() {
    const [email,setEmail] = useState('')
const [password,setPassword] = useState('')
const navigate = useNavigate()

const {LoginAuth} = useContext(AuthContetx)

const Login =(e)=>{
    e.preventDefault()
    LoginAuth(email,password)
    navigate('/')
}
  return (
    <div className="login-pg">
    <div className="login-form-area">
      <div className="login-form">
      <div className="login-heading">
        <span>Login</span>
        <p>Enter Login details to get access</p>
      
      </div>
      <div className="login-box">
        <div className="single-input-feilds">
          <label for="" className="label">Email Address</label>
          <input  value={email}  placeholder="Email Address" name="email"
        onChange={(e)=>setEmail(e.target.value)} />
         
        </div>
        <div  className="single-input-feilds">
        <label className="label">Password</label>
      <input
        type="password"
        placeholder="Email Address"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        name="password"
      />
       
        </div>
       
      </div>
      <div className="login-footer">
        <p> Don’t have an account? <Link to="/register">Sign Up</Link></p>
        <div className="login-btns">
        <button className="submit-btn3" onClick={Login}>Login </button>
        
        </div>
       
      </div>
    </div>
    </div>

  
  </div>

  )
}

export default Login