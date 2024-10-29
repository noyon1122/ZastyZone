import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

 export const AuthContext=createContext(null)
 const auth=getAuth(app)
 const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
  const [user,setUser]=useState(null)
  const [loading,setLoading]=useState(true)

 //Create User function using email and password
  const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword (auth,email,password)
  }

  //SignIn with Google

  const signInWithGoogle=()=>{
    setLoading(true)
    return signInWithPopup (auth,googleProvider)
  }
  //login/sign In with email and password
  const signIn=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }

  const logOut=()=>{
    setLoading(true)
    return signOut(auth)
  }

  //Update user profile


  const updateUserProfile = (name,photo)=>{
  
    return updateProfile(auth.currentUser, {
     displayName:name,
     photoURL:photo
    })
  }

  //OnAuthChange State
  useEffect(()=>{
      
    const unsubscribe=onAuthStateChanged(auth,currentUser=>{
       setUser(currentUser)
       setLoading(false)
    })
    return ()=>{
      return unsubscribe()
    }

  },[])

    const allinfo={
      user,setUser,loading,
      setLoading,
      createUser,
      signInWithGoogle,
      signIn,
      logOut,
      updateUserProfile
    }
  return (
   <AuthContext.Provider value={allinfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider