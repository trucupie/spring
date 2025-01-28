// routes/items.js
const express = require("express");
const router = express.Router();

const errors = require("../errors");
const db = require("../fakeDb");

// Helper to wrap async route handlers
function asyncHandler(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch(next);
  };
}

// GET /items
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const items = await db.findAll("items");
    return res.json(items);
  })
);

// POST /items
router.post(
  "/",
  asyncHandler(async (req, res) => {
    if (!req.body.name || !req.body.price) {
      throw new errors.badRequest("Name and price are required");
    }
    const newItem = await db.create("items", req.body);
    return res.json({ added: newItem });
  })
);

// GET /items/:name
router.get(
  "/:name",
  asyncHandler(async (req, res) => {
    const item = await db.findOne("items", "name", req.params.name);
    if (!item) {
      // Use our custom error
      throw new errors.notFound("Item not found");
    }
    return res.json(item);
  })
);

// PATCH /items/:name
router.patch(
  "/:name",
  asyncHandler(async (req, res) => {
    const updatedItem = await db.updateOne(
      "items",
      "name",
      req.params.name,
      req.body
    );
    return res.json({ updated: updatedItem });
  })
);

// DELETE /items/:name
router.delete(
  "/:name",
  asyncHandler(async (req, res) => {
    await db.deleteOne("items", "name", req.params.name);
    return res.json({ message: "Deleted" });
  })
);

module.exports = router;
