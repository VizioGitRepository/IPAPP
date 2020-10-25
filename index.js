//Server Set-up
const express = require("express"); //express driver 
const app = express(); //Initialize express
app.use(express.json())
//view engine
const ejs =require('ejs')
app.set('view engine','ejs')

const path = require("path")
global.homeDir= path.resolve(__dirname)
require('dotenv').config()

//set home directory
app.use(express.static(homeDir))


//establish server connection
app.listen(8080, ()=>{
    console.log("connected to server")
});

//Database set up
const mongoose = require('mongoose');
const mongoOptions={
    useNewUrlParser:true,
    useUnifiedTopology: true,
};

//routing
const routingjs= require('./Routing/appRouter.js')
const employeeRouter= require('./Routing/employeeRouter.js')
app.use(routingjs);
app.use('/employeeNamesAndNumbers.html/',employeeRouter)


//connecting to mongodb using mongoclient method
mongoose.connect(process.env.DBURL,mongoOptions);
const db = mongoose.connection

db.on('error', err =>{
    console.log(err);
});

db.once('open', _ =>{
    console.log('database connected');
})
