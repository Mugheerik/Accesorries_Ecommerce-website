const GoogleStrategy= require("passport-google-oauth20").Strategy;
import passport from "passport";

passport.use(

    new GoogleStrategy(
        {
            clientID: process.env.client_id,
            clientSecret:process.env.client_secret,
            callbackURL:"/home",
            scope:["profile","email"],
        },
        function(accessToken,refreshToken,profile,callback){
            callback(null,profile);
        }
    )
);

passport.serializeUser((user,done)=>{
done(null,user);
});

passport.deserializeUser((user,done) => {
done(null,user);
});
