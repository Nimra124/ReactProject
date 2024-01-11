const express = require ('express');
const { ValidUser,dummy ,Get_Valid_User} = require ('../Controllers/LoginController.js');
const {requireSignIn} = require ('../middleware/check_token.js');

const Router=express.Router();

Router.post("/login",ValidUser);
Router.get("/",requireSignIn,dummy);
Router.post("/getuser",Get_Valid_User)

module.exports= Router; 