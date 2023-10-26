//import mongoose
const mongoose=require('mongoose')
//schema
const adminSchema=new mongoose.Schema({
    uname:String,
    psw:String
})

//modeel for admin-login
const admins=new mongoose.model("admins",adminSchema)

const patientSchema=new mongoose.Schema({
    pId:Number,
    pname:String,
    age:Number,
    sex:String,
    address:String,
    phone:Number,
    doctorsName:String
})

//model
const patients=new mongoose.model("patients",patientSchema)


module.exports={admins,patients}