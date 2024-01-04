import express from  "express";
import dotenv from 'dotenv';
import cors from "cors";
import databaseConnection from './databaseConnection.js'
import LoginRoutes from './Routers/LoginRouter.js'


const app=express();
dotenv.config();
databaseConnection();
app.use(cors());
app.use(express.json());

app.use("/",LoginRoutes);

app.listen(process.env.PORT,()=>{
    console.log("Server is running on PORT:    ",process.env.PORT)
})