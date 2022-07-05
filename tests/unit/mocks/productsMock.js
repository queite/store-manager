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
  id: 1,
  name: 'Martelo de Thor',
};

const successfullyQuery = {
  affectedRows: 1
};

const searchResult =
  [
    {
      id: 1,
      name: 'Martelo de Thor',
    },
  ];

const updatedProduct = {
  id: 1,
  name: 'Martelo do Batman',
};

module.exports = {
  products,
  product,
  successfullyQuery,
  searchResult,
  updatedProduct,
};