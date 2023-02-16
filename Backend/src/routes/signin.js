import express from "express";
import { deleteuser, signinrequested, updateuser, userview} from "../controllers/signin.js";

const router = express.Router();

router.post("/", signinrequested);
router.get("/",userview);
router.delete("/",deleteuser);
router.put("/",updateuser);

// router.get("/fine",userview);
// router.put("/",edituser);
// router.delete("/",delteuser);





export default router;