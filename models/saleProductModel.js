const connection = require('./connection');

const update = async (saleId, productId, quantity) => {
  const updateQuery = `
    UPDATE StoreManager.sales_products
    SET quantity = ?
    WHERE sale_id =? AND product_id =?
  `;
  await connection.query(updateQuery, [quantity, saleId, productId]);
  return saleId;
};

module.exports = {
  update,
};