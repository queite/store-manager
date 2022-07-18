const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointsFiles = ['./routes/productRoutes.js', './routes/salesRoutes.js'];

swaggerAutogen(outputFile, endpointsFiles);