const path = require("node:path");
const express = require("express");
const app = express();
const cors = require("cors");

const apiRouter = require("./routes/apiRouter");
const messageRouter = require("./routes/messageRouter");
const indexRouter = require("./routes/indexRouter");

const corsOptions = {
  origin: ["http://localhost:5173"],
};

//cors is middleware
app.use(cors(corsOptions));

// app.use(express.static(__dirname));

app.use("/api", apiRouter);
app.use("/new", messageRouter);
app.use("/", indexRouter);

// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "ejs");

const PORT = 8080;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`My first Express app - listening on port ${PORT}!`);
});
