/*
Basically `express.static` let’s you override the index.html file, so I made it go to `homepage.html` and for  all requests to `/app` goto your `index.html` file. In the react code, you have to change the path on your root route to be `/app`.

I also removed the `homepage` prop in your package.json file. Apparently create-react-app was pulling that address in for the production build and messing with pathing. I’ve got this working on my machine so if you have issues with it, we can talk about it in person on Tuesday 
Oh and all of the `to` props on your `Link` components need to be prefixed with /app now
*/
// ===============================
//          Dependencies
// ===============================
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var path = require("path");

// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

// Initialize Express
var app = express();

// Use morgan and body parser with our app
app.use(logger("dev"));
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static("build", {
	index: "homepage.html"
}));

app.get("/app/*", function(req, res) {
  res.sendFile(path.join(__dirname, "build/index.html"));
});

app.get("/app", function(req, res) {
  res.sendFile(path.join(__dirname, "build/index.html"));
});

// ===============================
//       MONGOOSE / MONGO
// ===============================
mongoose.connect("mongodb://localhost/prestige-world-wide");
var db = mongoose.connection;

db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

app.listen(4000, function() {
  console.log("App running on port 4000!");
});
