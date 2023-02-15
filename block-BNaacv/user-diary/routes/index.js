var express=require('express')
var router=express.Router()

router.get('/users/new',(req,res)=>{
    res.render('userForm')
})

router.post('/users',(req,res)=>{
    console.log(req.body)
    res.json(req.body)
})

router.get('/users',(req,res)=>{
    res.render('users',{ users: ["ankit", "suraj", "prashant", "ravi"] })
})

router.get('/users/:id',(req,res)=>{
    res.render('singleUser',{user: { name: "rahul", email: "rahul@altcampus.io" }})
})

router.delete('/users/:id',(req,res)=>{
    res.render('singleUser',{user:{name:'rahul'}})
})

router.get('/users/:id/edit',(req,res)=>{
    res.render('singleUser',{user:{name:'ajay'}})
})

router.put('/users/:id',(req,res)=>{
    res.render('singleUser',{user:{name:'ajay'}})
})

module.exports=router