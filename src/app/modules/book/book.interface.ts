export interface IAuthor {
    author_id: string;
    role?: string;
}


export interface IBook extends Document {
    title: string;
    work_id: string;
    isbn: string;
    isbn13: string;
    average_rating: string;
    kindle_asin?: string;
    description: string;
    link: string;
    format?: string;
    authors: IAuthor[];
    publisher: string;
    num_pages: string;
    publication_day?: string;
    publication_month?: string;
    edition_information?: string;
    publication_year: string;
    url: string;
    image_url: string;
    book_id: string;
}