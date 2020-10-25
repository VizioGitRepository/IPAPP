const express =require('express')
const router = express.Router()
const Employee = require('../Models/employeeListModel.js')




//getting all

router.get('/',async(req,res)=>{

    try {
        const employee= await Employee.find().sort({shift:1,fname:1})
        res.render('namesAndNumbers',{employee:employee});
    } catch (error) {
     res.status(500).json({message: error.message});   
    }
})
    
//getting one
router.get('/:id', getEmployee,(req,res)=>{
    res.json(res.employee)
    
})

//creating one
router.post('/add', async (req,res)=>{
    const employee = new Employee({
        fname: req.body.fname,
        lname: req.body.lname,
        shift: req.body.shift,
        number:req.body.number
    })
    try {
        const newEmployee= await employee.save();
        
        res.status(201).json(newEmployee);
   

    } catch (error) {
        
        res.status(400).json({message:error.message})        
    }
})
//edit one
router.get("patch/:id",getEmployee, async(req,res)=>{
    if (req.body.name !== null){
        res.employee.name = req.body.name
    }
    if (req.body.shift !== null){
        res.employee.shift = req.body.shift
    }
    if (req.body.number !==null){
        res.employee.number = req.body.number
    }
    try{
    const updatedEmployee = await res.employee.save()
    res.json(updatedEmployee)
    }
    catch(error){
        res.status(400).json({message:error.message})
    }

});
//delete one
router.get("/del/:id",getEmployee, async(req,res)=>{
    try {
        await res.employee.remove();
        res.redirect('/employeeNamesAndNumbers.html/')
    } catch (error) {
        res.status(500).json({message:error})
    }
})

async function getEmployee (req,res,next){
    let employee
    try {
      employee = await Employee.findById(req.params.id)
      if (employee == null) {
        return res.status(404).json({ message: 'Cannot find Employee' })
      }
    } catch (err) {
      return res.status(500).json({ message: err.message })
    }
  
    res.employee = employee
    next()
  }


module.exports= router;