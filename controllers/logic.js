const { admins, patients, staffs, appointments } = require("../models/collection")


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

const addstaff=(req,res)=>{
    const{ docname,specialization,about,image,education,consultationfee,appointments,categoryId,slots_available}=req.body
  const  newStaff=new staffs({
    docname,specialization,about,image,education,consultationfee,appointments,categoryId,slots_available
  })
  newStaff.save()
  res.status(200).json({
    message: "new staff added",
    status: true,
    statusCode: 200
})

}

const getStaffs=(req,res)=>{
       staffs.find().then(data => {
        if (data) {
            res.status(200).json({
                message: data,
                status: true,
                statusCode: 200
            })

        }
    })
}

const editstaff=(req,res)=>{
    const {id}=req.params
    const {    docname,specialization,about,image,education,consultationfee,appointments,categoryId,slots_available}=req.body
    staffs.findOne({_id:id}).then(sdata=>{
        if(sdata){
            sdata.docname=docname
            sdata.specialization=specialization
            sdata.about=about
            sdata.image=image
            sdata.education=education
            sdata.consultationfee=consultationfee
            sdata.appointments=appointments
            sdata.categoryId=categoryId
            sdata.slots_available=slots_available


            sdata.save()
            res.status(200).json({
                message: "staff data Updated",
                status: true,
                statusCode: 200
            })

        }
    })
}

const deletestaff=(req,res)=>{
    const{id}=req.params
    staffs.deleteOne({_id:id}).then(data=>{
        res.status(200).json({
            message: "Staff deleted",
            status: true,
            statusCode: 200
        })

    })
}

const getsingleStaff=(req,res)=>{
    const{id}=req.params
    staffs.findOne({_id:id}).then(data=>{
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
const patientregister=(req,res)=>{
    const{pId,pname, age, sex, address, phone, doctorsName}=req.body
    patients.findOne({pId}).then(user=>{
        if(user){
            res.status(400).json({
                message: "Patient Already Exist",
                status: false,
                statusCode: 400
            })
    
        }
        else{
            const newPatient = new patients({
                pId, pname, age, sex, address, phone, doctorsName
            })
            newPatient.save()
            res.status(200).json({
                message: "Register Successfully",
                status: true,
                statusCode: 200
            })

        }
    })
}

//patient login
const patientlogin = (req, res) => {
    const { pId,phone} = req.body
    patients.findOne({ pId,phone}).then(user => {
        if (user) {
            res.status(200).json({
                message: "login success :)",
                status: true,
                statusCode: 200,
                _id:user._id,
                PId:user.pId
            })
        }
        else {
            res.status(404).json({
                message: "incorrect Login Details",
                status: false,
                statusCode: 404
            })
        }
    })
}

const bookAppointment=(req,res)=>{
    const{pId,sId}=req.body
    appointments.findOne({_id:sId}).then(data=>{
        if(data){
            res.status(404).json({
                message: "Already booked",
                status: true,
                statusCode: 404,
            })

        }else{
            staffs.findOne({_id:pId}).then(staff=>{
                if(staff){
                    newAppointment =new appointments({
                        pId,
                        sId,
                        docname:staff.docname,
                        consultationfee:staff.consultationfee,
                        appointments:staff.appointments,
                        slots_available:staff.slots_available
                    
                    })
                }
            })
        }
    })
}
const slot=(req,res)=>{
    var click=1
    const{id}=req.params
    staffs.findOne({_id:id}).then(data=>{
        if(data){
            data.slots_available=data.slots_available-click
            data.appointments=data.appointments+click
        }
    })
}

module.exports = { adminlogin, addpatient,getpatientdetails,editPatientDetails,deletePatientdetails ,getSinglepatient,addstaff,
    getStaffs,editstaff,deletestaff,getsingleStaff,patientregister,patientlogin,bookAppointment,slot}