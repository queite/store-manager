const sinon = require('sinon');
const { expect, use } = require('chai');
const saleProductModel = require('../../../models/saleProductModel');
const connection = require('../../../models/connection');
const chaiAsPromised = require('chai-as-promised');
const { salesArray } = require('../mocks/salesMock');
const { successfullyQuery } = require('../mocks/productsMock');

use(chaiAsPromised);

describe('Model de produtos e vendas', () => {

  before(() => sinon.stub(connection, 'query').resolves(successfullyQuery));

  describe('#insertSaleProduct', () => {
    it('ao receber informações de venda salva os dados no banco', async () => {
      expect(saleProductModel.insertSaleProduct(3, salesArray)).to.eventually.deep.eq(successfullyQuery);
    });
  });

  describe('#update', () => {
    it('ao receber od dados corretos atualiza vendas', async () => {
      expect(saleProductModel.update(3, salesArray)).to.eventually.deep.eq(successfullyQuery);
    });
  });
});
