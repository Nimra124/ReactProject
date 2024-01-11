const Joi = require('joi');

// Define a schema for validation
const schema = Joi.object({
  username: Joi.string().alphanum().min(3).max(250).required(),
  email: Joi.string().email().required(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
});

// Validate data
const dataToValidate = {
  username: 'johnDoe',
  email: 'john@example.com',
  password: 'password123',
};

const validationResult = schema.validate(dataToValidate);

if (validationResult.error) {
  console.error(validationResult.error.details);
} else {
  console.log('Data is valid!');
}
