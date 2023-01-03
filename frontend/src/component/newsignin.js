
import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import {
  FacebookLoginButton,
  InstagramLoginButton
} from "react-social-login-buttons";
import './Signin.css';
const SignInForm=()=> {
   const [usersigndata,setUsersigndata] = useState({
        email: "",
        password: ""
      });  
       const {email,password}=usersigndata;
  
   const  handleChange=(e)=> {
    setUsersigndata={...usersigndata,[e.target.name]:[e.target.value]};
   }
  
      
  
   const handleSubmit=(e)=> {
      e.preventDefault();
  
      console.log("The form was submitted with the following data:");
    
    }
  
    
      return (
        <div className="display">

        <div style={{color:"black"}} className="formCenter card mt-3">

          <form className="formFields" onSubmit={(e)=>handleSubmit(e)}>
            <div className="formField">
              <label className="formFieldLabel" htmlFor="email">
                E-Mail Address
              </label>
              <input
                type="email"
                id="email"
                className="formFieldInput"
                placeholder="Enter your email"
                name="email"
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
              <button className="formFieldButton">Sign In</button>{" "}
              <Link to="/sign-up" className="formFieldLink">
                Create an account
              </Link>
            </div>
  
            <div className="socialMediaButtons">
              <div className="facebookButton">
                <FacebookLoginButton onClick={() => alert("Hello")} />
              </div>
  
              <div className="instagramButton">
                <InstagramLoginButton onClick={() => alert("Hello")} />
              </div>
            </div>
          </form>
                </div>
        </div>
      );
    }
  
  
  export default SignInForm;