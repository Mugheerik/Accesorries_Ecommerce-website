
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
   
   
}
    return ( 
   <div className="container">
    <div className="card display ">
      <div className="card-title">
        <h4>ADD PRODUCTS</h4>
      </div>

    <form  className="display " >
      <input 
       name="name"
      type="text"
      onChange={e=>handleChange(e)}
      placeholder="ENTER PRODUCT NAME" />
      <input 
       name="id"
       className="mt-4"
      type="text"
      onChange={e=>handleChange(e)}
      placeholder="ENTER PRODUCT ID" />
           
    
     
      <input 
      name="category"
      className="mt-4"
      type="text"
      onChange={e=>handleChange(e)}
      placeholder="ENTER CATEGORY" />
      <input 
      name="desc"
      className="mt-4"
      type="text"
      onChange={e=>handleChange(e)}
      placeholder="ENTER DESCRIPTION" />
     
      <input 
      
      
      className="mt-4"
      name="stock"
      type="number"
      onChange={e=>handleChange(e)}
      placeholder="ENTER STOCK" />
      
      <input 
      name="price"
      className="mt-4"
      type="number"
     
      
      onChange={e=>handleChange(e)}
      placeholder="ENTER  PRICE" />
      <button onClick={e=>handleSubmit(e)}  className="btn btn-outline-success mt-4">ADD PRODUCT</button>
    </form>

    
      </div>

   </div>


     );
}
 
export default Adminproducts;