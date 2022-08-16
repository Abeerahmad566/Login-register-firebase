import {auth} from "../../firebase"
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useState } from "react";
export default function Home()
{
    const[user,setUser]=useState("");
    onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
        });
        const logout=async()=>{
            await signOut(auth);
            window.location.href='/login'
        }

       
    return(
        <>
       
        <h3>{user.email}</h3>
        <button onClick={logout}>Logout</button>
          
              
        </>
    )
}