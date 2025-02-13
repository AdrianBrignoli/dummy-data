import express from 'express';
import productController from '../controllers/productController';

const router = express.Router();

router.get('/products', productController.getProductData);

export default router;
