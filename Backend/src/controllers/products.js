import productdata from "../model/products.js";

export const productsAdded=  async (req, res) => {
   const arrpname = req.body.name;
   const stpname = arrpname.toString();

   const arrpid = req.body.id;
   const stpid = arrpid.toString();

   const arrpcategory = req.body.category;
   const stpcategory = arrpcategory.toString();

   const arrpdesc = req.body.desc;
   const stpdesc = arrpdesc.toString();

   const arrstock = req.body.stock;
   const ststock = arrstock.toString();

   const arrprice = req.body.price;
   const stprice = arrprice.toString();

   const newproduct = new productdata({
    pname :stpname,
   
    pid :stpid,
    pcategory:stpcategory,
    pdescription:stpdesc,
    pprice: stprice,
    stock:ststock
   });

   try {
    await newproduct.save();
    
   } catch (error) {
    console.log("not save");
   }
}


export const getproducts =async (req,res) =>{
   try {
      const viewproducts = await productdata.find();
      res.json(viewproducts);
   } catch (error) {
      console.log("data fetch failed");
   }
}


export const deleteproducts = async (req,res ) =>{
   try {
   
   const deletedproduct = await productdata.deleteOne({pid:req.body.id});

       
   console.log(deletedproduct);
} catch (error) {
   console.log ("delete failed")
}

}
export const updateproducts = async (req,res ) =>{
try {
   const newstock=req.body.stock;
   var sstock=newstock.toString();
   const newprice=req.body.price;
   var sprice=newprice.toString();
  
  

     let updatedproduct= await productdata.updateOne({pid:req.body.id},
     {$set:{stock:sstock ,pprice:sprice} }
     );
   
   
   console.log(updatedproduct);
} catch (error) {
   console.log (error)
}

}

