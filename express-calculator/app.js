const express = require("express");
const app = express();
const port = 3000;

const getMean = (nums) => {
  return nums.reduce((acc, cur) => acc + parseFloat(cur), 0) / nums.length;
};

const getMedian = (nums) => {
  nums.sort((a, b) => a - b);
  let median;
  if (nums.length % 2 === 0) {
    median =
      (parseFloat(nums[nums.length / 2 - 1]) +
        parseFloat(nums[nums.length / 2])) /
      2;
  } else {
    median = parseFloat(nums[Math.floor(nums.length / 2)]);
  }

  return median;
};

const getMode = (nums) => {
  const mode = nums.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});
  let max = 0;
  let modeValue;
  for (let key in mode) {
    if (mode[key] > max) {
      max = mode[key];
      modeValue = key;
    }
  }

  return parseInt(modeValue);
};

/*
add a middleware to validate the query parameter, return a 400 status if passing invalid number
*/
app.use(function (req, res, next) {
  if (!req.query.nums) {
    return res.status(400).json({ error: "nums are required" });
  }

  const nums = req.query.nums.split(",");
  for (let num of nums) {
    if (isNaN(num)) {
      return res.status(400).json({ error: `${num} is not a number` });
    }
  }

  next();
});

app.get("/mean", function (req, res) {
  const nums = req.query.nums.split(",");
  const mean = getMean(nums);

  return res.json({ operation: "mean", value: mean });
});

app.get("/median", function (req, res) {
  const nums = req.query.nums.split(",");
  const median = getMedian(nums);

  return res.json({ operation: "median", value: median });
});

app.get("/mode", function (req, res) {
  const nums = req.query.nums.split(",");
  const modeValue = getMode(nums);

  return res.json({ operation: "mode", value: modeValue });
});

app.get("/all", function (req, res) {
  const nums = req.query.nums.split(",");
  const mean = getMean(nums);
  const median = getMedian(nums);
  const modeValue = getMode(nums);

  return res.json({ operation: "all", mean, median, mode: modeValue });
});

app.listen(port, function () {
  console.log(`Server is running on http://localhost:${port}`);
});

// Export for testing
module.exports = app;
