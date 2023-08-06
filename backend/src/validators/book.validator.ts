import { body } from 'express-validator';

const createBookValidator = () => [
  body('title').exists().withMessage('Title is a mandatory field').isString().withMessage('Title must be a string'),
  body('description')
    .exists()
    .withMessage('Description is a mandatory field')
    .isString()
    .withMessage('Description must be a string'),
  body('coverImage')
    .exists()
    .withMessage('Cover image is a mandatory field')
    .isURL()
    .withMessage('Cover image must be a valid URL'),
  body('price')
    .exists()
    .withMessage('Price is a mandatory field')
    .isNumeric()
    .withMessage('Price must be a number')
    .custom((value) => value > 0)
    .withMessage('Price must be greater than 0'),
  body('discountRate')
    .exists()
    .withMessage('Discount is a mandatory field')
    .isNumeric()
    .withMessage('Discount must be a number')
    .custom((value) => value >= 0 && value <= 99)
    .withMessage('Discount must be between 0 and 100'),
];

export { createBookValidator };
