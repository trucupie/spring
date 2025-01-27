const fs = require("fs-extra");
const axios = require("axios");

const getConfig = () => {
  if (process.argv[2]) {
    return {
      hasOutputFile: process.argv[2] === "--out",
      outputFile: process.argv[3],
      path: process.argv[4],
      isUrl: process.argv[4].slice(0, 4) === "http",
    };
  }

  return {
    hasOutputFile: false,
    outputFile: null,
    path: process.argv[2],
    isUrl: process.argv[2].slice(0, 4) === "http",
  };
};

const { hasOutputFile, outputFile, path, isUrl } = getConfig();

const cat = async (path) => {
  return fs.readFile(path, "utf8");
};

const webCat = async (url) => {
  const { data } = await axios.get(url);

  return data;
};

(async () => {
  const catFunc = isUrl ? webCat : cat;
  try {
    const result = await catFunc(path);
    if (hasOutputFile) {
      await fs.writeFile(outputFile, result);
      console.log(`no output, but ${outputFile} contains contents of ${path}`);
    } else {
      console.log(result);
    }
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
})();
