import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes';
import errorHandler from './middleware/errorHandler';
import authMiddleware from './middleware/authMiddleware';

dotenv.config();

const app = express();

app.use((req, res, next) => {
  console.log(`User connected: ${req.method} ${req.url}`);
  next(); // Proceed to the next middleware or route handler
});

app.use(express.json());
app.use(cors());

// Use API routes
app.use('/api', productRoutes);

app.use(errorHandler);

app.listen(10000, () => {
  console.log('Server is running on port 10000');
});

export default app;
