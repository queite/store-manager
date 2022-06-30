const sinon = require('sinon');
const { expect } = require('chai');
const productModel = require("../../../models/productModel");

describe('Model de produtos', () => {
  const products = [
    {
      id: 1,
      name: 'Martelo de Thor',
    },
    {
      id: 2,
      name: 'Traje de encolhimento',
    },
  ];
  sinon.stub(productModel, 'listAll').resolves(products);

  afterEach(() => {
    sinon.restore();
  });

  describe('#listAll', () => {
    it('retorna um array de produtos', async () => {
      const response = await productModel.listAll();
      expect(response).to.be.an('array');
    });

    it('os objetos dentro do array possuem as propriedades id e name', async () => {
      const response = await productModel.listAll();
      expect(response).to.have.keys['id', 'name'];
      console.log(response);
    })
  });
});