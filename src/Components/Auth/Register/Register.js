import React,{useState,useContext} from 'react'
import {AuthContetx} from '../../../context/Auth'
import {useNavigate} from 'react-router-dom'
import '../Style.css'
function Register() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [name,setName] = useState('')
    const {RegisterAuth} = useContext(AuthContetx)
    const navigate = useNavigate()
   const Register = (e)=>{
    e.preventDefault()
    RegisterAuth(email, password,name)
    navigate('/login')
   }
  return (
 
 
    <div className="login-pg">
    <div className="login-form-area">
      <div className="login-form">
      <div className="login-heading">
        <span>Register</span>
        <p>Enter Register details to get access</p>
      </div>
      <div className="login-box">
      <div className="single-input-feilds">
          <label for="" className="label">Username </label>
          <input  value={name}  placeholder="Email Address"  name="name"
        onChange={(e)=>setName(e.target.value)} />
          
        </div>
        <div className="single-input-feilds">
          <label for="" className="label">Email Address</label>
          <input  value={email}  placeholder="Email Address" name="email"
        onChange={(e)=>setEmail(e.target.value)} />
        
        </div>
        <div  className="single-input-feilds">
        <label className="label"> Password</label>
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
    
        <button className="submit-btn3-register submit-btn3" onClick={Register}>Register </button>
      </div>
    </div>
    </div>

  
  </div>
  )
}

export default Register