import express from "express";
import { creditHours, monthlyLeaves } from "../controllers/teachers.js";
const router = express.Router();

//requested by HR
router.get("/monthlyLeaves", monthlyLeaves)

//requested by registration branch  
router.get("/creditHours", creditHours)

export default router;
