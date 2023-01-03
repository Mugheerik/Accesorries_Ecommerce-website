import { Dropdown } from "bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./admin.css";

const Dashsidebar = () => {
    const navigate= useNavigate();


    return ( 
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <ul className="navbar-nav" >
                        <li > Dashboard</li>
                        <li className="nav-item dropdown btn1 mt-1 navv">
                <span className="nav-link dropdown-toggle btn1 " style={{color:"black"}}  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Products
                </span>
                <ul className="dropdown-menu">
                  <li><button className="dropdown-item " onClick={()=>navigate("./products")} >All products</button></li>
                  <li><button className="dropdown-item " onClick={()=>navigate("./jewel")} >Jewellery</button></li>
                  <li><button className="dropdown-item " onClick={()=>navigate("./glass")} >Glasses</button></li>
                  <li><button className="dropdown-item " onClick={()=>navigate("./watch")} >Watches</button></li>
               
                 
                </ul>
              </li>
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default Dashsidebar;