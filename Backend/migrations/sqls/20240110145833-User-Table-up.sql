/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS User_Table (
  User_Id SERIAL PRIMARY KEY,
  First_Name VARCHAR(255) NOT NULL,
  Last_Name VARCHAR(255) NOT NULL,
  City  VARCHAR(100) NOT NULL,
  Login_Id int NOT NULL,
  CONSTRAINT FK_LoginTable FOREIGN KEY (Login_Id)
  REFERENCES Login_Table(Login_Id)
); 

