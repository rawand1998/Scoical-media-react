import React,{useState,useContext} from 'react'
import {AuthContetx} from '../../../context/Auth'
import {useNavigate} from 'react-router-dom'
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
    <div>
    <form>
        
         <label>Email</label>
        <input type="text" name="email" placeholder="Enter your email" 
        value={email} onChange={(e)=>setEmail(e.target.value)}
        />
         <label>password</label>
        <input type="password" name="password" placeholder="Enter your password" 
        value={password} onChange={(e)=>setPassword(e.target.value)}
        />
        <button type="submit" onClick={Login}>Login</button>
    </form>

</div>
  )
}

export default Login