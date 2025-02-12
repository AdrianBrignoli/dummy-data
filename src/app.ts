import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes';

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

//app.listen(3000, () => {
//  console.log('Server is running on http://localhost:3000');
//});

export default app;
