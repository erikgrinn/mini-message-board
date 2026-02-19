const path = require("node:path");
const express = require("express");
const app = express();
const cors = require("cors");
// const apiNewRouter = require("./routes/apiNewRouter");
// const apiRouter = require("./routes/apiRouter");

const corsOptions = {
  origin: ["http://localhost:5173"],
};

//cors is middleware
app.use(cors(corsOptions));

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

// app.use(express.urlencoded({ extended: true }));
// use this instead for react:
app.use(express.json());

app.get("/api", (req, res) => {
  res.send({ title: "Mini Messageboard", messages });
});

app.post("/api/new", (req, res) => {
  console.log(req.body.message);
  messages.push({ text: req.body.message.messageText, user: req.body.message.messageUser, added: new Date() });
  res.end();
});

// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "ejs");

const PORT = 8080;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`My first Express app - listening on port ${PORT}!`);
});
