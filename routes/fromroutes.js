const express=require('express')
const { userModel } = require('../modal/formmodal')
const users=express.Router()

users.get("/fromdata",async(req,res)=>{
    try {
        const user=await userModel.find()  
        res.status(200).send(user)
      } catch (error) {
          res.status(400).send({"msg":error.message})  
      }
 
})

users.post("/fromdata",async(req,res)=>{
    const payload=req.body;
console.log(payload)
 try {
    const user=new userModel(payload)
    await user.save()
    res.status(200).send({"msg":"post successful"})
 } catch (error) {
    res.status(400).send({"msg":error.message})
 }
})


module.exports=users