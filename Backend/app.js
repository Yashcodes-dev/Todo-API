import express, { Router } from "express";

const app = express();


app.use(express.json())

app.get("/api/todo",(req, res)=>{
    res.send("Todo API is working fine")
})


export {app} 