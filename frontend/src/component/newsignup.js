import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { addsignupuser } from "../service/api";
import "./Signin.css";

const SignUpForm=()=> {
    
const [userdata,setUserdata]=useState({
  email: "",
  password: "",
  name: ""
});

  const {email,password,name}=userdata;
      
    

    

  const handleChange=(e) =>{
    setUserdata({...userdata,[e.target.name]:[e.target.value]});

  }
  const handleClick= async(e)=> {
    e.preventDefault();
    await addsignupuser(userdata);
  }

 
    return (
        <div className="display">

      <div style={{color:"black"}}  className="formCenter card mt-3">
        <form     className="formFields">
          <div className="formField">
            <label className="formFieldLabel" >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="formFieldInput"
              placeholder="Enter your full name"
              name="name"
             
              onChange={(e)=>handleChange(e)}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" >
              Password
            </label>
            <input
              type="password"
             
              className="formFieldInput"
              placeholder="Enter your password"
              name="password"
              
              onChange={(e)=>handleChange(e)}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" >
              E-Mail Address
            </label>
            <input
              type="email"
             
              className="formFieldInput"
              placeholder="Enter your email"
              name="email"
             
              onChange={(e)=>handleChange(e)}
            />
          </div>

          

          
            <button  className="formFieldButton"  onClick={(e)=>handleClick(e)} >Sign Up</button>
            <Link to="/sign-in" className="formFieldLink">
              I'm already member
            </Link>
         
        </form>
                </div>
      </div>
    );
  }

export default SignUpForm;
