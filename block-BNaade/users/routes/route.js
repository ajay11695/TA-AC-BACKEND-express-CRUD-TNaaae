var express=require('express')
var router=express.Router()
var users=require('../model/user')

router.get('/new',(req,res)=>{
    res.render('adduser')
})

router.post('/',(req,res)=>{
    console.log(req.body)
    users.create(req.body,(err,createdform)=>{
        if(err){
            res.redirect('/users/new')
        }
        res.redirect('/users')
        console.log(createdform)
    })
})

router.get('/',(req,res)=>{
    users.find({},req.body,(err,users)=>{
        if(err) return next()
        res.render('users',{users:users})
    })
})

router.get('/:id',(req,res,next)=>{
    var id=req.params.id
    users.findById(id ,(err,user)=>{
        if(err)return  next()
        res.render('singleuser',{user:user})
    })
})

router.get('/:id/edit',(req,res,next)=>{
    users.findById(req.params.id,(err,user)=>{
        if(err) return next()
        res.render('updateuser.ejs',{user:user})
    })
})

router.post('/:id',(req,res,next)=>{
    users.findByIdAndUpdate(req.params.id,req.body,{new: true},(err,user)=>{
        if(err)return next()
        // res.render('singleuser',{user})
        res.redirect('/users')
    })
})

module.exports=router