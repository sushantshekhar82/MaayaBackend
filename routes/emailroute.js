const express=require('express')
const { emailmodal } = require('../modal/emailmodal')

const useremail=express.Router()

useremail.get("/emaildata",async(req,res)=>{
    try {
        const user=await emailmodal.find()  
        res.status(200).send(user)
      } catch (error) {
          res.status(400).send({"msg":error.message})  
      }
 
})

useremail.post("/emaildata",async(req,res)=>{
    const payload=req.body;
console.log(payload)
 try {
    const user=new emailmodal(payload)
    await user.save()
    res.status(200).send({"msg":"post successful"})
 } catch (error) {
    res.status(400).send({"msg":error.message})
 }
})


module.exports=useremail