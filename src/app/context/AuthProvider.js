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
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loading, setloading] = useState(false);
  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider();

  const CreateUser = (email, password) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const Signin = (email, password) => {
    setloading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const GoogleLogin = () => {
    setloading(true);
    return signInWithPopup(auth, provider);
  };

  const Updateuser = (name, photourl) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photourl,
    });
  };

  const Logout = () => {
    signOut(auth);
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
