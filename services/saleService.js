const NotFoundError = require('../helpers/NotFoundError');
const { validateSchema, schemas } = require('../helpers/validations');
const saleModel = require('../models/saleModel');
const productService = require('./productService');
const saleProductModel = require('../models/saleProductModel');

const insertSaleProduct = async (array) => {
  array.forEach((element) => validateSchema(schemas.sales, element));
  const ids = array.map(({ productId }) => productId);
  await productService.existProductId(ids);

  const id = await saleModel.insertSaleProduct(array);
  return { id, itemsSold: array };
};

const existSaleId = async (id) => {
  const exist = await saleModel.getById(id);
  if (!exist.length) throw new NotFoundError('Sale not found');
};

const update = async (saleId, array) => {
  await existSaleId(saleId);
  array.forEach((element) => validateSchema(schemas.sales, element));
  const ids = array.map(({ productId }) => productId);
  await productService.existProductId(ids);

  await Promise.all(
    array.map((sale) => saleProductModel.update(saleId, sale.productId, sale.quantity)),
  );
  return { saleId, itemsUpdated: array };
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

const deleteSale = async (id) => {
  await existSaleId(id);
  await saleModel.deleteSale(id);
};

module.exports = {
  insertSaleProduct,
  listAll,
  getById,
  deleteSale,
  update,
};