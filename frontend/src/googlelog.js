import LoginButton from "./component/googlelogin"; 
import LogoutButton from "./component/googlelogout";
// import { useEffect } from "react";
// import {gapi} from "gapi-script";


const Getstart = () => {

  const clientid = "1053601419167-t3acq2mhru5neo86d72qpnjm4t7pb5bg.apps.googleusercontent.com";

//   useEffect(()=>{
//     function start(){
//       gapi.client.init({
//         clientid:clientid,
//         scope:""
//       })
//     };
//     gapi.load('client:auth2',start);
//   });

    return ( 
             
        

      
        <div className="App1">
         
      
           

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
              
  
              
                <LogoutButton/>
              </div>
          

            
         
        </div>
       
     
                
     );
}
 
export default Getstart;