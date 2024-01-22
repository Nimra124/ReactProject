const LoginModel = require("../Models/LoginModel.js");
const JWT = require("jsonwebtoken");
const { comparePassword } = require("../helpers/hashPassword.js");
const { client } = require("../PostgreConnection.js");
const { v4: uuidv4 } = require("uuid");
const hash = require("../helpers/hashPassword.js");
const { response } = require("express");
const { compareSync } = require("bcrypt");

const ValidUser = async (req, res) => {
  console.log(" data from query : ", req.body);

  let result = await LoginModel.findOne({
    username: req.body.username,
  });
  let match = false;
  if (result) {
    match = await comparePassword(req.body.password, result.password);

    console.log(" match : ", match);

    if (match) {
      const token = await JWT.sign({ _id: result._id }, process.env.JWT_KEY, {
        expiresIn: "1d",
      });
      console.log(" result  :   ", result);
      res.send({ data: result, match: match, token });
    } else {
      res.send({ data: null, match: match });
    }
  } else {
    res.send({ data: null, match: match });
  }
};

const dummy = async (req, res) => {
  res.send(" Get Access");
};

const Get_Valid_User = async (req, res) => {
  console.log(" data from query : ", req.body);

  let response;

  const sqlScript = "SELECT * FROM User_Table WHERE UserName = $1";
  const values = [req.body.username];

  client.query(sqlScript, values, async (err, result) => {
    if (err) {
      console.error("Error executing SQL script:", err);
    } else {
      console.log("SQL script executed successfully!", result.rows);
      response = await result.rows[0];
      console.log(" response : ", response);
      let match = false;
      if (response) {
        match = await comparePassword(req.body.password, response.password);

        console.log(" match : ", match);
        if (match) {
          const token = await JWT.sign(
            { id: response.id },
            process.env.JWT_KEY,
            { expiresIn: "1d" }
          );
          console.log(" token  :   ", token);
          res.send({ data: response, match: match, token });
        } else {
          res.send({ data: null, match: match });
        }
      } else {
        res.send({ data: null, match: match });
      }
    }
  });
};

const SignUp = async (req, res) => {
  console.log(" data from query : ", req.body);

  let response;
  let sqlScript = "Select username from User_Table where username= $1";
  let values = [req.body.username];
  client.query(sqlScript, values, async (err, result) => {
    if (err) {
      console.error("Error executing SQL script:", err);
    } else {
      console.log("SQL script executed successfully!");
      response = await result.rows[0];
      console.log(" response : ", response);
      if (!response) {
        let hashPassword = await hash.hashPassword(req.body.password);
        console.log(" Hash Password  : ", hashPassword);

        const sqlScript =
          "Insert into User_Table (name,username,role,DOB,password)  VALUES ($1,$2,$3,$4,$5)";
        const values = [
          req.body.name,
          req.body.username,
          "user",
          req.body.DOB,
          hashPassword,
        ];

        // Execute the SQL script
        client.query(sqlScript, values, async (err, result) => {
          if (err) {
            console.error("Error executing SQL script:", err);
          } else {
            console.log("SQL script executed successfully!");
            res.send({
              msg: "ADDED USER",
            });
          }
        });
      } else {
        res.send({ msg: "USER ALREADY EXITS" });
      }
    }
  });
};

function generateUniqueRandomString() {
  return uuidv4();
}

module.exports = {
  ValidUser,
  dummy,
  Get_Valid_User,
  SignUp,
};
