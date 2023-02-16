import GoogleButton from "react-google-button";


const clientid = "1053601419167-t3acq2mhru5neo86d72qpnjm4t7pb5bg.apps.googleusercontent.com"

const Logout= ()=>{


   
    return(

        <div id="signOutButton">
            <GoogleButton
            label="Logout"
            
            />
        </div>
    );
}
export default Logout;