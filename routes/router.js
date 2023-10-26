const express=require("express")
const { adminlogin, addpatient, getpatientdetails, editPatientDetails, deletePatientdetails, getSinglepatient } = require("../controllers/logic")

const router=new express.Router()

//admin-login
router.post('/admin/login',adminlogin)

//add patients
router.post("/patients/add",addpatient)

//get patient details
router.get("/patient/details/access",getpatientdetails)

//edit patient details
router.put("/patient/details/update/:id",editPatientDetails)

//delete patient details
router.delete("patient/details/delete/:id",deletePatientdetails)

//get single patient details
router.get("/singlepatient/details/access/:id",getSinglepatient)

module.exports=router