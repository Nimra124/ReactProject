const express = require ('express');
const { ValidUser,dummy ,Get_Valid_User} = require ('../Controllers/LoginController.js');
const {requireSignIn} = require ('../middleware/check_token.js');
const {validation} = require('../middleware/validator.js');
const {LoginSchema} = require ('../middleware/Schema.js');

const Router=express.Router();

Router.post("/login",ValidUser);
Router.get("/",requireSignIn,dummy);
Router.post("/getuser",validation(LoginSchema),Get_Valid_User)

module.exports= Router; 