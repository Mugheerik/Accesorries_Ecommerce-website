import mongoose from "mongoose";



const apiKey ="mongodb+srv://mugheer:<098890>@cluster0.tz2wlge.mongodb.net/?retryWrites=true&w=majority"


mongoose.set("strictQuery", true);
mongoose.connect(apiKey, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("Connected to the database."))
.catch(err => console.log("Not connected..."));