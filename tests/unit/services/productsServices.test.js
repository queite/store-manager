const sinon = require('sinon');
const productService = require('../../../services/productService');
const productModel = require("../../../models/productModel");
const { expect } = require('chai');

describe('Service de produtos', () => {
  const products = [
    {
      id: 1,
      name: "Martelo de Thor",
    },
    {
      id: 2,
      name: "Traje de encolhimento",
    },
  ];

  afterEach(() => {
    sinon.restore();
  });

  describe('#listAll', () => {
    it('retorna array de objetos quando há produtos', async () => {
      sinon.stub(productModel, "listAll").resolves(products);
      const response = await productService.listAll();
      expect(response).to.be.an('array');
    });
  });
});
