import express, { Router } from "express";
import todoRouter from "../src/routes/todo.routes.js"
import cors from "cors"


const app = express();

app.use(cors({
    origin:"http://localhost:5173"
}))

app.use(express.json())

// app.get("/api/todo",(req, res)=>{
//     res.send("Todo API is working fine")
// })

app.use("/api/v1/todos", todoRouter);


export {app} 