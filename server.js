const express =require('express')
const app =express()
 app.get('/',function(req,res){
    res.send("Happy New Year from Kavita")
 })
 app.listen(5689,function(req,res){
    console.log("Happy  new Year")
 })