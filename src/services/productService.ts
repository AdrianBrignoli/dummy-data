import db from '../config/db';
import { ProductModel } from '../models/productModel';

const getAll = async (): Promise<ProductModel[]> => {
  return db<ProductModel>('products').select('*');
};

export default { getAll };
