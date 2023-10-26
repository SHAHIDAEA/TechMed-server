const { admins, patients } = require("../models/collection")


//admin login
const adminlogin = (req, res) => {
    const { uname, psw } = req.body
    admins.findOne({ uname, psw }).then(user => {
        if (user) {
            res.status(200).json({
                message: "login success :)",
                status: true,
                statusCode: 200
            })
        }
        else {
            res.status(404).json({
                message: "incorrect username or password",
                status: false,
                statusCode: 404
            })
        }
    })
}

//add patients
const addpatient = (req, res) => {
    const { pId, pname, age, sex, address, phone, doctorsName } = req.body
    patients.findOne({ pId }).then(user => {
        if (user) {
            res.status(400).json({
                message: "User Already Exist",
                status: false,
                statusCode: 400
            })
        }
        else {
            const newPatient = new patients({
                pId, pname, age, sex, address, phone, doctorsName
            })
            newPatient.save()
            res.status(200).json({
                message: "new patient added",
                status: true,
                statusCode: 200
            })

        }
    })
}

const getpatientdetails = (req, res) => {
    patients.find().then(data => {
        if (data) {
            res.status(200).json({
                message: data,
                status: true,
                statusCode: 200
            })

        }
    })
}


const editPatientDetails=(req,res)=>{
    const {id}=req.params
    const { pname, age, sex, address, phone, doctorsName}=req.body
    patients.findOne({_id:id}).then(pdata=>{
        if(pdata){
            pdata.pname=pname
            pdata.age=age
            pdata.sex=sex
            pdata.address=address
            pdata.phone=phone
            pdata.doctorsName=doctorsName


            pdata.save()
            res.status(200).json({
                message: "Patient's data Updated",
                status: true,
                statusCode: 200
            })

        }
    })
}

const deletePatientdetails=(req,res)=>{
    const{id}=req.params
    patients.deleteOne({_id:id}).then(data=>{
        res.status(200).json({
            message: "Patient's data delete",
            status: true,
            statusCode: 200
        })

    })
}

const getSinglepatient=(req,res)=>{
    const{id}=req.params
    patients.findOne({_id:id}).then(data=>{
        if(data){
            res.status(200).json({
                message: data,
                status: true,
                statusCode: 200
            })
    
            }
            else{
                res.status(400).json({
                    message: "No Data",
                    status: false,
                    statusCode: 400
                })
    
            }
    })
}


module.exports = { adminlogin, addpatient,getpatientdetails,editPatientDetails,deletePatientdetails ,getSinglepatient}