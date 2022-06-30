const sinon = require('sinon');
const { expect } = require('chai');
const productModel = require("../../../models/productModel");
const products = require("../../../helpers/productsMock");


describe('Model de produtos', () => {
  sinon.stub(productModel, 'listAll').resolves(products);

  afterEach(() => {
    sinon.restore();
  });

  describe('#listAll', () => {
    it('retorna um array de produtos', async () => {
      const response = await productModel.listAll();
      expect(response).to.be.an('array');
      products.forEach((product) => expect(product).to.be.an("object"));
    });

    it('os objetos dentro do array possuem as propriedades id e name', async () => {
      const response = await productModel.listAll();
      expect(response).to.have.keys['id', 'name'];
    })
  });
});