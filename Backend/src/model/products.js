import mongoose from "mongoose";

const productDatastructure=mongoose.Schema({
    pid:
    {
       type: String,
       required:true
    },
    
    pname :{
        type: String,
        required:true
        
     },
    pcategory:{
        type: String,
        required:true
     },
    pdescription:{
        type: String,
        required:true
     },
    stock:{
        type: Number,
        required:true
     },
    pprice: {
        type: Number,
        required:true
     }
});

const productdata = mongoose.model("product" , productDatastructure);
export default productdata;