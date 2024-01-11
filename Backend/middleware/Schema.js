const Joi = require('joi');


const LoginSchema = Joi.object({
    id: Joi.number(),
  username: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
  role: Joi.string().pattern(new RegExp('^[a-zA-Z]{3,30}$')),
});

module.exports={LoginSchema};