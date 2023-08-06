import express from 'express';
import BookController from '../controllers/book.controller';
import { createBookValidator } from '../validators/book.validator';
import parseValidationResult from '../validators/error.parser';

const router = express.Router();

router.post('/', createBookValidator(), parseValidationResult, BookController.createBook);

router.put('/:id', BookController.updateBook);

router.delete('/:id', BookController.deleteBook);

router.get('/', BookController.getAllBooks);

router.get('/count', BookController.getTotalBooksCount);

export default router;
