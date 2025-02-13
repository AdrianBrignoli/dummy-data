import { Request, Response, NextFunction } from 'express';
import { ProductModel } from '../models/ProductModel';
import CustomError from '../utils/CustomError';

export class ProductController {
  static async getAllProducts(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const data = await ProductModel.getAll();
      res.json(data);
    } catch (error) {
      next(error);
    }
  }

  static async getProduct(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const id = parseInt(req.params.id, 10);

      if (isNaN(id)) {
        throw new CustomError('Invalid product ID', 404);
        // return res.status(404).json({ message: 'Invalid product ID' });
      }

      const data = await ProductModel.getProductById(id);

      if (!data) {
        throw new CustomError('Product not found', 400);
        // return res.status(400).json({ message: 'Product not found' });
      }

      res.json(data);
    } catch (error) {
      //console.log('ADRIAN', error);
      next(error);
    }
  }
}
