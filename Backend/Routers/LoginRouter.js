import express from 'express'
import { ValidUser,dummy ,Get_Valid_User} from '../Controllers/LoginController.js';
import {requireSignIn} from '../middleware/check_token.js'

const Router=express.Router();

Router.post('/login',ValidUser);
Router.get("/",requireSignIn,dummy);
Router.post('/getuser',Get_Valid_User)

export default Router; 