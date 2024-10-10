import client from "prom-client"
import express from "express"
import { requestCountMiddleware } from "./monitoring/requestCount"


const app = express()


app.use(requestCountMiddleware)
app.get("/user",(req,res)=>{
    res.json({
        name:"Ethernos"
    })
})
app.get("/metrics", async (req, res) => {
    const metrics = await client.register.metrics();
    res.set('Content-Type', client.register.contentType);
    res.end(metrics);
})
     

app.post("/user",(req,res)=>{
    res.json({
        message:"User created successfully"
    })
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})