import { Dropdown } from "bootstrap";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Adminproducts from "./addproducts";
import "./admin.css";
import Updateprod from "./updateprod";

const Dashsidebar = () => {
    const navigate= useNavigate();
    var dis= document.getElementById('divv');
    const handleSubmit=()=>{
        document.getElementById("secdiv").style.display="block"
        document.getElementById("divv").style.display="none"
    }
    const handlesubmit=()=>{
        document.getElementById("secdiv").style.display='none'
        document.getElementById("divv").style.display="block"
    }


    return ( 
        <div className="container">
            <div className="card">
                <div className="row mt-2">
                    <div className="col-6 ">
                    <button onClick={()=>handleSubmit()} className="btn btn-outline-info"    >
                    update 
                    </button>
                    </div>
                    <div className="col-6  ">
                     <button  onClick={()=>handlesubmit()} className="btn btn-outline-success" >
                    add 
                    </button>

                </div>
            
                    </div>
                <div>

                  <div className="diff" id="divv" style={{display:"block"}}>

                    <Adminproducts />
                  </  div>
                  <div className="diff" id="secdiv" style={{display:"none"}}>

                    <Updateprod />
                  </  div>
                </div>

                    
                
            </div>
        </div>
     );
}
 
export default Dashsidebar;