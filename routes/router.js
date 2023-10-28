const express=require("express")
const { adminlogin, addpatient, getpatientdetails, editPatientDetails, deletePatientdetails, getSinglepatient,
     addstaff, getStaffs, editstaff, deletestaff, getsingleStaff, patientregister, patientlogin } = require("../controllers/logic")

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
router.delete('/patient/details/delete/:id',deletePatientdetails)

//get single patient details
router.get("/singlepatient/details/access/:id",getSinglepatient)

//add staff
router.post("/add/staff",addstaff)

//get staffs data
router.get("/patient/access",getStaffs)

//edit staff data
router.put('/staff/details/edit/:id',editstaff)

//delete staff data
router.delete('/staff/details/delete/:id',deletestaff)


//get single staffs details
router.get("/singlestaff/:id",getsingleStaff)

//patient register
router.post("/patient/register",patientregister)

//patient login
router.post("/patient/login",patientlogin)
module.exports=router