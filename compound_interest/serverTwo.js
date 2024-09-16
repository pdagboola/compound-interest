// const { prototype } = require("events");

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function () {
    console.log(this.name);
  };
}

const player1 = new Player("steve", "X");
const player2 = new Player("also steve", "O");

Object.getPrototypeOf(player1) === Player.prototype; // returns true
Object.getPrototypeOf(player2) === Player.prototype; // returns true

Player.prototype.sayHello = function () {
  console.log("Hello, I'm a player!");
};

player1.sayHello(); // logs "Hello, I'm a player!"
player2.sayHello(); // logs "Hello, I'm a player!"

// Player.prototype.__proto__
console.log(Object.getPrototypeOf(Player.prototype) === Object.prototype); // true

// Output may slightly differ based on the browser
player1.valueOf(); // Output: Object { name: "steve", marker: "X", sayName: sayName() }
console.log(player1.valueOf());

function Person(name) {
  this.name = name;
}
function NewPlayer(name, marker) {
  this.name = name;
  this.marker = marker;
}
Person.prototype.sayName = function () {
  console.log(`Hello I'm ${this.name}!`);
};
NewPlayer.prototype.getMarker = function () {
  console.log(`My marker is ${this.marker}!`);
};
Object.getPrototypeOf(NewPlayer.prototype);
Object.setPrototypeOf(NewPlayer.prototype, Person.prototype);

const player3 = new NewPlayer("steve", "O");
const player4 = new NewPlayer("also steve", "X");

player3.sayName();
player4.sayName();
player3.getMarker();
player4.getMarker();

let user = {
  name: "John",
  surname: "Smith",

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },

  get fullName() {
    return `${this.name} ${this.surname}`;
  },
};

let admin = {
  __proto__: user,
  isAdmin: true,
};
console.log(user);
alert(admin.fullName); // John Smith (*)

// setter triggers!
admin.fullName = "Alice Cooper"; // (**)

alert(admin.fullName); // Alice Cooper, state of admin modified
alert(user.fullName); // John Smith, state of user protected

let animal = {
  eats: true,
};

let rabbit = {
  jumps: true,
  __proto__: animal,
};

// Object.keys only returns own keys
alert(Object.keys(rabbit)); // jumps

// for..in loops over both own and inherited keys
for (let prop in rabbit) alert(prop); // jumps, then eats
