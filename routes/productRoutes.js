const { Router } = require('express');
const productController = require('../controllers/productController');

const productsRoute = Router();

productsRoute.get('/', productController.listAll);
productsRoute.get('/:id', productController.getById);
productsRoute.post('/', productController.insertProduct);

module.exports = productsRoute;
