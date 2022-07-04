const saleService = require('../services/saleService');

const insertSaleProduct = async (req, res) => {
  const sales = await saleService.insertSaleProduct(req.body);
  res.status(201).json(sales);
};

const listAll = async (req, res) => {
  const sales = await saleService.listAll();
  res.status(200).json(sales);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const sale = await saleService.getById(id);
  res.status(200).json(sale);
};

const deleteSale = async (req, res) => {
  const { id } = req.params;
  await saleService.deleteSale(id);
  res.status(204).send();
};

module.exports = {
  insertSaleProduct,
  listAll,
  getById,
  deleteSale,
};