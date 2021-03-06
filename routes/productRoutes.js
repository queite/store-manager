const { Router } = require('express');
const productController = require('../controllers/productController');

const productsRoute = Router();

productsRoute.get('/', productController.listAll);
productsRoute.get('/search', productController.search);
productsRoute.get('/:id', productController.getById);
productsRoute.post('/', productController.insertProduct);
productsRoute.put('/:id', productController.update);
productsRoute.delete('/:id', productController.deleteProduct);

module.exports = productsRoute;
