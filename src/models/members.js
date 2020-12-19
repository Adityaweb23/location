const mongoose = require("mongoose");
const validator = require("validator");
const Userschema =  new mongoose.Schema({

 firstname:{
    type:String,
    required:true,
    trim:true
 },
 lastname:{
    type:String,
    required:true,
    trim:true
 },
 phone:{
    type:Number,
    required:true,
    trim:true,
    min:10
 },
 email:{
    type:String,
    required:true,
    validate(value){
        if(!validator.isEmail(value)){
            throw new Error("pzzz enter a valid email adress");
        }
    }

 },
 password:{
    type:String,
    required:true,
    trim:true
 },
 conformpassword:{
    type:String,
    required:true,
    trim:true
 },

})

const Users = mongoose.model("User", Userschema);
module.exports =Users;