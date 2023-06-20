const mongoose=require("mongoose")
const emailSchema=mongoose.Schema({
   
    email:String
   
})
const emailmodal=mongoose.model("allemail",emailSchema)
module.exports={emailmodal}