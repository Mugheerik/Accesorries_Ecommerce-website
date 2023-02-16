require("dotenv").config();
import  Express  from "express";
import  cors  from "cors";
import passport from "passport";
import cookieSession from "cookie-session";
import passportset from "./passport.js";
import authroute from "./routes/auth.js";

const app = Express();

app.use(

    cookieSession({
        name:"session",
        keys:["cyberwolve"],
        maxAge:24*60*60*100,
    })
);
app.use( passport.initialize());
app.use(passport.session());
app.use(
    cors({
        origin:"http://localhost:5000",
        methods:"GET,POST,DELETE,PUT",
        credentials:true,
    }
    )
);
app.use("/auth",authroute);