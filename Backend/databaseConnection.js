import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const databaseConnection =() =>
{

try{
    mongoose.connect(process.env.MONGODB_URL);
    console.log(" Connection created ")
}catch(err){
    console.log(" Error while creating MongoDB connction")
}
}

export default databaseConnection;