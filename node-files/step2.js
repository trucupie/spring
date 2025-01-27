const fs = require("fs");
const axios = require("axios");

const path = process.argv[2];

const cat = (path) => {
  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      console.error(err.message);
      process.exit(1);
    }
    console.log(data);
  });
};

const webCat = async (url) => {
  try {
    let res = await axios.get(url);
    console.log(res.data);
  } catch (err) {
    console.error(`Error fetching ${url}: ${err}`);
    process.exit(1);
  }
};

if (path.slice(0, 4) === "http") {
  webCat(path);
} else {
  cat(path);
}
