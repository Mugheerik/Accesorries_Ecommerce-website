
import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import LoginButton from "./googlelogin"; 
import LogoutButton from "./googlelogout";
import { useEffect } from "react";

import './Signin.css';
import { addsignin, signin } from "../service/api";
const SignInForm=()=> {

  const clientid = "1053601419167-t3acq2mhru5neo86d72qpnjm4t7pb5bg.apps.googleusercontent.com";

  // useEffect(()=>{
  //   function start(){
  //     gapi.client.init({
  //       clientid:clientid,
  //       scope:""
  //     })
  //   };
  //   gapi.load("client:auth2",start);
  // })
  


   const [usersigndata,setUsersigndata] = useState({
        username: "",
        password: ""
      });  
    
  
   const  handleChange=(e)=> {
    setUsersigndata({...usersigndata,[e.target.name]:[e.target.value]});
   }
  
      
  
   const handleSubmit= async(e)=> {
      e.preventDefault();
      await addsignin(usersigndata);
     const data= await signin(usersigndata);
   console.log();

  
      console.log("The form was submitted with the following data:");
    
    }
   
  
    
      return (
        <div className="display">

        <div style={{color:"black"}} className="formCenter card mt-3">

          <form className="formFields" >
            <div className="formField">
              <label className="formFieldLabel" htmlFor="email">
                E-Mail Address
              </label>
              <input
                type="text"
                id="username"
                className="formFieldInput"
                placeholder="Enter your email"
                name="username"
                onChange={(e)=>handleChange(e)}
                />
            </div>
  
            <div className="formField">
              <label className="formFieldLabel" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="formFieldInput"
                placeholder="Enter your password"
                name="password"
                onChange={(e)=>handleChange(e)}
              />
            </div>
  
            <div className="formField">
              <button className="formFieldButton" onClick={(e)=>handleSubmit(e)}  >Sign In</button>{" "}
              <Link to="/sign-up" className="formFieldLink">
                Create an account
              </Link>
            </div>
  
           
          </form>
                </div>
        </div>
      );
    }
  
  
  export default SignInForm;