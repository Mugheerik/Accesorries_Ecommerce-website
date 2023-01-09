import Adminhome from "./hoempage";
import Dashsidebar from "./sidebar";
import { useEffect } from "react";
import Adminproducts from "./addproducts";
import "./admin.css";
import { BrowserRouter } from "react-router-dom";
import Dataadmin from "./data";
import ManageProducts from "./productmanagement";
import Viewusers from "./users";
import Updateprod from "./updateprod";

const Layyout = () => {

    
    return ( 

        <div className="container">
           
           
            <div className="row mt-4">
                
              
                <div className="col-4 mt-3 container">
                <Dashsidebar/>
                 </div>
                <div className="col-8 mt-3">
                <ManageProducts/>
                 </div>
                </div>
                 
                
            

          
        </div>
     );
}
 
export default Layyout;