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

  const Logout = async () => {
    return signOut(auth);
  };

  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       setUser(user);
  //       setloading(false);
  //     } else {
  //       setUser(null);
  //       setloading(false);
  //     }
  //   });
  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      setUser(currentUser);
      setloading(false);
      // if user exists then issue a token
      if (currentUser) {
        axios
          .post(`${import.meta.env.VITE_API_URL}/jwt`, loggedUser, {
            withCredentials: true,
          })
          .then((res) => {});
      } else {
        axios
          .post(`${import.meta.env.VITE_API_URL}/logout`, loggedUser, {
            withCredentials: true,
          })
          .then((res) => {});
      }
    });
    return () => {
      return unsubscribe();
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
