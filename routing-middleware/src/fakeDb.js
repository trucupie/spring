const fs = require("fs-extra");
const path = require("path");

const file =
  process.env.NODE_ENV === "test"
    ? path.join(__dirname, "data/db.test.json")
    : path.join(__dirname, "data/db.json");

// Ensure the file exists
if (!fs.existsSync(file)) {
  fs.writeJsonSync(file, {});
}

/**
 * Returns the entire data object from the JSON file
 */
async function _getData() {
  return fs.readJson(file);
}

/**
 * Writes the entire data object back to the JSON file
 */
async function _writeData(data) {
  return fs.writeJson(file, data);
}

const findAll = async (collection) => {
  const data = await _getData();
  if (!data[collection]) {
    data[collection] = [];
  }
  // Return a copy so no accidental mutation
  return [...data[collection]];
};

const findOne = async (collection, key, value) => {
  const data = await _getData();
  const items = data[collection] || [];
  return items.find((item) => item[key] === value);
};

const create = async (collection, item) => {
  const data = await _getData();
  if (!data[collection]) {
    data[collection] = [];
  }
  data[collection].push(item);
  await _writeData(data);
  return item;
};

const updateOne = async (collection, key, value, newItem) => {
  const data = await _getData();
  const items = data[collection] || [];

  const idx = items.findIndex((obj) => obj[key] === value);
  if (idx === -1) {
    throw new Error("Item not found");
  }

  // Update existing item
  data[collection][idx] = newItem;
  await _writeData(data);
  return newItem;
};

const deleteOne = async (collection, key, value) => {
  const data = await _getData();
  const items = data[collection] || [];

  const idx = items.findIndex((obj) => obj[key] === value);
  if (idx === -1) {
    throw new Error("Item not found");
  }

  data[collection].splice(idx, 1);
  await _writeData(data);
  return { message: "Deleted" };
};

module.exports = { findAll, findOne, create, updateOne, deleteOne };
