import { useState } from "react"
import { updatedproduct } from "../../service/api";

const Updateprod = () => {


    const [productdata, setProductdata] = useState(
        { 
          
          id :"",
         
          stock:"",
          price:""
        }
    )
    
    const handleChange =  (e) => {
        setProductdata({ ...productdata, [e.target.name] : [e.target.value] });
        
    }
    
    const handleSubmit =  async (e) => {
        e.preventDefault();
        await updatedproduct(productdata);
       
       
    }
        return ( 
       <div className="container">
        <div className="mt-2">

            <h4> PRODUCTS</h4>
        </div>
    
    
        <form  className="display p-4 " >
          
          <input 
           name="id"
           className="mt-4"
          type="text"
          onChange={e=>handleChange(e)}
          placeholder="ENTER PRODUCT ID" />
         
         
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
    
         );
    
}
 
export default Updateprod;