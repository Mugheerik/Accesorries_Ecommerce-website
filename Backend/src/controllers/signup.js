
import userDataModel from "../model/userdata.js";

export const signuprequested=  async (req, res) => {
    try {
   const date= req.body;
   console.log(date);
        const arrname =req.body.name;
        const stname= arrname.toString();

    const arremail=req.body.email;
    const stemail= arremail.toString();
    
    const arrpassword=req.body.password;
    const stpassword= arrpassword.toString();

    const arrcell=req.body.cellphone;
    const stcell= arrcell.toString();

    const arrprogram=req.body.program;
   

    const arrimg=req.body.img;
    const steimg= arrimg.toString();



    const newuser = await new userDataModel(
        {
            Name: stname,
            Password:stpassword,
            Email:stemail,
            Program:arrprogram,
            Cellphone:stcell,
            Img:arrimg

        }
    
    );
    console.log(newuser);
    // const token = await newuser.generateAuthToken();
    // console.log("token part");
        await newuser.save();
       
     } catch (error) {
        console.log(error);
     }
}

export const getusers = async (req,res) =>{

    try {
        const viewusers = await userDataModel.find();
        res.json(viewusers);
        console.log(viewusers)
        
     } catch (error) {
        console.log("data fetch failed");
     }

}
