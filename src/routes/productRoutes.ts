import express from 'express';
import { ProductController } from '../controllers/ProductController';
import authMiddleware from '../middleware/authMiddleware';

const router = express.Router();

router.get('/products', ProductController.getAllProducts);
router.get('/products/:id', ProductController.getProduct);

export default router;
