const express = require('express');
const app = express();
const router= express.Router();
const path = require('path')

//routing
router.get('/',(req,res)=>{
    res.sendFile(homeDir+'/html/'+'MainPage.html')
})
router.get('/MainPage.html',(req,res)=>{
    res.sendFile(homeDir+'/html/'+'MainPage.html')
})
router.get('/signIn.html',(req,res)=>{
    res.sendFile(homeDir+'/html/'+'signIn.html');
})
router.get('/italpasta_data_reciever.html',(req,res)=>{
    res.sendFile(homeDir+'/html/'+'italpasta_data_reciever.html')
})
router.get('/tubeSearch.html',(req,res)=>{
    res.sendFile(homeDir+'/html/'+'tubeSearch.html')
})
router.get('/incidentReport.html',(req,res)=>{
    res.sendFile(homeDir+'/html/'+'incidentReport.html')
})

module.exports= router;