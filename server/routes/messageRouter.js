const path = require("node:path");
const { Router } = require("express");

const messageRouter = Router();

// messageRouter.get("/", (req, res) => {
//   res.render("index", { message: "EJS rocks!" });
// });

messageRouter.get("/", (req, res) => {
  res.send("Hi");
});

module.exports = messageRouter;
