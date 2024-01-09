import LoginModel from "../Models/LoginModel.js";
import JWT from 'jsonwebtoken';
import {  comparePassword } from "../helpers/hashPassword.js";
import {client} from '../PostgreConnection.js';
import {creating_connection} from '../PostgreConnection.js';
import  fs from 'fs';
import path from 'path';

export const ValidUser = async (req, res) => {
  console.log(" data from query : ", req.body);

  let result = await LoginModel.findOne({
    username: req.body.username,
  });
  let match = false;
  if (result) {
    match = await comparePassword(req.body.password, result.password);

    console.log(" match : ", match);

    if (match) {
        const token = await JWT.sign({ _id: result._id }, process.env.JWT_KEY, { expiresIn: "1d" });
      console.log(" result  :   ", result);
      res.send({ data: result, match: match ,token});
    } else {
      res.send({ data: null, match: match });
    }
  } else {
    res.send({ data: null, match: match });
  }
};


export const dummy  = async (req, res) => {
    res.send(" Get Access")
  };
  

  export const Get_Valid_User = async (req, res) => {
    console.log(" data from query : ", req.body);

    let response ;

const sqlScript = "SELECT * FROM Login_Table WHERE UserName = $1";
const values = [req.body.username];

// Execute the SQL script
client.query(sqlScript, values, async (err, result) => {
  if (err) {
    console.error('Error executing SQL script:', err);
  } else {
    console.log('SQL script executed successfully!',result.rows);
    response= await result.rows[0];
    console.log(" response : ",response)
    let match = false;
    if (response) {
     
      match = await comparePassword(req.body.password, response.password);
  
      console.log(" match : ", match);
      if (match) {
              const token = await JWT.sign({ id: response.id }, process.env.JWT_KEY, { expiresIn: "1d" });
            console.log(" token  :   ", token);
            res.send({ data: response, match: match ,token});
          } else {
            res.send({ data: null, match: match });
          }
    }else {
        res.send({ data: null, match: match });
      }
  
  }
});
  
  };
  