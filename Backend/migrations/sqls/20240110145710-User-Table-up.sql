/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS User_Table (
  User_Id  Serial PRIMARY KEY,
  Name VARCHAR(150) NOT NULL,
  UserName VARCHAR(100) NOT NULL,
  role  VARCHAR(100) NOT NULL,
  DOB date NOT NULL,
  PassWord VARCHAR(150) NOT NULL 
); 
