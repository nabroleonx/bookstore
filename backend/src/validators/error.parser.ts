import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

const parser = (req: Request, res: Response, next: NextFunction) => {
  const validationErrors = validationResult(req);

  if (validationErrors.isEmpty()) {
    return next();
  }

  return res.status(400).json(validationErrors);
};

export default parser;
