import Adminhome from "./hoempage";
import Dashsidebar from "./sidebar";
import { useEffect } from "react";
import Adminproducts from "./addproducts";
import "./admin.css";
import { BrowserRouter } from "react-router-dom";
import Dataadmin from "./data";

const Layyout = () => {

    useEffect(()=>{
        document.getElementById('nav-dis').style.display="none";
     },[]);
    return ( 

        <div className="container">
           
            <div className="row mt-4 ">
                <Adminhome/>
            </div>
            <div className="row mt-4">
                <div className="col-4">
                <Dashsidebar/>
                </div>
                <div className="col-8">
               <Dataadmin/>
                </div>
            </div>

          
        </div>
     );
}
 
export default Layyout;