const express = require("express");
const app = express();

app.use(express.json());

const itemsRoutes = require("./routes/items");
const errors = require("./errors");

app.use("/items", itemsRoutes);

app.use((req, res, next) => {
  return next(new errors.notFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);

  return res.json({
    error: err,
    message: err.message,
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

module.exports = app;
