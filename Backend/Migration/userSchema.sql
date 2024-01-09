CREATE TABLE IF NOT EXISTS Login_Table (
  Id SERIAL PRIMARY KEY,
  UserName VARCHAR(255) NOT NULL,
  PassWord VARCHAR(255) NOT NULL,
  role VARCHAR(50) NOT NULL
);

-- INSERT INTO Login_Table (UserName, PassWord, role)
-- VALUES
--   ('honeytools@gmail.com', '$2b$10$9FMAD.NCMjtV6SRH68oUru8EsawtjQZnaQct4wBserYeLpE4W07TO', 'admin'),
--   ('nimra@gmail.com', '$2b$10$FW/70zqhoH3FE3YG.n4lJuzz3.vnB7aCjYC/BEDdc2UaFGLSB8H6G', 'user');
--   ('dev@gmail.com', '456', 'user');

-- delete from Login_Table


 Select * from Login_Table where  UserName = 'honeytools@gmail.com';

-- Select * from Login_Table where role = 'user';