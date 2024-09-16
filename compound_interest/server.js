const { createServer } = require("node:http");

const hostname = "127.0.0.1";
const port = 3000;

function Player(name, score) {
  this.name = name;
  this.score = score;
}
const player = new Player("Peter", "5");
// console.log('player.name')

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(`${player.score}`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
