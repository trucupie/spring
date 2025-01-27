const { MarkovMachine } = require("./markov");

let mm = new MarkovMachine("the cat in the hat is in the hat");
console.log(mm.makeText()); // default ~100 words
console.log(mm.makeText(10)); // up to 10 words
