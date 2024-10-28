import { createContext } from "react"


const AuthContext=createContext()

const AuthProvider = ({children}) => {

    const allinfo={

    }
  return (
   <AuthContext.Provider value={allinfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider