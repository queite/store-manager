const productModel = require('../models/productModel');

const listAll = async () => {
  const products = await productModel.listAll();
  return products;
};

module.exports = {
  listAll,
};