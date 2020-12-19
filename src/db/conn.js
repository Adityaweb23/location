const { response } = require("express");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/newwebsite",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
   
}).then(()=>{
    console.log("connection established to the database ");
}).catch((error)=>{
    console.log(error);
    response.send(error);
    
})