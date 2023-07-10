const express=require("express")
const axios=require("axios")
const app=express()
app.get("/",async(req,res)=>{
const response=await axios.get("http://127.0.0.1:3000/data")
res.send(`<h1>${response.data}<h1>`)
})
app.listen(8080,()=>{
    console.log("server started")
})