const express=require("express")
const app=express()
app.get("/data",(req,res)=>{
    res.send("MULTI CONTAINER IN CLOUD RUN IS WORKING SUCCESSFULLY")
})
app.listen(3000,()=>{
    console.log("server started")
})