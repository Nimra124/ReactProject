import express from 'express'
import { ValidUser } from '../Controllers/LoginController.js';


const Router=express.Router();

Router.post('/login',ValidUser);

export default Router; 