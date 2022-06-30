const sinon = require('sinon');
const productService = require('../../../services/productService');
const productModel = require("../../../models/productModel");
const { expect } = require('chai');
const products = require('../../../helpers/productsMock');

describe('Service de produtos', () => {

  afterEach(() => {
    sinon.restore();
  });

  describe('#listAll', () => {
    it('retorna array de objetos quando há produtos', async () => {
      sinon.stub(productModel, "listAll").resolves(products);
      const response = await productService.listAll();
      expect(response).to.be.an('array');
      products.forEach((product) => expect(product).to.be.an("object"));
    });
  });
});
