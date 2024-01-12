const express = require("express");
const { randomNumber, myList } = require("./random.js");
const app = express();
const PORT = 5000;

// This must be added before GET & POST routes.
app.use(express.static("server/public"));
app.use(express.json());

let randomNum = randomNumber();
let newColor = "yellow";
myList.push(newColor);
console.log(randomNum, myList[randomNum]);

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static("server/public"));
app.use(express.json());

// GET & POST Routes go here

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
