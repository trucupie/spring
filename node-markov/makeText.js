#!/usr/bin/env node

const fs = require("fs");
const axios = require("axios");
const { MarkovMachine } = require("./markov");

// Grab the method ("file" or "url") and the path/URL from command line
let method = process.argv[2];
let path = process.argv[3];

function generateText(text) {
  let mm = new MarkovMachine(text);
  console.log(mm.makeText());
}

// Handle reading a file and generating text from it
function makeTextFromFile(filePath) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(`Cannot read file: ${filePath}: ${err}`);
      process.exit(1);
    }
    generateText(data);
  });
}

// Handle fetching a URL and generating text from the response
async function makeTextFromURL(url) {
  try {
    let resp = await axios.get(url);
    generateText(resp.data);
  } catch (err) {
    console.error(`Cannot read URL: ${url}: ${err}`);
    process.exit(1);
  }
}

// Decide what to do based on the method specified
if (method === "file") {
  makeTextFromFile(path);
} else if (method === "url") {
  makeTextFromURL(path);
} else {
  console.error(`Unknown method: ${method}`);
  process.exit(1);
}
