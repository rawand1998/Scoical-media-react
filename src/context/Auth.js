import React,{useState} from 'react';
import {auth,db} from '../firebase/firebase'
export const AuthContetx = React.createContext()
function AuthProviders({children }){
    const [userId,setUserId] = useState('') 
    const RegisterAuth = async (email,password,name)=>{
        console.log(email,password,name)
      try{
      await  auth.createUserWithEmailAndPassword(email,password).then((res)=>{
            const user = res.user
          setUserId(res.user)
            console.log(userId)
            db.collection('users').doc(user.uid).set({
                uid: user.uid,
                name:name,
                email:email
            })
    
        })
      }catch(err) {
        console.error(err,"err")
      }
       
         
    }
    return <AuthContetx.Provider value={{RegisterAuth}}>
        {children }
    </AuthContetx.Provider>
}


export  default AuthProviders