const sinon = require('sinon');
const productService = require('../../../services/productService');
const productModel = require('../../../models/productModel');
const { expect, use } = require('chai');
const { products, product } = require('../../unit/mocks/productsMock');
const chaiAsPromised = require('chai-as-promised');
const NotFoundError = require('../../../helpers/NotFoundError');

use(chaiAsPromised);

describe('Service de produtos', () => {

  afterEach(() => {
    sinon.restore();
  });

  describe('#listAll', () => {
    it('retorna array de objetos quando há produtos', async () => {
      sinon.stub(productModel, 'listAll').resolves(products);

      const response = await productService.listAll();
      expect(response).to.be.an('array');
      products.forEach((product) => expect(product).to.be.an('object'));
    });
  });

  describe('#getById', () => {
    it('retorna um objeto contendo id e name se houver produto', async () => {
      sinon.stub(productModel, 'getById').resolves(product);
      const response = await productService.getById(1);
      expect(response).to.be.an('object');
      expect(response).to.have.keys['id', 'name'];
    });

    it('retorna uma exceção se não houver produto', () => {
      sinon.stub(productModel, 'getById').resolves(false);
      expect(productService.getById(200)).to.be.rejectedWith(NotFoundError);
    });
  });

  describe('#insertProduct', () => {
    it('retorna um id quando recebe dados válidos', async () => {
      sinon.stub(productModel, 'insertProduct').resolves(1);
      const response = await productService.insertProduct({ name: 'ProdutoX' });
      expect(response).to.be.equal(1);
    });
  });
});
