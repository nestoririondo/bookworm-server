import express from "express";
import { getMyBooks, addBook, deleteBook } from "../controllers/myBooks.js";

const myBooksRouter = express.Router();

myBooksRouter.get("/", getMyBooks);
myBooksRouter.post("/add/:bookid", addBook);
myBooksRouter.delete("/delete/:bookid", deleteBook);

export default myBooksRouter