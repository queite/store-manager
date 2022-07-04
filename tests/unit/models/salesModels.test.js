const sinon = require('sinon');
const { expect } = require('chai');
const saleModel = require('../../../models/saleModel');
const { salesList } = require('../../unit/mocks/salesMock');
const connection = require('../../../models/connection');

describe('Model de vendas', () => {

  afterEach(() => {
    sinon.restore();
  });

  describe('#insertSale', () => {
    it('retorna um id quando chamado', async () => {
      sinon.stub(connection, 'execute').resolves([{ insertId: 1 }]);
      const response = await saleModel.insertSale();
      expect(response).to.be.equal(1);
    });
  });

  // describe('#insertSaleProduct', () => {
  //   it('ao receber um array salva os dados e retorna um id', async () => {
  //     sinon.stub(connection, 'execute').resolves([{ insertId: 1 }]);
  //     sinon.stub(connection, 'query').resolves(1);
  //     const response = await saleModel.insertSaleProduct(salesArray);
  //     expect(response).to.be.equal(1);
  //   });
  // });

  describe('#listAll', () => {
    sinon.stub(saleModel, 'listAll').resolves(salesList);

    it('retorna um array de objetos com as chaves productId, quantity, saleId e date', async () => {
      const response = await saleModel.listAll();
      expect(response).to.be.an('array');
      response.forEach((product) =>
        expect(product)
          .to.be.an('object')
          .that.has.all.keys('productId', 'quantity', 'saleId', 'date')
      );
    });
  });

  describe('#getById', () => {
    sinon.stub(saleModel, "getById").resolves(salesList);

    it("retorna um array de objetos com as propriedades productId, quantity, saleId e date", async () => {
      const response = await saleModel.getById(1);
      expect(response).to.be.an('array');
      response.forEach((sale) => expect(sale)
          .to.be.an('object')
          .that.has.all.keys('productId', 'quantity', 'date')
      );
    });
  });
});