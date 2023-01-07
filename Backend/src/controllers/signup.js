
import userDataModel from "../model/userdata.js";

export const signuprequested=  async (req, res) => {
    try {
   
    const arremail=req.body.email;
    const stemail= arremail.toString();

    const arrpassword=req.body.password;
    const stpassword= arrpassword.toString();

    const arrname =req.body.name;
    const stname= arrname.toString();

    const newuser = new userDataModel(
        {
            Name: stname,
            Email:stemail,
            Password:stpassword

        }
    );
    const token = await newuser.generateAuthToken();
    console.log("token part");
        await newuser.save();
       
     } catch (error) {
        console.log(error);
     }
}

export const getusers = async (req,res) =>{

    try {
        const viewusers = await userDataModel.find();
        
     } catch (error) {
        console.log("data fetch failed");
     }

}
