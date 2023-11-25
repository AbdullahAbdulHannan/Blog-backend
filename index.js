const express =require('express')
const app=express()
const mongoose = require('mongoose')
require("dotenv").config()
const routes=require('./Routes/Postroutes')
const authRoutes=require('./Routes/authRoutes')
const cors =require('cors')
const PORT=process.env.PORT |5000
app.use(express.json())
app.use(cors())
mongoose.connect(process.env.MONGOO_URI)
.then(()=>console.log('Mongo DB Connected! '))
.catch((err)=>console.log(err))
app.use('/api',routes)
app.use('/auth',authRoutes)
// app.get('/',(req,res)=>{
//     res.send("HI")
// })
app.listen(PORT,()=>{
    console.log(PORT+ " is running fine!");
})