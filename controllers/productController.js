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

const insertProduct = async (req, res) => {
  const { name } = req.body;
  const id = await productService.insertProduct(req.body);
  res.status(201).json({ id, name });
};

const update = async (req, res) => {
  const { id } = req.params;
  const data = await productService.update(req.body, id);
  res.status(200).json(data);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  await productService.deleteProduct(id);
  res.sendStatus(204);
};

const search = async (req, res) => {
  const { q } = req.query;
  const results = await productService.search(q);
  res.status(200).json(results);
};

module.exports = {
  listAll,
  getById,
  insertProduct,
  update,
  deleteProduct,
  search,
};