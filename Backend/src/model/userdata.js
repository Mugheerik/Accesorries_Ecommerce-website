import mongoose from "mongoose";

import jwt from "jsonwebtoken";
import pkg from "bcryptjs";
const {bcrypt} =pkg;
const {Jwt} = jwt;

const userdataStructure=mongoose.Schema(
    {
        Name:String,
        Password:String,
        Email:String
    }
);
userdataStructure.methods.generateAuthToken = async function () {
    try {
     
        const token = Jwt.sign({_id:this._id},"itisthetokentoenter");
        console.log(token);
    } catch (error) {
        console.log("deploy error");
    }

};
const userDataModel= mongoose.model("user",userdataStructure);
export default userDataModel;