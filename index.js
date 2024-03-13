const express = require("express");
const fs = require("fs");
const mongoose = require("mongoose");

const userRouter = require("./route/users");
const {connectMongoDB} = require("./connection ");
const {logreqres} = require("./middlewares");


const app = express();
port = 5000;


//connection.all the connection files are in the connection.js
connectMongoDB('mongodb://127.0.0.1:27017/app-1')
.then(()=>console.log("MongoDB Connected"))
.catch((err)=>console.log("Mongo Err",err));

//model- all the model creation and userSchema in models folder


//middleware-plugin-  all connections in middlewares folder
app.use(express.urlencoded({extended:false}));
app.use(logreqres("log.txt"));

//REST API -JSON
app.use("/api/users",userRouter);

// app.patch('/api/users/:id',(req,res)=>{
//     return res.json({ status:pending});
// });

// app.delete('/api/users/:id',(req,res)=>{
//     return res.json({ status:pending});
// });

app.listen(port, ()=>{
    console.log("Server started!");
});