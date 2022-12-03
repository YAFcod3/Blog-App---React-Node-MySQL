import { useState,useEffect,createContext} from "react";
import axios from 'axios'





export const AuthContext=createContext();


export const AuthContextProvider=({children})=>{




  const [currentUser,setCurrentUser]=useState(JSON.parse(localStorage.getItem("user")) || null)


  
  //login
  const login =async(inputs)=>{
    const res= await axios.post("http://localhost:8800/api/auth/login",inputs)
    //tener toda la info del usuario
    setCurrentUser(res.data)
  };



  //logout
  const logout=async()=>{
    const res= await axios.post("http://localhost:8800/api/auth/logout")
    setCurrentUser(null)
  };
  


  //persistencia 
  useEffect(() => {
     localStorage.setItem("user",JSON.stringify(currentUser));
  }, [currentUser])







  return (
    <AuthContext.Provider value={{currentUser,login,logout}}> {children}</AuthContext.Provider>
  )

}