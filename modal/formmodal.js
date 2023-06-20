const mongoose=require("mongoose")
const userSchema=mongoose.Schema({
    name:String,
    mobile:Number,
    city:String,
    email:String,
    message:String
})
const userModel=mongoose.model("allusers",userSchema)
module.exports={userModel}