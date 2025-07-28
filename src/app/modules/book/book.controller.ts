import { Request, Response } from 'express';
import { BookService } from './book.service';

// Get all books with pagination and search
const getAllBooks = async (req: Request, res: Response) => {
    try {
        const { page , limit, search} = req.query;

        const options = {
            page: parseInt(page as string) || 1,
            limit: parseInt(limit as string) || 10,
        };

        const result = await BookService.getAllBooks(search as string, options);

        res.status(200).json({
            success: true,
            message: search
                ? 'Books search completed successfully'
                : 'All books retrieved successfully',
            data: result
        });
    } catch (error) {
        console.error('Get all books error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to retrieve books',
            error: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};



export const BookController = {
    getAllBooks
};
