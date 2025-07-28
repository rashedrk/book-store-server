export interface IAuthor {
    author_id: string;
    role?: string;
}

export interface IPopularShelf {
    count: string;
    name: string;
}

export interface IBook extends Document {
    book_id: string;
    work_id: string;
    title: string;
    title_without_series: string;
    isbn: string;
    isbn13: string;
    asin?: string;
    kindle_asin?: string;
    authors: IAuthor[];
    description: string;
    publisher: string;
    num_pages: string;
    publication_day?: string;
    publication_month?: string;
    publication_year: string;
    edition_information?: string;
    format?: string;
    language_code?: string;
    country_code?: string;
    is_ebook: string;
    average_rating: string;
    ratings_count: string;
    text_reviews_count: string;
    popular_shelves: IPopularShelf[];
    series: string[];
    similar_books: string[];
    url: string;
    link: string;
    image_url: string;
}