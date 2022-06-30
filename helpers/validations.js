const Joi = require('joi');

const schemas = {
  name: Joi.object().keys({
    name: Joi.string().min(5).required(),
  }),
  // define all the other schemas below
};

const validateSchema = (schema, dataToValidate) => {
  const { error, value } = schema.validate(dataToValidate);
  if (error) throw error;
  return value;
};

// const validate = {
//   validateBody: (params) => {
//     const schema = Joi.object({
//       name: Joi.string().required(),
//     });

//     const { error, value } = schema.validate(params);

//     if (error) throw error;

//     return value;
//   },
// };

// const validateUser = (schema) => {
//   return (req, res, next) => {
//     const { error } = schema.validate(req.body);
//     const valid = error == null;

//     if (valid) {
//       next();
//     } else {
//       const { details } = error;

//       const message = details.map((i) => i.message).join(",");

//       console.log("error", message);
//       res.status(422).json({ error: true, message });
//     }
//   };
// };

module.exports = {
  validateSchema,
  schemas,
};
