import Book from "./book.model";

const getAllBooks = async (search: string, options: {page: number, limit: number}) => {
    const { page, limit } = options;
    const skip = (page - 1) * limit;
    let query: any = {};

    if (search && search.trim()) {
        query = {
            $text: { $search: search }
        }
    }

    const [books, totalBooks] = await Promise.all([
        Book.find(query)
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit)
            .lean(),
        Book.countDocuments(query)
    ]);

    const totalPage = Math.ceil(totalBooks / limit);


    return {
        result: books,
        meta: {
            total: totalBooks,
            page,
            limit,
            totalPage
        }
    };
};

export const BookService = {
    getAllBooks
};