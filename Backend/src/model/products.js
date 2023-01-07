import mongoose from "mongoose";

const productDatastructure=mongoose.Schema({
    pid:String,
    pname :String,
    pcategory:String,
    pdescription:String,
    stock:Number,
    pprice: Number
});

const productdata = mongoose.model("product" , productDatastructure);
export default productdata;