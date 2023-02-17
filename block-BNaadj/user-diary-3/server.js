// require
var express=require('express')
var mongoose=require('mongoose')
var path=require('path')
var indexRouter=require('./routes/index')
var userRouter=require('./routes/route')


// connected to data to databse
mongoose.set('strictQuery', true)
mongoose.connect('mongodb://localhost/users',(err)=>{
    console.log(err?err:'connected to database')
})

// instiate
var app=express()

// set ejs engine
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

// app middleware
app.use(express())
app.use(express.urlencoded({extened:true}))
app.use(express.static(__dirname + '/public'))

// other middleware
app.use('/',indexRouter)
app.use('/users',userRouter)

// 404 eror middleWare
app.use((req,res)=>{
    res.status(404).send('Page Not Found')
})

// custom error
app.use((err,erq,res,next)=>{
    res.send(err)
})

// listen
app.listen(4000,()=>{
    console.log('server is listening on port 4k')
})