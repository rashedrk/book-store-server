import mongoose, { Schema } from "mongoose";
import { IBook } from "./book.interface";

const AuthorSchema = new Schema({
    author_id: {
        type: String,
        required: true,
        index: true
    },
    role: {
        type: String,
        default: ""
    }
});

const PopularShelfSchema = new Schema({
    count: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
    }
});

const BookSchema: Schema = new Schema({
    book_id: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    work_id: {
        type: String,
        required: true,
        index: true
    },
    title: {
        type: String,
        required: true,
        index: true,
        text: true
    },
    title_without_series: {
        type: String,
        required: true,
        text: true
    },
    isbn: {
        type: String,
        required: true,
        index: true
    },
    isbn13: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    asin: {
        type: String,
        default: "",
        index: true
    },
    kindle_asin: {
        type: String,
        default: "",
        index: true
    },
    authors: [AuthorSchema],
    description: {
        type: String,
        required: true,
        text: true
    },
    publisher: {
        type: String,
        required: true,
        text: true
    },
    num_pages: {
        type: String,
        required: true
    },
    publication_day: {
        type: String,
        default: ""
    },
    publication_month: {
        type: String,
        default: ""
    },
    publication_year: {
        type: String,
        required: true,
    },
    edition_information: {
        type: String,
        default: ""
    },
    format: {
        type: String,
        default: "",
    },
    language_code: {
        type: String,
        default: "",
    },
    country_code: {
        type: String,
        default: "",
    },
    is_ebook: {
        type: String,
        required: true,
    },
    average_rating: {
        type: String,
        required: true,
    },
    ratings_count: {
        type: String,
        required: true,
    },
    text_reviews_count: {
        type: String,
        required: true
    },
    popular_shelves: [PopularShelfSchema],
    series: [{
        type: String,
    }],
    similar_books: [{
        type: String,
    }],
    url: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    image_url: {
        type: String,
        required: true
    }
});

BookSchema.index({ title: 'text', description: 'text' });
BookSchema.index({ 'authors.author_id': 1 });


const Book = mongoose.model<IBook>('books', BookSchema);

export default Book; 