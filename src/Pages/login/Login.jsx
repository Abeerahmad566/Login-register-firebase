import React from "react";
import { Link } from "react-router-dom";
import './login.css'
import {useState} from "react"
import {auth} from "../../firebase"
import {

  signInWithEmailAndPassword,

} from "firebase/auth"

const Login = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
const onRegister=()=>{
window.location.href="/";
}
  
  const LoginUser= async()=>{
    try{
      const user =await signInWithEmailAndPassword(auth,email,password);
      console.log(user);
      window. window.location.href = "/home";
            } catch(error){
              console.log(error);
            }
          }
  return(
    <div >


        
        <div className="col-sm registerwrapper">
          <span className="rgstrtxt">Login</span>
          <br />
          
       
          <label style={{ marginTop: '20px' }}><b>Enter Your Email</b></label>
          <br />
          <input
            placeholder="johndoe@gmail.com"
            className="registerInput"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />{" "}
          <br />
          <label style={{ marginTop: '20px' }}><b>Enter Your Password</b></label>
          <br />
          <input 
            type="password"
            className="pregisterInput"
         
            placeholder="********"
            value={password}
            disableUnderline
            onChange={(e) => {
              setPassword(e.target.value)
            }}
           
          />{" "}
          
          <br />
          <button
            className="registerButton"
            onClick={
              LoginUser
            }
          >
            Login
          </button>
          <button
            className="registerButton"
            onClick={
              onRegister
            }
          >
            Register
          </button>
        </div>
      </div>
   
  );
};

export default Login;
