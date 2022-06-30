const NotFoundError = require('../helpers/NotFoundError');
const productModel = require('../models/productModel');
const { schemas, validateSchema } = require('../helpers/validations');

const listAll = async () => {
  const products = await productModel.listAll();
  return products;
};

const getById = async (id) => {
  const product = await productModel.getById(id);
  if (!product) throw new NotFoundError('Product not found');
  return product;
};

const insertProduct = async (obj) => {
  const validData = validateSchema(schemas.name, obj);
  const id = await productModel.insertProduct(validData);
  return id;
};

module.exports = {
  listAll,
  getById,
  insertProduct,
};