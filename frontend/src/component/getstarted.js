



import { useEffect } from "react";
import SignUpForm from "./newsignup";





const Getstarted = () => {


  function handleCallBackResponse(response){
console.log( response.credential);
  }

  useEffect(()=>{
   /* global google */
      google.accounts.id.initialize({
        client_id:"1053601419167-4ac03u51dptial294j8da8s7fg8jhnds.apps.googleusercontent.com",
        callback:handleCallBackResponse
      });
      google.accounts.id.renderButton(
       document.getElementById('logingoogle'),
      { theme:"outline",size:"large"}
      );},[]);

    
  return(
    
    <div className="dis">
  <SignUpForm/>

    <div id='logingoogle'></div>

  </div>
  )
}
 
export default Getstarted;