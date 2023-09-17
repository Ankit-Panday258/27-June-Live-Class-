require('dotenv').configDotenv()
const express = require('express');

const connectToDb =require('./conn/db.js');
const { connection } = require('mongoose');
const cors = require("cors")
const app =express()
//Express middleware

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cors())
// init connection to db 
connectToDb()

const userRoutes = require('./routes/userRoutes.js')
app.get('/' ,userRoutes )

module.exports = app ;