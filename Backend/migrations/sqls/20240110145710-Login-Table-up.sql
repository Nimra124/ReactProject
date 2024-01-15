/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS Login_Table (
  Login_Id SERIAL PRIMARY KEY,
  UserName VARCHAR(255) NOT NULL,
  PassWord VARCHAR(255) NOT NULL,
  role VARCHAR(50) NOT NULL
);