import { Request, Response, NextFunction } from 'express';
import CustomError from '../utils/CustomError';

const errorHandler = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    res.status(err.statuscode).json({ message: err.messageClient });
  } else {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default errorHandler;
