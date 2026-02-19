const path = require("node:path");
const { Router } = require("express");

const apiNewRouter = Router();

apiNewRouter.get("/", (req, res) => {
  res.send("Hi");
});

module.exports = apiNewRouter;
