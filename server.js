const express=require('express')
const app=express()
const mongoose=require("mongoose")
const cors=require('cors');
const users = require('./routes/fromroutes');
const useremail = require('./routes/emailroute');
require('dotenv').config()
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.status(200).send("welcome")
})
app.use("/maya_api",users)
app.use("/maaya_api",useremail)

app.listen(process.env.port,async(req,res)=>{
    try {
        await mongoose.connect(process.env.mongodb_url)
        console.log("port is running at 8080")
    } catch (error) {
        console.log(error)
    }
   
})

