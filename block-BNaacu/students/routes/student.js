var express=require('express')
var router=express.Router()

router.get('/students/new',(req,res)=>{
    res.render('studentform')
})

router.post('/students',(req,res)=>{
    console.log(req.body)
    res.json(req.body)
})

router.get('/students',(req,res)=>{
    res.render('studentAll',{ list: ["ankit", "suraj", "prashant", "ravi"] })
})

router.get('/students/:id',(req,res)=>{
    res.render('studentdetail',{student: { name: "rahul", email: "rahul@altcampus.io" }})
})

module.exports=router