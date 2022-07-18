import React, { useState } from "react";
import { auth, db } from "../firebase/firebase";
export const AuthContetx = React.createContext();

function AuthProviders({ children }) {
  const [userid, setUserId] = useState("");
  const [postsId,setPostsId] = useState("");
  const [allPost, setAllPost] = useState([]);
  const [comments,setComments]= useState([]);

  const [like,setlike] = useState([])
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
      db.collection("posts")
        .add({
          uid: userid,
          text: text,
        })
        .then((res) => {
          setPostsId(res.id)
        });
    } catch (err) {
      console.log(err);
    }
  };
  const AddComments = async (comment, postId) => {
    try {
      db.collection("comments").add({
        uid: userid,
        postId: postId,
        comment: comment,
      });
    } catch (err) {
      console.log(err);
    }
  };
  const AddLikes = async (likes, postId) => {
    try {
      db.collection("likes").doc().set({
        uid: userid,
        postId: postId,
        likes,
      });
    } catch (err) {
      console.log(err);
    }
  };
  const getAllPosts = async () => {

    try {
      db.collection("posts").onSnapshot((snapshot) => {
        setAllPost(
          snapshot.docs.map((item) => ({ ...item.data(), id: item.id }))
        );
      });
    } catch (err) {
      console.log(err);
    }
  };
  const getAllComment= async(postId)=>{
    console.log(postId)
    
    db.collection('comments').where('postId','==',postId).onSnapshot((snapshot) => {
      setComments(
        snapshot.docs.map((item) => ({ ...item.data(), id: item.id }))
      );
    })
  }

  const getlike= async(postId)=>{
    console.log(postId)
    
    db.collection('likes').where('postId','==',postId).onSnapshot((snapshot) => {
      setlike(
        snapshot.docs.map((item) => ({ ...item.data(), id: item.id }))
      );
    })
  }
  return (
    <AuthContetx.Provider
      value={{
        RegisterAuth,
        LoginAuth,
        userid,
        AddPost,
        AddComments,
        AddLikes,
        getAllPosts,
        allPost,
        getAllComment,comments,like,getlike
      }}
    >
      {children}
    </AuthContetx.Provider>
  );
}

export default AuthProviders;
