const sinon = require('sinon');
const { expect } = require('chai');
const saleService = require('../../../services/saleService');
const { salesResponse } = require('../../../helpers/salesMock');
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

    it('os objetos contêm as propriedades id e itemsSold', async () => {
      await saleController.insertSaleProduct(req, res);
      expect(res.json.calledWith(salesResponse));
    });
  });
});