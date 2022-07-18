import React, { useState } from "react";
import { auth, db } from "../firebase/firebase";
export const AuthContetx = React.createContext();

function AuthProviders({ children }) {
  const [userid, setUserId] = useState("");
  const [postId,setPostId] = useState("");

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
  const LoginAuth = async (email, password) => {
    try {
      await auth.signInWithEmailAndPassword(email, password).then((res) => {
        setUserId(res.user.uid);
      });
    } catch (err) {
      console.log(err, "err");
    }
  };
  const AddPost = async (text) => {
    console.log(text, "id", userid);
    try {
      db.collection("posts").add({
        uid: userid,
        text: text,
      }).then((res)=>{
      
        setPostId(res.id)
        
      })
    } catch (err) {
      console.log(err);
    }
  };
  const AddComments = async (comment) => {
    try {
      db.collection("comments").add({
        uid: userid,
        postId:postId,
        comment: comment,
      });
    } catch (err) {
      console.log(err);
    }
  };
  const AddLikes = async (likes) => {
    try {
      db.collection("likes").add({
        uid: userid,
        postId:postId,
        likes: likes,
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <AuthContetx.Provider
      value={{ RegisterAuth, LoginAuth, userid, AddPost, AddComments, AddLikes }}
    >
      {children}
    </AuthContetx.Provider>
  );
}

export default AuthProviders;
