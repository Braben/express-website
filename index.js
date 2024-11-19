// const express = require("express");
// const path = require("path");

// const homePagemMiddleWare = (req, res, next) => {
//   console.log("permission granted");
//   next();
// };

// const homePage = (req, res) => {
//   res.send("welcome to the Home page");
// };

// const aboutPage = (req, res) => {
//   res.send("welcome to the about page");
// };

// const handleHtml = (req, res) => {
//   //1. locate file
//   const HandleHtmlFile = path.join(__dirname, "public", "index.html");

//   // 2.  sending the file
//   res.sendFile(HandleHtmlFile);
// };
// server = express();
// //server.use(homePageMiddleWare) //general
// // server.get("/about", aboutPage);
// // server.get("/", homePagemMiddleWare, homePage);
// server.get("/", handleHtml);

// server.listen(
//   3000,
//   "localhost",
//   console.log("the server is listening 0n port 5000")
// );

// =========================================================
//==========================================================
//method two
//renders css file using .static() method on express
//using the express.static() middleware
const express = require("express");
path = require("path");

server = express();

//handlers or controllers
const loginHandler = (req, res) => {
  res.send("Done");
};

//express general middleware definitions
server.use(express.static(path.join(__dirname, "public")));

//routes
server.post("/login", loginHandler);

server.listen(4000, "localhost", console.log("The server is ready"));
