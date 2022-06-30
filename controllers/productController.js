const productService = require('../services/productService');

const listAll = async (req, res) => {
  const products = await productService.listAll();
  res.status(200).json(products);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const product = await productService.getById(id);
  res.status(200).json(product);
};

module.exports = {
  listAll,
  getById,
};