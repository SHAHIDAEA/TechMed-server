//import mongoose
const mongoose=require('mongoose')
//schema
const adminSchema=new mongoose.Schema({
    uname:String,
    psw:String
})

//modeel for admin-login
const admins=new mongoose.model("admins",adminSchema)
 // schema fo patient 
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

const staffSchema=new mongoose.Schema({
    docname:String,
    specialization:String,
    about:String,
    image:String,
    education:String,
    consultationfee:Number,
    appointments:Number,
    categoryId:Number,
    slots_available:Number
})

const staffs=new mongoose.model("staffs",staffSchema)

//schema for appoinments
const appointmentSchema=new mongoose.Schema({
    pId:Number,
    docname:String,
    specialization:String,
    about:String,
    image:String,
    education:String,
    consultationfee:Number,
    appointments:Number,
    categoryId:Number,
    slots_available:Number
})
const appointments=new mongoose.model("appointments",appointmentSchema)



module.exports={admins,staffs,patients,appointments}