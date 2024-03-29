//create express app
const exp=require('express')
const app=exp();
const path=require('path')

//connect angular app with server
app.use(exp.static(path.join(__dirname,'../client/dist/routing-demo/browser')))
//configure environment variables
require('dotenv').config()
//add body parsing middleware
app.use(exp.json())

//import api
const userApp=require('./APIs/user-api');

//forward req to userApp when path starts with '/user-api'
app.use('/user-api',userApp)


//error handler
app.use((err,req,res,next)=>{
    res.send({message:'error occuurred',payload:err.message})
})

//asign port number
const PORT=process.env.PORT || 4000;
app.listen(PORT,()=>console.log(`web server lkisening on port ${PORT}`))