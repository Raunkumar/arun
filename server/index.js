const express=require('express')
const mongoose=require('mongoose')
const cors=require("cors")
const StudentModel = require('./model/student')

const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://arunkumarrm:arunkumarrm@cluster0.k2bmzfr.mongodb.net/product")

app.post('/register',(req,res)=>{
    StudentModel.create(req.body)
    .then(student=>res.json(student))
    .catch(err =>res.json(err))


})


app.listen(3034, ()=>{
    console.log("server is running")
})