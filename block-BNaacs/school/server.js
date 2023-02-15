var express=require('express')
var path=require('path')

// instatiate express
var app=express()

// set template engine / middleware
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

// get response
app.get('/',(req,res)=>{
    res.render('index')
})

// error handling
app.use((req,res)=>{
    res.send('Page Not Found')
})

app.listen(4000,()=>{
    console.log('server is listening on port 4k')
})