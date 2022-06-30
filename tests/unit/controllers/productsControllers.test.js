const sinon = require('sinon');
const { expect } = require('chai');
const { products } = require('../../../helpers/productsMock');

const productsController = require('../../../controllers/productController');
const productService = require('../../../services/productService');

describe('Controller de produtos', () => {
  const res = {};
  const req = {};

  before(() => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub();

    sinon.stub(productService, "listAll").resolves(products);
  });

  afterEach(() => {
    sinon.restore();
  });

  describe('#listProducts', () => {
    it('retorna o status 200', async () => {
      await productsController.listAll(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
    });

    it('é chamado o método json com um array de objetos', async () => {
      await productsController.listAll(req, res);
      products.forEach((product) => expect(product).to.be.an('object'));
    });

    it("os objetos contêm as propriedades id e name", async () => {
      await productsController.listAll(req, res);
      expect(res.json).to.have.keys[("id", "name")];
    });
  });
});