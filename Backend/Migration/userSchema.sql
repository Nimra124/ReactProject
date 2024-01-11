CREATE TABLE IF NOT EXISTS Login_Table (
  Id SERIAL PRIMARY KEY,
  UserName VARCHAR(255) NOT NULL,
  PassWord VARCHAR(255) NOT NULL,
  role VARCHAR(50) NOT NULL
);


CREATE TABLE IF NOT EXISTS User_Table (
  User_Id SERIAL PRIMARY KEY,
  First_Name VARCHAR(255) NOT NULL,
  Last_Name VARCHAR(255) NOT NULL,
  City  VARCHAR(100) NOT NULL,
  Login_ID  Int NOT NULL
); 


ALTER TABLE User_Table
ADD FOREIGN KEY (Login_ID) REFERENCES Login_Table(Id);

-- Insert into User_Table (First_Name,Last_Name,City,Login_ID) 
-- VALUES
-- ('HoneyTools','Dev','Karachi',7),
-- ('Nimra','Noor','Lahore',8);

-- Select First_Name,Last_Name,City,UserName,PassWord,role,User_Id from Login_Table INNER JOIN User_Table on Login_Table.Id = User_Table.Login_ID;


-- //////////////////////////////////////////////////////////////////////// Insert data into Login Table ////////////////////////////////////////////////////////////////////
-- INSERT INTO Login_Table (UserName, PassWord, role)
-- VALUES
--   ('honeytools@gmail.com', '$2b$10$9FMAD.NCMjtV6SRH68oUru8EsawtjQZnaQct4wBserYeLpE4W07TO', 'admin'),
--   ('nimra@gmail.com', '$2b$10$FW/70zqhoH3FE3YG.n4lJuzz3.vnB7aCjYC/BEDdc2UaFGLSB8H6G', 'user');
--   ('dev@gmail.com', '456', 'user');

-- delete from Login_Table


--  Select * from Login_Table where  UserName = 'honeytools@gmail.com';

-- Select * from Login_Table where role = 'user';