const pkg = require ("pg");
const { Client } = pkg;
const fs= require ("fs");
const path = require ("path");


const client = new Client({
  user: process.env.CLIENT_USER,
  host: process.env.CLIENT_HOST,
  database: process.env.CLIENT_DATABASE,
  password: "",
  port: 5432, // Default PostgreSQL port
});



 const creating_connection = async () => {
  try {
    await client.connect();
    // Read the SQL script file
    const sqlFilePath = path.join("./", "./Migration/userSchema.sql");
    const sqlScript = fs.readFileSync(sqlFilePath, "utf-8");

    // Execute the SQL script
    client.query(sqlScript, (err, result) => {
      if (err) {
        console.error("Error executing SQL script:", err);
      } else {
        console.log("SQL Create Table script executed successfully!"); //result[3].rows
      }
    });
  } catch (err) {
    console.log(" Error in connecting ........ ", err);
  }
};

const disconnect_connection = () => {
  try {
    client.end();
  } catch (err) {
    console.log(" Error while disconnecting ........ ", err);
  }
};

module.exports={creating_connection,disconnect_connection,client}