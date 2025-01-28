const request = require("supertest");
const fs = require("fs-extra");
const path = require("path");
const app = require("./app");

const DB_FILE = path.join(__dirname, "data/db.test.json");

beforeEach(async () => {
  await fs.writeJson(DB_FILE, {
    items: [],
  });
});

afterAll(async () => {
  await fs.writeJson(DB_FILE, {
    items: [],
  });
});

describe("GET /items", () => {
  test("It should return an empty array if no items exist", async () => {
    const resp = await request(app).get("/items");
    expect(resp.statusCode).toBe(200);
    expect(resp.body).toEqual([]);
  });

  test("It should return all items (if they exist)", async () => {
    await fs.writeJson(DB_FILE, {
      items: [{ name: "popsicle", price: 1.45 }],
    });

    const resp = await request(app).get("/items");
    expect(resp.statusCode).toBe(200);

    expect(resp.body).toEqual([{ name: "popsicle", price: 1.45 }]);
  });
});

describe("POST /items", () => {
  test("It should create a new item and return it", async () => {
    const newItem = { name: "chips", price: 2.5 };
    const resp = await request(app).post("/items").send(newItem);

    expect(resp.statusCode).toBe(200);
    expect(resp.body).toEqual({ added: newItem });

    const dataInDb = await fs.readJson(DB_FILE);
    expect(dataInDb.items).toEqual([{ name: "chips", price: 2.5 }]);
  });

  test("It should handle invalid data gracefully (example)", async () => {
    const resp = await request(app).post("/items").send({});

    expect(resp.statusCode).not.toBe(200);
  });
});

describe("GET /items/:name", () => {
  test("It should retrieve a single item by name", async () => {
    await fs.writeJson(DB_FILE, {
      items: [{ name: "popsicle", price: 1.45 }],
    });

    const resp = await request(app).get("/items/popsicle");
    expect(resp.statusCode).toBe(200);
    expect(resp.body).toEqual({ name: "popsicle", price: 1.45 });
  });

  test("It should return 404 if item is not found", async () => {
    const resp = await request(app).get("/items/not-found-item");

    expect(resp.statusCode).toBe(404);
    expect(resp.body).toEqual({
      error: { status: 404, message: "Item not found" },
      message: "Item not found",
    });
  });
});

describe("PATCH /items/:name", () => {
  test("It should update the item's data", async () => {
    await fs.writeJson(DB_FILE, {
      items: [{ name: "popsicle", price: 1.45 }],
    });

    const updatedData = { name: "popsicle", price: 2.0 };

    const resp = await request(app).patch("/items/popsicle").send(updatedData);

    expect(resp.statusCode).toBe(200);
    expect(resp.body).toEqual({ updated: updatedData });

    const dataInDb = await fs.readJson(DB_FILE);
    expect(dataInDb.items).toEqual([updatedData]);
  });

  test("It should return an error if item to update is not found", async () => {
    const updatedData = { name: "nonexistent", price: 10.0 };
    const resp = await request(app)
      .patch("/items/nonexistent")
      .send(updatedData);

    expect(resp.statusCode).toBe(500);
    expect(resp.body.message).toBe("Item not found");
  });
});

describe("DELETE /items/:name", () => {
  test("It should delete an existing item", async () => {
    await fs.writeJson(DB_FILE, {
      items: [{ name: "popsicle", price: 1.45 }],
    });

    const resp = await request(app).delete("/items/popsicle");
    expect(resp.statusCode).toBe(200);
    expect(resp.body).toEqual({ message: "Deleted" });

    const dataInDb = await fs.readJson(DB_FILE);
    expect(dataInDb.items).toEqual([]);
  });

  test("It should return an error if item doesn't exist", async () => {
    const resp = await request(app).delete("/items/does-not-exist");

    expect(resp.statusCode).toBe(500);
    expect(resp.body.message).toBe("Item not found");
  });
});

describe("Invalid routes", () => {
  test("It should return 404 for an invalid route", async () => {
    const resp = await request(app).get("/this-route-does-not-exist");
    expect(resp.statusCode).toBe(404);
    expect(resp.body).toEqual({
      error: { status: 404, message: "Not Found" },
      message: "Not Found",
    });
  });
});
