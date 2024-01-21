import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './configurations/swagger';
import purchaseRoutes from './routes/purchaseRoutes';
import customerRoutes from './routes/customerRoutes';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/customers', customerRoutes);
app.use('/purchases', purchaseRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
