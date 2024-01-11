const mongoose = require ("mongoose");
const dotenv = require ('dotenv');
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

module.exports = databaseConnection;