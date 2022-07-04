const connection = require('./connection');

const insertSaleProduct = async (saleId, array) => {
  const insertQuery = `
    INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES ?
  `;
  const values = array.map(({ productId, quantity }) => [
    saleId,
    productId,
    quantity,
  ]);
  await connection.query(insertQuery, [values]);
};

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
  insertSaleProduct,
  update,
};