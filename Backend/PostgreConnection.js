import pkg from 'pg';
const { Client } = pkg;
import  fs from 'fs';
import path from 'path';


export const  client = new Client({
    user: 'macbookpro',
    host: 'localhost',
    database: 'postgres',
    password: '',
    port: 5432, // Default PostgreSQL port
  });

export const creating_connection = async () =>{
  try{
     await client.connect();
  }catch(err){
    console.log(" Error in connecting ........ ",err)
  }
}

export const disconnect_connection =  () =>{
    try{
        client.end();
    }catch(err){
        console.log(" Error while disconnecting ........ ",err)
    }
}  

 
    // Read the SQL script file
// const sqlFilePath = path.join('./', './Migration/userSchema.sql');
// const sqlScript = fs.readFileSync(sqlFilePath, 'utf-8');

// // Execute the SQL script
// client.query(sqlScript, (err, result) => {
//   if (err) {
//     console.error('Error executing SQL script:', err);
//   } else {
//     console.log('SQL script executed successfully!');
//   }
// });

    



