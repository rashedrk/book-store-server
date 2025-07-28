import Book from "./book.model";

const getAllBooks = async (search: string, options: any) => {
    const { page, limit } = options;
    const skip = (page - 1) * limit;
    let query: any = {};

    if (search && search.trim()) {
        query = {
            $or: [
                { title: { $regex: search, $options: 'i' } },
                { description: { $regex: search, $options: 'i' } },
            ]
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


    return {
        result: books,
        total: totalBooks,
    };
};

export const BookService = {
    getAllBooks
};