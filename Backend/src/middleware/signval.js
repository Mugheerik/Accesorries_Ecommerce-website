import userDataModel from "../model/userdata.js";
export const validate= async(req,res,next)=>{
      
    const arremail=req.body.email;
    const stemail= arremail.toString();
    
    const arrpassword=req.body.password;
    const stpassword= arrpassword.toString();
      const query ={Email:stemail,Password:stpassword}
   userDataModel.findOne(query,function(err,user){
    if(err) throw new Error(err);
    if(!user) 
      console.log('Not found');
    else 
      console.log("found");
      
    })
    next(user);
}
export const vrss=(req,res,next)=>{
console.log("recgd");
next();
}