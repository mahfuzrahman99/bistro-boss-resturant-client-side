/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
// import axios from "axios";
import app from "../firebase/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  const updateTheProfile = (name, picture) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: picture,
    });
  };
  console.log(user);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const signInWithGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      setUser(currentUser);

      // JWT post using local storage
      if (currentUser) {
        // get token and store client
        axiosPublic.post("/jwt", loggedUser,{withCredentials: true,}).then((res) => {
          console.log(res.data.token);
          if (res.data.token) {
            localStorage.setItem("access-token", res.data.token);
            setLoading(false);
          }
        });
      } else {
        localStorage.removeItem("access-token");
        setLoading(false);
      }

      // JWT post using cookies
      // if (currentUser) {
      //   axiosPublic
      //     .post("/jwt", loggedUser, {
      //       withCredentials: true,
      //     })
      //     .then((res) => {
      //       console.log("Token Response", res.data);
      //       setLoading(false);
      //     });
      // } else {
      //   axiosPublic
      //     .post("/logOut", loggedUser, {
      //       withCredentials: true,
      //     })
      //     .then((res) => {
      //       console.log(res.data);
      //       setLoading(false);
      //     });
      // }
    });
    return () => {
      return unSubscribe();
    };
  }, [user, axiosPublic]);

  useEffect(() => {
    if (user?.email) {
      setLoading(false);
    }
  }, [user?.email]);

  const authInfo = {
    user,
    loading,
    updateTheProfile,
    createUser,
    signInUser,
    signInWithGoogle,
    signInWithGithub,
    logOut,
    setLoading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
