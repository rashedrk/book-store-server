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


const BookSchema: Schema<IBook> = new Schema({
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
    average_rating: {
        type: String,
        required: true,
    },
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

const Book = mongoose.model<IBook>('books', BookSchema);

export default Book; 