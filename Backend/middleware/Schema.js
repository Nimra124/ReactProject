const Joi = require('joi').extend(require('@joi/date'));


const LoginSchema = Joi.object({
  username: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
});

const  UserSchema = Joi.object({
  name : Joi.string().required(),
  username : Joi.string().required(),
  DOB : Joi.date().format('YYYY-MM-DD').required(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
});

module.exports={LoginSchema,UserSchema};