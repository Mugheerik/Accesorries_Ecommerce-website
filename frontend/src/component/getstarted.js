

import {  NavLink } from "react-router-dom";
import LoginButton from "./googlelogin"; 
import LogoutButton from "./googlelogout";
import { useEffect } from "react";
import {gapi} from "gapi-script";


const Getstarted = () => {

  const clientid = "1053601419167-t3acq2mhru5neo86d72qpnjm4t7pb5bg.apps.googleusercontent.com";

  useEffect(()=>{
    function start(){
      gapi.client.init({
        clientid:clientid,
        scope:""
      })
    };
    gapi.load('client:auth2',start);
  });

    return ( 
             
        

      
        <div className="App1">
         
          <div className="mt-4">
           

            {/* <div className=" mt-4">
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
            </div> */}


              <div >
               <LoginButton/>
              </div>
  
              <div >
                <LogoutButton/>
              </div>
          

            
          </div>
        </div>
       
     
                
     );
}
 
export default Getstarted;