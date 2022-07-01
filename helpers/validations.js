const Joi = require('joi');

const schemas = {
  name: Joi.object().keys({
    name: Joi.string().min(5).required(),
  }),
  sales: Joi.object().keys({
    productId: Joi.required(),
    quantity: Joi.number().min(1).required(),
  }),
};

const validateSchema = (schema, dataToValidate) => {
  const { error, value } = schema.validate(dataToValidate);
  if (error) throw error;
  return value;
};

module.exports = {
  validateSchema,
  schemas,
};
