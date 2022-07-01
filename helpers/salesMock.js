const salesArray = [
  {
    productId: 1,
    quantity: 1,
  },
  {
    productId: 2,
    quantity: 5,
  },
];

const salesWrongArray = [
  {
    productId: 200,
    quantity: 1,
  },
  {
    productId: 2,
    quantity: 5,
  },
];

const salesResponse = {
  id: 3,
  itemsSold: [
    {
      productId: 1,
      quantity: 1,
    },
    {
      productId: 2,
      quantity: 5,
    },
  ],
};
module.exports = {
  salesArray,
  salesResponse,
  salesWrongArray,
};