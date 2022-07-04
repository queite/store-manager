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

const product = {
  id: 2,
  name: 'Traje de encolhimento',
};

const getByIdResponse = {
  id: 1,
  name: 'Martelo de Thor',
};

const successfullyDeleted = {
  affectedRows: 1
};

module.exports = {
  products,
  product,
  getByIdResponse,
  successfullyDeleted,
};