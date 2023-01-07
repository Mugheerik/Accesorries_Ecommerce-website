import { GoogleLogin } from "react-google-login";

const clientid = "1053601419167-t3acq2mhru5neo86d72qpnjm4t7pb5bg.apps.googleusercontent.com"

const Login = ()=>{

    const onSucess=(res)=>{
        console.log("login succesful",res.profileObj);
    }
    const onFailure=(res)=>{
        console.log("login succesful",res);
    }

return(
<div id="signInButton">
<GoogleLogin
clientId={clientid}
buttonText="login"
onSucess={onSucess}
onFailure={onFailure}
cookiePolicy={'single-host-origin'}
isSignedIn={true}
/>
</div>
);
}
export default Login;