import Express  from "express";
import passport from "passport";
const router= Express.Router();

router.get("/login/success",(req,res)=>{
if (req.user) {
res.status(200).json({
    error:false,
    message:"successfully loged in",
    user:req.user,
});
}
 else {
    res.status(403).json({error:true,message:"login failed"});
    
}
});

router.get( "/signin/failed", (req,res)=>{
    res.status(401).json({
        error:true,
        message:"login failed"
    });
});

router.get( "/google/callback", 
passport.authenticate("google"),{
successRedirect:  process.env.client_url,
faliureRedirect:"login/failed"
}
);

router.get("/google",passport.authenticate("google",["profile","email"]));
router.get("/logout",(req,res)=>{
    req.logout();
    res.redirect(process.env.client_url);
});
module.exports = router;