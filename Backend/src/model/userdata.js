import mongoose from "mongoose";

import jwt from "jsonwebtoken";
import pkg from "bcryptjs";


const userdataStructure=mongoose.Schema(
    
        {
            Name:{
                type:String
            },
            Password:{
                type:String},

            Email:{
                type:String
            },
            Program:{
                type:String
            },
            Cellphone:{
                type:String
            },

            Img:{
             data:Buffer,
              type:String

            }
        }
    
);
// userdataStructure.methods.generateAuthToken = async function () {
//     try {
     
//         const token = Jwt.sign({_id:this._id},"itisthetokentoenter");
//         console.log(token);
//     } catch (error) {
//         console.log("deploy error");
//     }

// };
const userDataModel= mongoose.model("user",userdataStructure);
export default userDataModel;