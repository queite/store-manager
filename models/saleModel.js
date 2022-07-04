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
    saleId,
    productId,
    quantity,
  ]);
  await connection.query(insertQuery, [values]);
  return saleId;
};

const listAll = async () => {
  const query = `
  SELECT s.id AS saleId, s.date, sp.product_id AS productId, sp.quantity
  FROM StoreManager.sales AS s
  INNER JOIN StoreManager.sales_products AS sp
  ON s.id = sp.sale_id
  ORDER BY s.id, sp.product_id;
  `;
  const [sales] = await connection.execute(query);
  return sales;
};

const getById = async (id) => {
  const query = `
  SELECT s.date, sp.product_id AS productId, sp.quantity
  FROM StoreManager.sales AS s
  INNER JOIN StoreManager.sales_products AS sp
  ON s.id = sp.sale_id
  WHERE s.id = ?
  ORDER BY s.id, sp.product_id;
  `;
  const [sale] = await connection.execute(query, [id]);
  return sale;
};

const deleteSale = async (id) => {
  const query = 'DELETE FROM StoreManager.sales WHERE id = ? ';
  await connection.execute(query, [id]);
};

module.exports = {
  insertSaleProduct,
  insertSale,
  listAll,
  getById,
  deleteSale,
};