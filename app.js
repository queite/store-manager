const express = require('express');
require('express-async-errors');
const swaggerUi = require('swagger-ui-express');
const productsRoutes = require('./routes/productRoutes');
const salesRoutes = require('./routes/salesRoutes');
const swaggerFile = require('./swagger_output.json');
const errMiddleware = require('./middlewares/errMiddleware');

const app = express();
app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use('/products', productsRoutes);
app.use('/sales', salesRoutes);

app.use(errMiddleware);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação
module.exports = app;