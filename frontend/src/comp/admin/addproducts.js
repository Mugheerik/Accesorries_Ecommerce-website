
import "./admin.css";
import { useState } from "react"
import { addproduct } from "../../service/api";


const Adminproducts = () => {
  const [productdata, setProductdata] = useState(
    { 
      name: "",
      
      id :"",
      category:"",
      desc:"",
      stock:"",
      price:""
    }
)

const handleChange =  (e) => {
    setProductdata({ ...productdata, [e.target.name] : [e.target.value] });
    
}

const handleSubmit =  async (e) => {
    e.preventDefault();
    await addproduct(productdata);
    
    setProductdata({ 
      name: "",
      
      id :"",
      category:"",
      desc:"",
      stock:"",
      price:""
    });
   
   
}
    return ( 
   <div className="container">
    
      <div className=" mt-2">
        <h4> PRODUCTS</h4>
      </div>

    <form  className="display  p-4" id="formbom" >
      <input 
       name="name"
      type="text"
      value={productdata.name}
      onChange={e=>handleChange(e)}
      placeholder="ENTER PRODUCT NAME" />
    
      <input 
       name="id"
       className="mt-4"
       value={productdata.id}
      type="text"
      onChange={e=>handleChange(e)}
      placeholder="ENTER PRODUCT ID" />
           
    
     
      <input 
      name="category"
      className="mt-4"
      type="text"
      value={productdata.category}
      onChange={e=>handleChange(e)}
      placeholder="ENTER CATEGORY" />
      <input 
      name="desc"
      className="mt-4"
      type="text"
      value={productdata.desc}
      onChange={e=>handleChange(e)}
      placeholder="ENTER DESCRIPTION" />
     
      <input 
      
      
      className="mt-4"
      name="stock"
      type="number"
      value={productdata.stock}
      onChange={e=>handleChange(e)}
      placeholder="ENTER STOCK" />
      
      <input 
      name="price"
      className="mt-4"
      type="number"
      value={productdata.price}
      
      onChange={e=>handleChange(e)}
      placeholder="ENTER  PRICE" />
      <button onClick={e=>handleSubmit(e)}  className="btn btn-outline-success mt-4">ADD PRODUCT</button>
    </form>

    
      </div>

 


     );
}
 
export default Adminproducts;