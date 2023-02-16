// import http from "http";

// const server = http.createServer((req, res) => {
//     if (req.url === "/"){
//         res.write("Welcome to the Node JS homepage.");
//         res.end();
//     }
//     if (req.url === "/prices"){
//         res.write("Node JS course price plans for fall 2022...");
//         res.end();
//     }
// });

// server.listen(3000);
// console.log("Listening on port 3000...");


import express from "express";
import products from "./src/routes/products.js";
// import jewels from "./src/routes/jewel.js";
import signup from "./src/routes/signup.js";
import signin from "./src/routes/signin.js"
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import  Jwt  from "jsonwebtoken";


const app = express();

app.use(cors());
app.use(bodyParser.json( {extended: true } ));
app.use(bodyParser.urlencoded ( {extended: true } ));

const apiKey ="mongodb://mugheer:890890@ac-kwwerbg-shard-00-00.8ozpilg.mongodb.net:27017,ac-kwwerbg-shard-00-01.8ozpilg.mongodb.net:27017,ac-kwwerbg-shard-00-02.8ozpilg.mongodb.net:27017/?ssl=true&replicaSet=atlas-4xh0pa-shard-0&authSource=admin&retryWrites=true&w=majority";
mongoose.set("strictQuery", true);
mongoose.connect(apiKey, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("Connected to the database."))
.catch(err => console.log(err));

// const  createtoken =async()=>{
// const token = await Jwt.sign({_id:"09090"},"itisthesecrettogetatoken" );
// console.log(token);
// }
// createtoken();



app.use("/addproducts", products);
app.use("/viewproducts", products);
app.use("/deleteproducts",products);
app.use("/updateproducts",products);

// app.use("/jewel",jewels );
app.use("/signup",signup );
app.use("/signin",signin );




app.listen(5000);
console.log("Listening...");

