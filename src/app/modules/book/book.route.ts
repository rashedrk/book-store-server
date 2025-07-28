import { Router } from 'express';
import { BookController } from './book.controller';

const router = Router();


// Get all books
router.get('/', BookController.getAllBooks);

export default router;

