import express from "express";
import {  deleteproducts, getproducts, productsAdded, updateproducts } from "../controllers/products.js";
const router = express.Router();


router.post("/addproduct", productsAdded);
router.get("/getproduct",getproducts);
router.delete("/deleteproduct",deleteproducts);
router.put("/updateproduct",updateproducts);




export default router;