const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
// const endpointsFiles = ['./routes/productRoutes.js', './routes/salesRoutes.js'];
const endpointsFiles = ['./app.js'];

swaggerAutogen(outputFile, endpointsFiles);