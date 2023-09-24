class Shiritori {
  words = [];
  gameOver = false;

  play(word) {
    if (this.gameOver) {
      return "Please restart Game";
    } else {
      if (this.words.length === 0) {
        this.words = [word];
        return this.words;
      } else if (
        !this.words.includes(word) &&
        word[0] === this.words[this.words.length - 1].at(-1)
      ) {
        this.words = [...this.words, word];
        return this.words;
      } else {
        this.gameOver = true;
        return "Game Over";
      }
    }
  }
  restart() {
    this.gameOver = false;
    this.words = [];
    return "Game Restarted";
  }
}

const myShiritori = new Shiritori();
