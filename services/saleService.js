const NotFoundError = require('../helpers/NotFoundError');
const { validateSchema, schemas } = require('../helpers/validations');
const saleModel = require('../models/saleModel');
const productService = require('./productService');

const insertSaleProduct = async (array) => {
  array.forEach((element) => validateSchema(schemas.sales, element));
  const ids = array.map(({ productId }) => productId);
  await productService.existProductId(ids);
  const id = await saleModel.insertSaleProduct(array);
  return { id, itemsSold: array };
};

const listAll = async () => {
  const sales = await saleModel.listAll();
  return sales;
};

const getById = async (id) => {
  const sale = await saleModel.getById(id);
  if (!sale.length) throw new NotFoundError('Sale not found');
  return sale;
};

module.exports = {
  insertSaleProduct,
  listAll,
  getById,
};