const express = require('express');
const { ValidUser,dummy ,Get_Valid_User} = require('../Controllers/LoginController.js');
const {requireSignIn} = require('../middleware/check_token.js');
const {validation} = require('../middleware/validator.js');
const {LoginSchema,UserSchema} = require('../middleware/Schema.js');
const {SignUp} = require('../Controllers/LoginController.js');


const Router=express.Router();

Router.post("/login",ValidUser);
Router.get("/",requireSignIn,dummy);
Router.post("/getuser",validation(LoginSchema),Get_Valid_User);
Router.post("/signup",validation(UserSchema),SignUp);

module.exports= Router; 