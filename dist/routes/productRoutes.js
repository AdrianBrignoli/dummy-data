import express from 'express';
import productController from '../controllers/productController';
const router = express.Router();
router.get('/product-data', productController.getProductData);
export default router;
