import db from '../config/db';
import { Product } from '../types/productTypes';

export class ProductModel {
  static async getAll(): Promise<Product[]> {
    return db<Product>('products').select('*');
  }

  static async getProductById(id: number): Promise<Product | null> {
    return db<Product>('products').select('*').where({ id }).first();
  }
}
