import { useState } from "react";

import { deletedproduct } from "../../service/api";
import { Link } from "react-router-dom";

const Deleteprod = () => {

const [selector,setSelector]=useState(
    { id:""}
);

const handleChange =  (e) => {
    setSelector({ ...selector, [e.target.name] : [e.target.value] });
    
}

const handleSubmit =  async (e) => {
    e.preventDefault();
   await deletedproduct(selector)
   
}


    return ( 
<div className="container">
    <div className="card display ">
      <div className="card-title">
        <h4>DELETE PRODUCTS</h4>
      </div>

    <form  className="display " >
      <input 
       name="id"
      type="text"
      onChange={e=>handleChange(e)}
      placeholder="ENTER PRODUCT ID" />
      
      <button onClick={e=>handleSubmit(e)}  className="btn btn-outline-danger mt-4">DELETE PRODUCT</button>
    </form>
      </div>
      <Link to="/demo" >goto</Link>
   </div>
     


     );
}
 
export default Deleteprod;