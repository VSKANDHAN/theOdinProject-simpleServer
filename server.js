const { log } = require('console');
const express=require('express')
const app=express();
const fs=require('fs')

let home=fs.readFileSync("./pages/index.html","utf-8")
let about=fs.readFileSync("./pages/about.html","utf-8")
let contact=fs.readFileSync("./pages/contact.html","utf-8")
let pageNotFound=fs.readFileSync("./pages/pageNotFound.html","utf-8")

app.get('/',(req,res)=>{
    res.write(home)
    res.end()
})
app.get('/about',(req,res)=>{
    res.write(about)
    res.end()
})
app.get('/contact',(req,res)=>{
    res.write(contact)
    res.end()
})
app.all('*',(req,res)=>{
    res.write(pageNotFound)
    res.end()
})
app.listen(5000,()=>{
    console.log("Server started at the port 5000");
})