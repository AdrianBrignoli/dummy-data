import { Request, Response, NextFunction } from 'express';
import ProductModel from '../models/productModel';
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
      }

      const data = await ProductModel.getProductById(id);

      if (!data) {
        throw new CustomError('Product not found', 400);
      }

      res.json(data);
    } catch (error) {
      next(error);
    }
  }
}
