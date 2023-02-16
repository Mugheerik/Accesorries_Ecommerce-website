import mongoose from "mongoose";




const signStructure=mongoose.Schema(
    
        {
            Name:{
                type:String
            },
            Password:{
                type:String},
            
           
        }
    
);

const activeuserModel= mongoose.model("activeuser",signStructure);
export default activeuserModel;