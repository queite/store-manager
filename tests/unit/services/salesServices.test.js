const sinon = require('sinon');
const { expect } = require('chai');
const saleService = require('../../../services/saleService');
const saleModel = require('../../../models/saleModel');
const productModel = require('../../../models/productModel');
const {
  getByIdResponse,
  salesResponse,
  salesArray,
  salesWrongArray,
  salesList,
  saleById,
} = require("../../unit/mocks/salesMock");
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
      expect(response).to.have.keys('id', 'itemsSold');
      expect(response).to.be.deep.eq(salesResponse);
    });

    it('quando não há produto com id especificado retorna erro o NotFoundError', async () => {
      sinon.stub(productModel, 'getById').resolves(getByIdResponse);
      expect(saleService.insertSaleProduct(salesWrongArray)).to.be.rejectedWith(NotFoundError);
    });
  });

  describe('#listAll', () => {
    it('retorna array de objetos quando há vendas', async () => {
      sinon.stub(saleModel, 'listAll').resolves(salesList);

      const response = await saleService.listAll();
      expect(response).to.be.an('array');
      response.forEach((product) => expect(product).to.be.an('object'));
    });
  });

  describe('#getById', () => {
    it('retorna um array se encontrar o id', async () => {
      sinon.stub(saleModel, 'getById').resolves(saleById);
      const response = await saleService.getById(1);
      expect(response).to.be.an('array');
      expect(response).to.have.length(2);
    });

    it("retorna uma exceção se não encontrar o id", () => {
      sinon.stub(saleModel, "getById").resolves(false);
      expect(saleService.getById(200)).to.be.rejectedWith(NotFoundError);
    });
  });
});