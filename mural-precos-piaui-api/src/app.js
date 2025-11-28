import express from 'express';
import cors from 'cors';
import rateLimiter from './middleware/rateLimiter.js';
import tceRoutes from './routes/tceRoutes.js';
import pesquisaRoutes from './routes/pesquisaRoutes.js';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from '../swagger.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(rateLimiter);

app.use('/tce', tceRoutes);
app.use('/pesquisa', pesquisaRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/', (req, res) => res.json({ status: 'ok', env: process.env.NODE_ENV || 'dev' }));

export default app;
