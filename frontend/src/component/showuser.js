import { deleteuser, signin } from "../service/api";
import { useState ,useEffect } from "react";
import Updateprod from "../comp/user/userview";

const Viewprofile = () => {

    const [productdetails,setProductdetails]=useState([]);




    const userdetails =  async () => {
        
        const getproductdetails = await signin();
        setProductdetails(getproductdetails.data);
        console.log(getproductdetails.data);
    }
    useEffect(()=>{
        userdetails();
    },[productdetails]);

    const handleclick= async()=>{
        await deleteuser(productdetails._id);
   const newuser=await signin();
   setProductdetails(newuser.data);
}  
    const handleupdate= async()=>{
        document.getElementById("dis").style.display="block";

}  
  return (

        <div className="container">
            <div className="row">
                 <div>
                    <h4>userprofile</h4>
                 </div>
            <div className="card">
                <div className="card-img">
                  <img src={productdetails.img} alt="here is image"/>
                </div>
                <div className="card-body">
                   <label> username:{productdetails.Name}</label><br></br>
                    <label>email:{productdetails.Email}</label><br></br>
                    <label>password:{productdetails.Password}</label><br></br> 
                    <label>program:{productdetails.Program}</label><br></br> 
                    <label>cellphone:{productdetails.Cellphone}</label><br></br> 

                    <button onClick={(e)=>handleclick(e)}>delete</button>
                    <button onClick={(e)=>handleupdate(e)}>update</button>
                    
                </div>
            </div>
            </div>
            <div className="row">
                <div id="dis" style={{display:"none"}}>
                    <Updateprod/>
                </div>
            </div>
        </div>
      );
}
 
export default Viewprofile;