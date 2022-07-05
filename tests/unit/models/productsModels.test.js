const sinon = require('sinon');
const { expect, use } = require('chai');
const productModel = require('../../../models/productModel');
const {
  products,
  product,
  successfullyQuery,
  searchResult,
} = require('../mocks/productsMock');
const connection = require('../../../models/connection');
const chaiAsPromised = require('chai-as-promised');

use(chaiAsPromised);

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

    it('retorna um objeto com as propriedades id e name', async () => {
      sinon.stub(connection, 'execute').resolves([[product]]);
      const response = await productModel.getById(1);
      expect(response).to.be.deep.eq(product);
    });
  });

  describe('#insertProduct', () => {
    it('retorna um id', async () => {
      sinon.stub(connection, 'execute').resolves([{ insertId: 1 }]);
      const response = await productModel.insertProduct({ name: 'ProdutoX' });
      expect(response).to.be.deep.equal(1);
    });
  });

  describe('#update', () => {
    it('atualiza nome do produto ao receber id', async () => {
      sinon.stub(connection, 'execute').resolves(successfullyQuery);
      expect(productModel.update()).to.eventually.deep.eq(successfullyQuery);
    });
  });

  describe('#deleteProduct', () => {
    it('ao receber um id de produto o salva no banco', async () => {
      sinon.stub(connection, 'execute').resolves(successfullyQuery);
      expect(productModel.deleteProduct(1)).to.eventually.deep.eq(successfullyQuery);
    });
  });

  describe('#search', () => {
    it('busca pelo nome do produto ao receber uma string', async () => {
      sinon.stub(connection, 'execute').resolves(searchResult);
      expect(productModel.search('%Martelo%')).to.eventually.deep.eq(searchResult);
    });
  });
});