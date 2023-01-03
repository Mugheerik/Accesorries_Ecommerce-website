import express from "express";
import {  productsrequested } from "../controllers/products.js";
const router = express.Router();

//requested by teacher
router.get("/", productsrequested);




export default router;