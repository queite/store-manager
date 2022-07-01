const sinon = require('sinon');
const { expect } = require('chai');
const { products, product } = require('../../../helpers/productsMock');

const productsController = require('../../../controllers/productController');
const productService = require('../../../services/productService');

describe('Controller de produtos', () => {
  const res = {};
  const req = {};

  beforeEach(() => {

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub();
  });

  afterEach(() => {
    sinon.restore();
  });

  describe('#listProducts', () => {

    before(() => {
      sinon.stub(productService, 'listAll').resolves(products);
    });

    it('chama o método status com o valor 200', async () => {
      await productsController.listAll(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
    });

    it('chama o método json com um array de objetos', async () => {
      await productsController.listAll(req, res);
      products.forEach((product) => expect(product).to.be.an('object'));
    });

    it('os objetos contêm as propriedades id e name', async () => {
      await productsController.listAll(req, res);
      expect(res.json).to.have.keys[('id', 'name')];
    });
  });

  describe('#getById', () => {

    beforeEach(() => {
      req.params = {id: 1}
    });

    it('chama o método status com o valor 200', async () => {
      await productsController.getById(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
    });

    it('chama o método json com um objeto contendo as propriedades id e name', async () => {
      await productsController.getById(req, res);
      expect(res.json).to.have.keys[('id', 'name')];
    });
  });

  describe('#insertProduct', () => {

      beforeEach(() => {
        req.body = { name: 'ProdutoY' };
      });

    it('chama o método status com o valor 201', async () => {
      await productsController.insertProduct(req, res);
      expect(res.status.calledWith(201)).to.be.equal(true);
    });

    it('chama o método json com um objeto contendo as propriedades id e name', async () => {
      await productsController.insertProduct(req, res);
      expect(res.json).to.have.keys[('id', 'name')];
    });
  });
});