import React,{useState,useContext} from 'react'
import {AuthContetx} from '../../../context/Auth'
function Register() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [name,setName] = useState('')
    const {RegisterAuth} = useContext(AuthContetx)
   const Register = (e)=>{
    e.preventDefault()
    RegisterAuth(email, password,name)
   }
  return (
 
    <div>
        <form>
            <label>Name</label>
            <input type="text" name="name" placeholder="Enter your name" 
            value={name} onChange={(e)=>setName(e.target.value)}
            />
             <label>Email</label>
            <input type="text" name="email" placeholder="Enter your email" 
            value={email} onChange={(e)=>setEmail(e.target.value)}
            />
             <label>password</label>
            <input type="password" name="password" placeholder="Enter your password" 
            value={password} onChange={(e)=>setPassword(e.target.value)}
            />
            <button type="submit" onClick={Register}>Register</button>
        </form>

    </div>
  )
}

export default Register