const express = require("express");
const randomNumber = require("./random.js");
const dataArray = require("./data-stuff.js");

const app = express();
const PORT = 5000;

// This must be added before GET & POST routes.
app.use(express.static("server/public"));
app.use(express.json());

let randomNum = randomNumber();
let newColor = "yellow";
dataArray.push(newColor);
console.log(randomNum, dataArray[randomNum]);

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static("server/public"));
app.use(express.json());

// GET & POST Routes go here
app.get("/stuff", (req, res) => res.status(200).send(dataArray));

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
