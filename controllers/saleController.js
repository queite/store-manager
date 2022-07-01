const saleService = require('../services/saleService');

const insertSaleProduct = async (req, res) => {
  const sales = await saleService.insertSaleProduct(req.body);
  res.status(201).json(sales);
};

module.exports = {
  insertSaleProduct,
};