import express from "express";
import { signuprequested} from "../controllers/signup.js";
const router = express.Router();


router.post("/", signuprequested)




export default router;