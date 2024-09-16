function Books(title, author, pageNo, read) {
  this.title = title;
  this.author = author;
  this.pageNo = pageNo;
  this.read = read;
  this.info = function info() {
    return `${this.title} by ${this.author}, ${this.pageNo}, ${this.read}`;
  };
  console.log(Books.info());
}
Object.getPrototypeOf(player1) === Books.prototype; // returns true
Object.getPrototypeOf(player2) === Books.prototype; // returns true
