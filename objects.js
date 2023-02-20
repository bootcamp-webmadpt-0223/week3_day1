// Object definition
let user = {
  //   key: "value",
  name: "Pepe",
  age: 25,
  "full name": "Pepe Alacid",
};
// Add, check if exists, change and remove object properties
user.email = "pepe@gmail.com";
console.log(user);
if ("fullname" in user) {
  console.log("exists!");
}
user.name = "new name";
delete user.email;
console.log(user);

// Object.keys, Object.values and 'for in'
let userKeys = Object.keys(user);
console.log(userKeys);

let userValues = Object.values(user);
console.log(userValues);

for (let key in user) {
  // key = "name"
  let value = user[key];
  console.log(value);
}

// Object as const
const user2 = {
  name: "Jon",
};
user2.name = "";
user2.age = 25;
console.log(user2);
delete user2.name;
console.log(user2);

// Create a user object
let user3 = {
  name: "Pepe",
};

// Create books objects
let book1 = {
  name: "Book1",
};
let book2 = {
  name: "Book2",
};

// Add a "books" property to the user with books we just created
user3.books = [book1, book2];

// Create a library (user collection) and add the user to it
let library = [];
library.push(user3);

// Add new book to the user
let libUser = library[0];
let x = libUser;
libUser.books.push({ name: "Book3" });
console.log(libUser, library[0], user3);

// BONUS: Show the books of each user
