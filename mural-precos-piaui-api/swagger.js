import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Mural Preços Piauí - Proxy API',
      version: '1.0.0',
    },
  },
  apis: ['./src/routes/*.js'],
};

const spec = swaggerJsdoc(options);
export default spec;
