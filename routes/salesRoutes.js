const { Router } = require('express');
const saleController = require('../controllers/saleController');

const productsRoute = Router();

productsRoute.get('/', saleController.listAll);
productsRoute.get('/:id', saleController.getById);
productsRoute.post('/', saleController.insertSaleProduct);

module.exports = productsRoute;
