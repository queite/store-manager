const sinon = require('sinon');
const { expect } = require('chai');
const saleModel = require('../../../models/saleModel');
const { salesArray } = require('../../../helpers/salesMock');
const connection = require('../../../models/connection');

describe('Model de vendas', () => {
  beforeEach(() => {
    sinon.stub(connection, 'execute').resolves([{ insertId: 1 }]);
  });

  afterEach(() => {
    sinon.restore();
  });

  describe('#insertSale', () => {
    it('retorna um id quando chamado', async () => {
      const response = await saleModel.insertSale();
      expect(response).to.be.equal(1);
    });
  });

  describe('#insertSaleProduct', () => {
    it('ao receber um array salva os dados e retorna um id', async () => {
      sinon.stub(connection, 'query').resolves(1);
      const response = await saleModel.insertSaleProduct(salesArray);
      expect(response).to.be.equal(1);
    });
  });
});