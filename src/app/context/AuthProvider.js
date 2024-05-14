import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import auth from "../firebase/firebase";
import axios from "axios";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loading, setloading] = useState(true);
  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider();

  const CreateUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const Signin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const GoogleLogin = () => {
    return signInWithPopup(auth, provider);
  };

  const Updateuser = (name, photourl) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photourl,
    });
  };

  const Logout = async () => {
    const { data } = await axios(`${import.meta.env.VITE_API_URL}/logout`, {
      withCredentials: true,
    });
    console.log(data);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setloading(false);
      } else {
        setUser(null);
        setloading(false);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const userinfo = {
    CreateUser,
    Signin,
    GoogleLogin,
    Logout,
    Updateuser,
    loading,
    user,
    setUser,
  };

  return (
    <AuthContext.Provider value={userinfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
