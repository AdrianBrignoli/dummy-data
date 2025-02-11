import { Request, Response } from 'express';
import productService from '../services/productService';

const getProductData = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = await productService.getAll();
    res.json(data);
  } catch (error) {
    console.error('Error fetching dummy data:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
};

export default { getProductData };
