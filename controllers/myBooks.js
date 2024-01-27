import pool from '../db.js';

export const getMyBooks = async (req, res) => {
  const { user_id } = req.body;
  console.log("myBooks requested", req.body);
  try {
    const { rows } = await pool.query("SELECT * FROM books");
    res.status(200).json(rows);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const addBook = async (req, res) => {
  const { user_id } = req.body;
  const { bookid } = req.params;
  console.log("post request", user_id, bookid);
  try {
    const { rows } = await pool.query(
      "INSERT INTO books (bookid, user_id) VALUES ($1, $2) RETURNING *",
      [bookid, user_id]
    );
    res.status(201).json(rows);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteBook = async (req,res) => {
  const { user_id } = req.body;
  const { bookid } = req.params;
  console.log("delete request", user_id, bookid);
  try {
    const { rows } = await pool.query(
      "DELETE FROM books WHERE bookid = $1 AND user_id = $2 RETURNING *",
      [bookid, user_id]
    );
    res.status(201).json(rows);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}