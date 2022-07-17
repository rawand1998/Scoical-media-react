import React, { useState } from "react";
import { auth, db } from "../firebase/firebase";
export const AuthContetx = React.createContext();

function AuthProviders({ children }) {
    const [id,setId] = useState('')
  const RegisterAuth = async (email, password, name) => {
    try {
      await auth.createUserWithEmailAndPassword(email, password).then((res) => {
        const user = res.user;
        db.collection("users").doc(user.uid).set({
          uid: user.uid,
          name: name,
          email: email,
        });
      });
    } catch (err) {
      console.error(err, "err");
    }
  };
  const LoginAuth = async (email,password) => {
try{
    await auth.signInWithEmailAndPassword(email,password).then((res)=>{
        
    })

}catch (err) {
    console.log(err, "err");
}

  }
  return (
    <AuthContetx.Provider value={{ RegisterAuth ,LoginAuth}}>
      {children}
    </AuthContetx.Provider>
  );
}

export default AuthProviders;
