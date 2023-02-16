var express=require('express')
var router=express.Router()
var form=require('../model/user')

router.get('/new',(req,res)=>{
    res.render('form')
})

router.post('/',(req,res)=>{
   console.log(req.body)
   form.create(req.body,(err,createdform)=>{
    if(err){
        res.redirect('/users/new')
    }
    res.redirect('/')
    console.log(createdform)
   })
})

module.exports=router