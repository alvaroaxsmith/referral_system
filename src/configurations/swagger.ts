import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Referral Code System API',
      version: '1.0.0',
      description: 'The system entails generating a unique referral code for every customer upon making a purchase. Customers are then rewarded when they accumulate 10 referral points by successfully referring other customers who use their assigned codes.',
    },
  },
  apis: [
    'src/modules/customers/customer.controller.ts',
    'src/modules/purchases/purchase.controller.ts',
  ],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
