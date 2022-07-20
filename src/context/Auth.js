import React, { useState } from "react";
import { auth, db } from "../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
export const AuthContetx = React.createContext();

function AuthProviders({ children }) {
  const [userid, setUserId] = useState("");
  const [postsId, setPostsId] = useState("");
  const [allPost, setAllPost] = useState([]);
  const [comments, setComments] = useState([]);
  const [getUser, setGetUser] = useState([]);
  const [user] = useAuthState(auth);
  const [name, setName] = useState("");
  const [profile, setProfile] = useState([]);
  const [like, setlike] = useState([]);
  const [userNames, setUserNames] = useState([]);
  const users = auth.currentUser;
  const RegisterAuth = async (email, password, name) => {
    try {
      await auth.createUserWithEmailAndPassword(email, password).then((res) => {
        const user = res.user;
        db.collection("users").doc(user.uid).set({
          uid: user.uid,
          name: name,
          email: email,
        });
        setName(name);
        console.log(name);
      });
    } catch (err) {
      console.error(err, "err");
    }
  };

  const LoginAuth = async (email, password) => {
    try {
      await auth.signInWithEmailAndPassword(email, password).then((res) => {
        setUserId(res.user.uid);
        console.log("User");
      });
    } catch (err) {
      console.log(err, "err");
    }
  };
  const AddPost = async (text) => {
    try {
      db.collection("posts")
        .add({
          uid: userid,
          text: text,
          name: name,
        })
        .then((res) => {
          setPostsId(res.id);
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
        // name:name
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
  const getAllComment = async (postId) => {
    console.log(postId);

    db.collection("comments")
      .where("postId", "==", postId.id)
      .onSnapshot((snapshot) => {
        setComments(snapshot.docs.map((doc) => doc.data()));
        console.log(comments);
      });
  };

  const getlike = async (postId) => {
    console.log(postId);

    db.collection("likes")
      .where("postId", "==", postId.id)
      .onSnapshot((snapshot) => {
        setlike(snapshot.docs.map((item) => ({ ...item.data(), id: item.id })));
      });
  };
  const userProfile = (userId) => {
    console.log(userId.id);
    db.collection("posts")
      .where("uid", "==", userId.id)
      .onSnapshot((snapshot) => {
        setProfile(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        console.log(profile, "porfile from auth");
      });
  };

  const userName = () => {
    db.collection("users")
      .where("uid", "==", users.uid)
      .onSnapshot((snapshot) => {
        console.log(snapshot, "snapshoe");
        setUserNames(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
        console.log(userNames, "porfile from auth");
      });
  };

  const singlePost = (id)=>{
    console.log(id,"id")
    db.collection("posts")
    .doc(id.id).get().then((doc)=>
    
    setGetUser(doc.data(),"doc"))
    

  }
  // const getUserName = () => {
   
  //   console.log(allPost,"uid post")
  //   db.collection("users").onSnapshot((snapshot) => {
  //     console.log(snapshot, "snapshoe");
  //     setGetUser(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //     console.log(getUser, "porfile from auth");
  //   });
  // };

  return (
    <AuthContetx.Provider
      value={{
        singlePost,
        getUser,
        RegisterAuth,
        LoginAuth,
        userid,
        AddPost,
        AddComments,
        AddLikes,
        getAllPosts,
        allPost,
        getAllComment,
        comments,
        like,
        getlike,
        name,
        userProfile,
        profile,
        userName,
        userNames,
        users,

 

      }}
    >
      {children}
    </AuthContetx.Provider>
  );
}

export default AuthProviders;
