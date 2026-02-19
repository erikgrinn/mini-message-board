const path = require("node:path");
const { Router } = require("express");

const indexRouter = Router();



// indexRouter.get("/", (req, res) => {
//   res.render("index", { title: "Mini Messageboard", messages: messages });
// });

indexRouter.get("/", (req, res) => {
  res.send("Hello");
});

// indexRouter.post("/contact", (req, res) => {
// });

module.exports = indexRouter;
