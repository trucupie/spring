/** Textual markov chain generator */

class MarkovMachine {
  /**
   * Build Markov machine; read in text.
   *
   * @param {string} text The input text to build the chain from
   */
  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter((c) => c !== "");
    this.makeChains();
  }

  /**
   * Set markov chains:
   *
   * For "the cat in the hat", chains could be:
   * {
   *   "the": ["cat", "hat"],
   *   "cat": ["in"],
   *   "in" : ["the"],
   *   "hat": [null]
   * }
   */
  makeChains() {
    this.chains = {};

    for (let i = 0; i < this.words.length; i++) {
      let word = this.words[i];
      let nextWord = this.words[i + 1] || null;

      // If word isn't yet in chains, add it
      if (!this.chains[word]) {
        this.chains[word] = [];
      }
      // Push the next word (could be null) onto its list
      this.chains[word].push(nextWord);
    }
  }

  /**
   * Pick a random choice from an array
   *
   * @param {Array} arr array of possible choices
   */
  static choice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  /**
   * Return random text from chains
   *
   * @param {number} numWords the maximum number of words to generate (default=100)
   */
  makeText(numWords = 100) {
    // Pick a random start word
    let keys = Object.keys(this.chains);
    let key = MarkovMachine.choice(keys);
    let out = [];

    // Produce words until we hit desired length or a null “next word”
    for (let i = 0; i < numWords; i++) {
      out.push(key);
      let nextWords = this.chains[key];
      let nextWord = MarkovMachine.choice(nextWords);
      if (nextWord === null) break;
      key = nextWord;
    }

    return out.join(" ");
  }
}

module.exports = {
  MarkovMachine,
};
