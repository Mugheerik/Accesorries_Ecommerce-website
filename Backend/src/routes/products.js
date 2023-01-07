import express from "express";
import {  deleteproducts, getproducts, productsAdded, updateproducts } from "../controllers/products.js";
const router = express.Router();


router.post("/", productsAdded);
router.get("/",getproducts);
router.delete("/",deleteproducts);
router.put("/",updateproducts);




export default router;