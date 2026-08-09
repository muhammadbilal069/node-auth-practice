const express=require('express');

const auth=require('./routes/auth');

const bodyParser=require('body-parser');

const path=require('path');

const app=express();


app.use(bodyParser.json());

app.use('/auth',auth);

app.listen(3000,(req , res)=>{
    
    console.log("server is runing");
    
})