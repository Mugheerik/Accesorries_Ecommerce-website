import {  updateuser } from "../../service/api";
import { useState } from "react";
const Updateprod = () => {


    const [userdata, setUserdata] = useState(
        { 
          
          username :"",
         
          password:"",
          program:"",
          cellphone:"",
        }
    )
    
    const handleChange =  (e) => {
        setUserdata({ ...userdata, [e.target.name] : [e.target.value] });
        
    }
    
    const handleSubmit =  async (e) => {
        e.preventDefault();
        await updateuser(userdata);
       
       
    }
        return ( 
       <div className="container">
        <div className="mt-2">

            <h4> USER</h4>
        </div>
    
    
        <form  className="display p-4 " >
          
          <input 
           name="username"
           className="mt-4"
          type="text"
          onChange={e=>handleChange(e)}
          placeholder="ENTER YOUR USERNAME" />
          <input 
           name="cellphone"
           className="mt-4"
          type="number"
          onChange={e=>handleChange(e)}
          placeholder="ENTER YOUR number" />
         
         
          <input 
          
          
          className="mt-4"
          name="password"
          type="password"
          onChange={e=>handleChange(e)}
          placeholder="ENTER password" />
          
          <select
             name="program"
            onChange={ (e)=>  setUserdata({...userdata,program:e.currentTarget.value}) }
            className="browser-default custom-select">
              
            <option value="BSE" >BSE</option>
            <option value="BCS" >BCS</option>
           

          </select>
          <button onClick={e=>handleSubmit(e)}  className="btn btn-outline-success mt-4">ADD PRODUCT</button>
        </form>
    
        
          
    </div>
    
         );
    
}
 
export default Updateprod;