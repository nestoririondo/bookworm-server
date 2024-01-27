import express from "express";
import myBooksRouter from "./routes/myBooks.js";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); // for allowing cross-origin requests
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use("/myBooks", myBooksRouter);

app.get("*", (req, res) => {
  res.status(404).send("404 Not Found");
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
