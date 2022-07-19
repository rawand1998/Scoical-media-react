import React,{useState,useEffect,useContext} from 'react'
import { auth, db } from "../../firebase/firebase";
import {useParams} from 'react-router-dom'
import {AuthContetx} from '../../context/Auth'
function Profile() {
    const userIdfromParam = useParams()

const {userProfile,profile}= useContext(AuthContetx)
console.log(profile,"profile")

    useEffect(()=>{
        userProfile(userIdfromParam)
    },[])
  return (
    <div>
        {profile.map((item)=>
        <h1>{item.text}</h1>)}
    </div>
  )
}

export default Profile