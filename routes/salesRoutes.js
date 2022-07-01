const { Router } = require('express');
const saleController = require('../controllers/saleController');

const productsRoute = Router();

// productsRoute.get('/', salesController.listAll);
// productsRoute.get('/:id', salesController.getById);
productsRoute.post('/', saleController.insertSaleProduct);

module.exports = productsRoute;