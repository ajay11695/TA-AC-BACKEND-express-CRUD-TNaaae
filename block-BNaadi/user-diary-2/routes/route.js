var express=require('express')
var router=express.Router()
var users=require('../model/user')


router.post('/',(req,res,next)=>{
    users.create(req.body,(err,createduser)=>{
        if(err){
            next()
        }
        res.redirect('/users')
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


router.put('/:id',(req,res,next)=>{
    users.findByIdAndUpdate(req.params.id,req.body,{new: true},(err,user)=>{
        if(err)return next()
        
        res.redirect('/users')
    })
})

router.delete('/:id',(req,res,next)=>{
    users.findByIdAndDelete(req.params.id,(err,deleteuser)=>{
        if(err) return next()
        res.redirect('/users')
    })
})

module.exports=router