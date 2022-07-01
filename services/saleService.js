const NotFoundError = require('../helpers/NotFoundError');
const { validateSchema, schemas } = require('../helpers/validations');
const saleModel = require('../models/saleModel');
const productModel = require('../models/productModel');

const existProductId = async (array) => {
  const exist = await Promise.all(array.map(({ productId }) => productModel.getById(productId)));
  console.log(exist);
  if (exist.includes(undefined)) throw new NotFoundError('Product not found');
};

const insertSaleProduct = async (array) => {
  array.forEach((element) => validateSchema(schemas.sales, element));
  await existProductId(array);
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