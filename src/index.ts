import * as express from "express";
import catsRouter from "./routes/cats.router";
import sharksRouter from "./routes/sharks.router";
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const PORT = 3001;

app.listen(PORT, function () {
  console.log(`Server Listening on ${PORT}`);
});

app.use(bodyParser.json({}));

app.use(bodyParser.urlencoded({}));

// Routes

app.use("/api/cats", catsRouter);
app.use("/api/sharks", sharksRouter);

const CLIENT_BUILD_PATH = path.join(__dirname, "../client/build");

// Static files
app.use(express.static(CLIENT_BUILD_PATH));

// Server React Client
app.get("*", function (req: any, res: any) {
  res.sendFile(path.join(CLIENT_BUILD_PATH, "index.html"));
});
