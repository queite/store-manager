const productService = require('../services/productService');

const listProducts = async (req, res) => {
  const products = await productService.listAll();
  res.status(200).json(products);
};

module.exports = {
  listProducts,
};