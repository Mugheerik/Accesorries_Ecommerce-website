

import { Link } from "react-router-dom";

import Prodcard from "./prodcard";
import Carosel from "../slide/carosel";


import "./home.css";
import Title from "./titilereveal";
import Thirdcomp from "./visibiliy";

const Home = () => {
    
    return ( 
           <div className="container">
            <div className="g-col-12">
              <Title/>
            </div>
            <div className="g-col-12">
              <Carosel/>
            </div>
            
            <div className="g-col-12 ms-2"  >
        <Link to="./products">

        <Prodcard pic="https://livingswag.com/wp-content/uploads/2019/08/fashion-accessories-1.jpg" name="ALL PRODUCTS"/>
        </Link>
            </div>
            <div className="g-col-12">
              <Thirdcomp/>
            </div>
           

            </div>
     );
}
 
export default Home;