import GoogleButton from "react-google-button";

const clientid = "1053601419167-t3acq2mhru5neo86d72qpnjm4t7pb5bg.apps.googleusercontent.com"

const Login = ()=>{

    const googleauth=()=>{
        window.open(
            `${process.env.backend_url}/auth/google/callback`,
            "_self"
        );
    };

return(
<div id="signInButton">
<GoogleButton
label="sign in with google"
onClick={googleauth}
/>
</div>
);
}
export default Login;