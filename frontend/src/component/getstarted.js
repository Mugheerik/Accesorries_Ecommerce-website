
import React from "react";
import {  NavLink } from "react-router-dom";



const Getstarted = () => {


    return ( 
             
        

      
        <div className="App1">
         
          <div className="mt-4">
           

            <div className=" mt-4">
              <NavLink
                to="/sign-in"
              >
                <button >SIGN IN</button>
              </NavLink>
              
              <NavLink
                exact
                to="/sign-up"
               >
                <button>Sign Up</button>
                
              </NavLink>
            </div>

            
          </div>
        </div>
       
     
                
     );
}
 
export default Getstarted;