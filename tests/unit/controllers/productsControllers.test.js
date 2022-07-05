const sinon = require('sinon');
const { expect } = require('chai');
const { products, product, searchResult } = require('../../unit/mocks/productsMock');

const productsController = require('../../../controllers/productController');
const productService = require('../../../services/productService');

describe('Controller de produtos', () => {
  const res = {};
  const req = {};

  beforeEach(() => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub();
    res.sendStatus = sinon.stub();
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
      req.params = { id: 1 }
      sinon.stub(productService, 'getById').resolves(product);
    });

    it('chama o método status com o valor 200', async () => {
      await productsController.getById(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
    });

    it('chama o método json com um objeto contendo as propriedades id e name', async () => {
      await productsController.getById(req, res);
      expect(res.json).to.have.keys[('id', 'name')];
      expect(res.json.calledWith(product)).to.be.eq(true);
    });
  });

  describe('#insertProduct', () => {

      beforeEach(() => {
        req.body = { name: 'ProdutoY' };
        sinon.stub(productService, 'insertProduct').resolves(4);
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

  describe('#deleteProduct', () => {

    it('chama o método status com o valor 204', async () => {
      req.params = { id: 1 };
      res.sendStatus = sinon.stub();
      sinon.stub(productService, 'existProductId').resolves();
      sinon.stub(productService, 'deleteProduct').resolves();
      await productsController.deleteProduct(req, res);
      expect(res.sendStatus.calledWith(204)).to.be.equal(true);
    });
  });

  describe('#search', () => {

    beforeEach(() => {
      req.query = { q: 'Martelo' };
    });

    it('chama o método status com o valor 200', async () => {
      await productsController.search(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
    });
  });
});