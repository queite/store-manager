const express = require('express');
require('express-async-errors');

const productController = require('./controllers/productController');

const app = express();
app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', productController.listProducts);
// app.get("/products/:id",);

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação
module.exports = app;

const APP_PORT = Number(process.env.APP_PORT || 3000);
app.listen(APP_PORT, () => console.log(`running on port ${APP_PORT}`));