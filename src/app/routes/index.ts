import { Router } from "express";
import bookRoutes from "../modules/book/book.route";

const router = Router();

// book routes
router.use('/books', bookRoutes);


export default router;