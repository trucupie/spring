const request = require("supertest");
const app = require("../../app"); // Assuming this is your express app
const db = require("../../db"); // Your database connection
const Book = require("../../models/book");

beforeAll(async () => {
  // Create the books table or use migrations
  await db.query(`
    CREATE TABLE IF NOT EXISTS books (
      isbn VARCHAR PRIMARY KEY,
      amazon_url TEXT,
      author TEXT,
      language TEXT,
      pages INTEGER,
      publisher TEXT,
      title TEXT,
      year INTEGER
    )
  `);
});

beforeEach(async () => {
  // Clean and seed the database before each test
  await db.query("DELETE FROM books");

  await Book.create({
    isbn: "1234567890",
    amazon_url: "http://amazon.com/book1",
    author: "Author 1",
    language: "English",
    pages: 300,
    publisher: "Publisher 1",
    title: "Book 1",
    year: 2021,
  });

  await Book.create({
    isbn: "0987654321",
    amazon_url: "http://amazon.com/book2",
    author: "Author 2",
    language: "English",
    pages: 400,
    publisher: "Publisher 2",
    title: "Book 2",
    year: 2022,
  });
});

afterAll(async () => {
  // Drop the books table and close the database connection
  await db.query("DROP TABLE IF EXISTS books");
  await db.end();
});

describe("Books API Integration Tests", () => {
  test("GET / - should return a list of books", async () => {
    const res = await request(app).get("/books");
    expect(res.statusCode).toBe(200);
    expect(res.body.books.length).toBe(2);
    expect(res.body.books[0]).toHaveProperty("isbn", "1234567890");
    expect(res.body.books[1]).toHaveProperty("isbn", "0987654321");
  });

  test("GET /:id - should return a specific book", async () => {
    const res = await request(app).get("/books/1234567890");
    expect(res.statusCode).toBe(200);
    expect(res.body.book).toHaveProperty("title", "Book 1");
  });

  test("POST / - should create a new book", async () => {
    const newBook = {
      isbn: "1122334455",
      amazon_url: "http://amazon.com/book3",
      author: "Author 3",
      language: "Spanish",
      pages: 200,
      publisher: "Publisher 3",
      title: "Book 3",
      year: 2023,
    };

    const res = await request(app).post("/books").send(newBook);
    expect(res.statusCode).toBe(201);
    expect(res.body.book).toHaveProperty("isbn", "1122334455");

    // Verify the book was added to the database
    const booksRes = await request(app).get("/books");
    expect(booksRes.body.books.length).toBe(3);
  });

  test("PUT /:isbn - should update an existing book", async () => {
    const updatedData = {
      amazon_url: "http://amazon.com/book1-updated",
      author: "Updated Author",
      language: "French",
      pages: 350,
      publisher: "Updated Publisher",
      title: "Updated Book 1",
      year: 2025,
    };

    const res = await request(app).put("/books/1234567890").send(updatedData);
    expect(res.statusCode).toBe(200);
    expect(res.body.book).toHaveProperty("author", "Updated Author");

    // Verify the book was updated in the database
    const bookRes = await request(app).get("/books/1234567890");
    expect(bookRes.body.book).toHaveProperty("language", "French");
  });

  test("DELETE /:isbn - should delete a book", async () => {
    const res = await request(app).delete("/books/1234567890");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: "Book deleted" });

    // Verify the book was deleted from the database
    const booksRes = await request(app).get("/books");
    expect(booksRes.body.books.length).toBe(1);
  });

  test("POST / - should validate schema and return error if invalid", async () => {
    const invalidBook = {
      isbn: "invalid",
      pages: "not a number",
    };

    const res = await request(app).post("/books").send(invalidBook);
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBeDefined();
  });
});
