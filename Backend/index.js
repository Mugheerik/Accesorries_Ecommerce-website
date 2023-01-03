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
import products from "./routes/products.js";
import jewels from "./routes/jewel.js";
import signup from "./routes/signup.js";
import signin from "./routes/signin.js"
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";



const app = express();

app.use(cors());
app.use(bodyParser.json( { extended: true } ));
app.use(bodyParser.urlencoded ( { extended: true } ));

const apiKey ="mongodb+srv://mugheer:890890@cluster0.8ozpilg.mongodb.net/?retryWrites=true&w=majority";
mongoose.set("strictQuery", true);
mongoose.connect(apiKey, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("Connected to the database."))
.catch(err => console.log("Not connected..."));

app.use("/products", products);
app.use("/jewel",jewels );
app.use("/signup",signup );
app.use("/signin",signin );


app.listen(5000);
console.log("Listening...");

