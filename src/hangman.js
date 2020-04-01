class Hangman {
  constructor(word, remainingGuessed) {
    this.status = "playing";
    this.word = word;
    this.remainingGuessed = remainingGuessed;
    this.guessedLetters = [];
  }
  get getPuzzle() {
    let wordArr = this.word.split("");
    let guessedStr = "";
    wordArr.forEach(word => {
      if (this.guessedLetters.includes(word.toLowerCase()) || word === " ") {
        guessedStr += word;
      } else {
        guessedStr += "*";
      }
    });
    if (guessedStr === this.word) {
      this.status = "finished";
    } else if (guessedStr !== this.word && this.remainingGuessed === 0) {
      this.status = "failed";
    }
    return guessedStr;
  }
  Guess(value) {
    if (this.status === "playing") {
      let myValue = String(value).toLowerCase();
      let includedGuessedVal = this.guessedLetters.includes(myValue);
      let wordVal = this.word.toLowerCase().includes(myValue);
      if (!includedGuessedVal && !wordVal) {
        this.remainingGuessed -= 1;
      } else {
        this.guessedLetters.push(myValue);
      }
    }
  }
  get getBackStatus() {
    if (this.status === "playing") {
      return `Guesses left: ${this.remainingGuessed}`;
    } else if (this.status === "failed") {
      return `Nice try! the word was "${this.word}"`;
    } else if (this.status === "finished") {
      return `Great work! you have guessed the word`;
    }
  }
}

export { Hangman as default };
