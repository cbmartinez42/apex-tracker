const express = require("express");
const jwt = require('jsonwebtoken')
require("dotenv").config();
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const cors = require('cors')
const path = require('path')

const PORT = process.env.PORT || 3001;
// const {createProxyMiddleware} = require('http-proxy-middleware');

// Define middleware here
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);
// app.use("/", createProxyMiddleware({target: process.env.PORT || "http://localhost:"+PORT}))

app.get("/", function(req, res) {
  res.json(path.join(__dirname, "public/index.html"));
});

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/apex-stats", { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
