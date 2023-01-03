
import "./admin.css";
import { useState } from "react"
const Adminproducts = () => {
  const [data, setData] = useState([
    { name: "", id: "" ,img:"", category:"", price:""}
])

const handleChange = e => {
    setData({ ...data, [e.target.name] : e.target.value })
}

const handleSubmit = e => {
    e.preventDefault();
   
}
    return ( 
   <div className="container">
    <div className="card display ">
      <div className="card-title">
        <h4>ADD PRODUCTS</h4>
      </div>

    <form  className="display " onSubmit={e=>handleSubmit(e)}>
      <label className="dd">PRODUCT NAME:</label>
      <input 
     
      type="text"
      onChange={e=>handleChange(e)}
      placeholder="ENTER PRODUCT NAME" />
     <label className="dd"> PRODUCT ID</label>
      <input 
     
      type="text"
      onChange={e=>handleChange(e)}
      placeholder="ENTER PRODUCT ID" />
      <label className="dd">CATEGORY:</label>
      <input 
     
      type="text"
      onChange={e=>handleChange(e)}
      placeholder="CHOOSE PRODUCT CATEGORY" />
      <label className="dd">PRODUCT IMAGE:</label>
      <input 
     
      type="file"
      onChange={e=>handleChange(e)}
      placeholder="ENTER PRODUCT IMAGE" />
      <label className="dd">PRODUCT PRICE:</label>
      <input 
      
      type="text"
      onChange={e=>handleChange(e)}
      placeholder="ENTER PRODUCT PRICE" />
      <button onSubmit={e=>handleSubmit(e)} className="btn btn-outline-success mt-4">ADD PRODUCT</button>
    </form>
      </div>
   </div>


     );
}
 
export default Adminproducts;