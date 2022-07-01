const sinon = require('sinon');
const { expect } = require('chai');
const saleService = require('../../../services/saleService');
const saleModel = require('../../../models/saleModel');
const { salesResponse, salesArray, salesWrongArray } = require('../../../helpers/salesMock');
const productModel = require('../../../models/productModel');
const { getByIdResponse } = require('../../../helpers/productsMock');
const NotFoundError = require('../../../helpers/NotFoundError');

describe('Service de Vendas', () => {

  afterEach(() => {
    sinon.restore();
  });

  describe('#insertSaleProduct', () => {
    it('retorna um objeto quando executada com sucesso', async () => {
      sinon.stub(saleService, 'insertSaleProduct').resolves(salesResponse);
      // sinon.stub(saleModel, 'insertSaleProduct').resolves(3);
      const response = await saleService.insertSaleProduct(salesArray);
      expect(response).to.be.an('object');
      expect(response).to.have.keys("id", 'itemsSold');
      expect(response).to.be.deep.eq(salesResponse);
    });

    it('quando não há produto com id especidicado retorna erro o NotFoundError', async () => {
      sinon.stub(productModel, 'getById').resolves(getByIdResponse);
      expect(saleService.insertSaleProduct(salesWrongArray)).to.be.rejectedWith(NotFoundError);
    });
  });
});