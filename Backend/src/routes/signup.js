import express from "express";
import { getusers, signuprequested} from "../controllers/signup.js";
const router = express.Router();


router.post("/", signuprequested);
router.get("/", getusers );




export default router;