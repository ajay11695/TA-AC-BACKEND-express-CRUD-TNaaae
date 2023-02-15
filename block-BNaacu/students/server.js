var express=require('express')
var path=require('path')
var studentRouter=require('./routes/student')

var app=express()

// set middleware template engine
app.set('view engine', 'ejs')
app.set('views',path.join(__dirname,'views'))

// routes middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// router middleware
app.use('/',studentRouter)

// error handling middleware
app.use((req,res)=>{
  res.send('Page Not Found')
})


app.listen(4000,()=>{
    console.log('server is listen on port 4k')
})