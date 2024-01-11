const express= require ("express");
const dotenv= require ('dotenv');
const cors= require ("cors");
const databaseConnection= require ('./databaseConnection.js');
const {creating_connection}= require ('./PostgreConnection.js');
const LoginRoutes= require ('./Routers/LoginRouter.js');


const app=express();

dotenv.config();
// databaseConnection();
creating_connection();
app.use(cors());
app.use(express.json());

app.use("/",LoginRoutes);

app.listen(process.env.PORT,()=>{
    console.log("Server is running on PORT:    ",process.env.PORT)
})