const fs = require("fs");

const filePath = process.argv[2];

const cat = (path) => {
  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      console.error(err.message);
      process.exit(1);
    }
    console.log(data);
  });
};

cat(filePath);
