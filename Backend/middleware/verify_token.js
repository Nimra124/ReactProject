const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');

// Auth0 Configuration
const auth0Domain = 'dev-qkxlu1h3dzttq3xs.us.auth0.com';


// Auth0 JSON Web Key Set (JWKS) Configuration
const jwksUri = `https://dev-qkxlu1h3dzttq3xs.us.auth0.com/.well-known/jwks.json`;

// Function to retrieve Auth0 JSON Web Key Set
const getKey = (header, callback) => {
  const client = jwksClient({
    jwksUri: jwksUri,
  });

  client.getSigningKey(header.kid, (err, key) => {
    if(err){
      return res.status(401).json({ message: 'Invalid token' , err: err });
    }
    const signingKey = key.publicKey || key.rsaPublicKey;
    console.log(" HEADER.KID :  ",signingKey)
    callback(null, signingKey);
  });
};

// Middleware to verify Auth0 JWT
const verifyToken = (req, res, next) => {
  //const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
  const token = req.headers.authorization;
  console.log("Token : ",token)
//   console.log(" authorization : ",req.headers.authorization)
//   console.log(" ===== : ",req.headers.authorization.split(' ')[1])

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  jwt.verify(token, getKey, { algorithms: ['RS256'], issuer: `https://${auth0Domain}/` }, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' , err: err });
    }
    console.log(" Decode : ",decoded)
    req.user = decoded;
    next();
  });
};

module.exports={verifyToken};