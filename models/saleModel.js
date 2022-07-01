const connection = require('./connection');

const insertSale = async () => {
  const query = 'INSERT INTO StoreManager.sales (date) VALUES (NOW())';
  const [{ insertId }] = await connection.execute(query);
  return insertId;
};

const insertSaleProduct = async (array) => {
  const saleId = await insertSale();
  const insertQuery = `
    INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES ?
  `;
  const values = array.map(({ productId, quantity }) => [
    saleId, productId, quantity,
  ]);
  await connection.query(insertQuery, [values]);
  return saleId;
};

module.exports = {
  insertSaleProduct,
  insertSale,
};