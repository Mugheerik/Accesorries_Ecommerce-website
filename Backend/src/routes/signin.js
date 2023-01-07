import express from "express";
import { signinrequested} from "../controllers/signin.js";
const router = express.Router();


router.get("/", signinrequested)




export default router;