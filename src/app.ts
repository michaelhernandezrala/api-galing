import express from 'express';

import compression from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import rateLimiter from './middleware/rateLimiter';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(rateLimiter);

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', message: 'Salamin API is running' });
});

export default app;
