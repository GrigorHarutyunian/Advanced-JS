function Song(name, singer) {
  this.name = name;
  this.singer = singer;
}
const heyJude = new Song("Hey Jude", "The Beatles");
const jaded = new Song("Jaded", "Aerosmith");

function Playlist() {
  this.list = [];
  this.songNum = 0;
  this.turnOn = false;
}
Playlist.prototype.add = function (...newSong) {
  this.list = [...this.list, ...newSong];
};

Playlist.prototype.play = function () {
  return this.turnOn
    ? `${this.list[this.songNum].name} started`
    : `${this.list[this.songNum].name} started to play`;
};

Playlist.prototype.next = function () {
  let prevSongNum = "";
  if (this.songNum === this.list.length - 1) {
    this.songNum = 0;
    prevSongNum = this.list[this.list.length - 1];
  } else {
    this.songNum++;
    prevSongNum = this.list[this.songNum - 1];
  }

  return `${prevSongNum.name} stopped ${
    this.list[this.songNum].name
  } started to play`;
};

Playlist.prototype.stop = function () {
  this.turnOn = true;
  return `${this.list[this.songNum].name} stopped`;
};

const playlist = new Playlist();
playlist.add(heyJude, jaded);
console.log(playlist.play());
console.log(playlist.stop());
console.log(playlist.play());
console.log(playlist.next());
