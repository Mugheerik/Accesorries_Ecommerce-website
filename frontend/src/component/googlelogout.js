import { GoogleLogout } from "react-google-login";

const clientid = "1053601419167-t3acq2mhru5neo86d72qpnjm4t7pb5bg.apps.googleusercontent.com"

const Logout= ()=>{


    const onsucess=(res)=>{
        console.log("login succesful",res.profileobj);
    }
    return(

        <div id="signOutButton">
            <GoogleLogout
            clientid={clientid}
            buttonText="logout"
            onlogoutsucces={onsucess}
            />
        </div>
    );
}
export default Logout;