import mongoose from "mongoose";

const userdataStructure=mongoose.Schema(
    {
        Name:String,
        Password:String,
        Email:String
    }
);

const userDataModel= mongoose.model("user",userdataStructure);
export default userDataModel;