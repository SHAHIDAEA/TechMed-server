//import env file
require('dotenv').config()

//server creation
//import express
const express=require('express')
const router = require('./routes/router')



//create server using express
const server=express()

const cors=require('cors')

server.use(express.json())

server.use(cors())


//router set
server.use(router)


//import connection.js file
require('./db/connection')

//server run
const port=5000 || process.env.port
server.listen(port,()=>{
    console.log(`____server started at port number ${port}______`);
})