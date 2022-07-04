const sinon = require('sinon');
const { expect } = require('chai');
const saleService = require('../../../services/saleService');
const { salesResponse, salesList, saleById } = require('../../unit/mocks/salesMock');
const saleController = require('../../../controllers/saleController');

describe('Controller de vendas', () => {
  const res = {};
  const req = {};

  beforeEach(() => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub();
  });

  afterEach(() => {
    sinon.restore();
  });

  describe('#insertSaleProduct', () => {

    beforeEach(() => {
      sinon.stub(saleService, 'insertSaleProduct').resolves(salesResponse);
    });

    it('chama o método status com o valor 201', async () => {
      await saleController.insertSaleProduct(req, res);
      expect(res.status.calledWith(201)).to.be.equal(true);
    });

    it('chama o método json com um objeto', async () => {
      await saleController.insertSaleProduct(req, res);
      expect(res.json.calledWith(salesResponse));
    });
  });

  describe('#listAll', () => {
    beforeEach(() => {
      sinon.stub(saleService, 'listAll').resolves(salesList);
    });

    it('chama o método status com o valor 200', async () => {
      await saleController.listAll(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
    });

    it('chama o método json com um objeto com as propriedades id e itemsSold', async () => {
      await saleController.listAll(req, res);
      expect(res.json.calledWith(salesList));
    });
  });

  describe('#getById', () => {
    beforeEach(() => {
      req.params = { id: 1 };
      sinon.stub(saleService, 'getById').resolves(saleById);
    });

    it('chama o método status com o valor 200', async () => {
      await saleController.getById(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
    });

    it('chama o método json com um array', async () => {
      await saleController.getById(req, res);
      expect(res.json.calledWith(saleById));
    });
  });
});