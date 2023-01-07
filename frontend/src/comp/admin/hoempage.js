import { useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Adminproducts from "./addproducts";
import './hm.css';
import Layyout from "./layout";

const Adminhome = () => {
    
    


    return (
        <div className="container">
        <nav className="navbar-nav">
            <div className="navbar-brand">
                <h3 >Admin</h3>
            </div>

            
        </nav>

        <div className="row">
            <Layyout/>
        </div>
    </div>
       
      );
}
 
export default Adminhome;