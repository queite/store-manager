const sinon = require('sinon');
const { expect } = require('chai');
const productModel = require('../../../models/productModel');
const { products, product } = require('../../../helpers/productsMock');
const connection = require('../../../models/connection');


describe('Model de produtos', () => {

  afterEach(() => {
    sinon.restore();
  });

  describe('#listAll', () => {
    sinon.stub(productModel, 'listAll').resolves(products);

    it('retorna um array de produtos', async () => {
      const response = await productModel.listAll();
      expect(response).to.be.an('array');
      products.forEach((product) => expect(product).to.be.an('object'));
    });

    it('os objetos dentro do array possuem as propriedades id e name', async () => {
      const response = await productModel.listAll();
      expect(response).to.have.keys['id', 'name'];
    });
  });

  describe('#getById', () => {
    sinon.stub(connection, 'execute').resolves(product)

    it('retorna um objeto com as propriedades id e name', async () => {
      const response = await productModel.getById(1);
      expect(response).to.be.an('object');
      expect(response).to.have.keys[('id', 'name')];
    });
  });
});