const path = require("node:path");
const { Router } = require("express");

const apiRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

apiRouter.get("/", (req, res) => {
  res.json(messages);
});

module.exports = apiRouter;
