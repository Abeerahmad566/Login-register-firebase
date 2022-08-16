import React,{useState} from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import './register.css'
import {auth,app} from "../../firebase";
import { collection,addDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

const Register = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 
  const db = getFirestore(app);
  const RegisterUser= async()=>{
      try{
        const user =await createUserWithEmailAndPassword(auth,email,password);
        console.log(user);
        await addDoc(collection(db,"users"),
        {
email:email,
password:password
        }).then(function(res){
          alert("data is submitted")
        }).catch(function(err)
        {
          alert(err)
        })
        window.location.href = "/login";
              } catch(error){
                console.log(error);
              }
            }
  const onlogin=()=>{
            window.location.href="/login";
           }


  return (
    <div > 
          <div className="registerwrapper">
            <span className="rgstrtxt">Register</span>
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
            
            <br/>
            
            <button
              className="registerButton"
              onClick={
                RegisterUser
              }
            >
              Register
            </button>
            <button
              className="registerButton"
              onClick={
                onlogin
              }
            >
              Login
            </button>
          </div>
        </div>
      
   
  );
  
};

export default Register;