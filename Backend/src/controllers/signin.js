import { Router } from "express";
import activeuserModel from "../model/signeduser.js";
import userDataModel from "../model/userdata.js";

// import { getusers } from "./signup"

export const signinrequested= async (req, res) => {

    const response=req.body;
    console.log(response);
    const arremail=req.body.username;
    const stemail= arremail.toString();
    
    const arrpassword=req.body.password;
    const stpassword= arrpassword.toString();
     
    try {
    const userdata= await  new activeuserModel({
            Name: stemail,
            Password:stpassword,
    });
      await userdata.save()
      console.log("usersaveed")
    } catch (error) {
      
    }
  
    

   
 
}
export const userview= async(req,res)=>{
  
 const userdata= await activeuserModel.findOne().sort({_id:-1}).limit(1);
 console.log(userdata);
 console.log(userdata.Name);

  
   const query ={Name:userdata.Name,Password:userdata.Password}
  userDataModel.findOne(query,function(err,user){
  if(err) throw new Error(err);
  if(!user) 
   
  console.log('notfound');
  else 
  console.log(' found');
  res.json(user);
 
    
  })
        
     
}
export const deleteuser =async(req, res)=>{
     await userDataModel.deleteMany(req._id)
}
export const updateuser = async (req,res ) =>{
  try {

     const newuser=req.body.username;
     var suser=newuser.toString();
     const newstock=req.body.password;
     var spassword=newstock.toString();
     const newprice=req.body.program;
     var sprogram=newprice.toString();
    
    
  console.log(req.body.username)
       let updateduser= await userDataModel.updateOne({Name:req.body.username},
       {$set:{Password:spassword ,Program:sprogram} }
       );
     
     
     console.log(updateduser);
  } catch (error) {
     console.log (error)
  }
  
  }
