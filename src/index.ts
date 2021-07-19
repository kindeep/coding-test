import * as express from "express";
import photosRouter from "./routes/photos.router";
const app = express();
const path = require("path");
const PORT = 3001;

app.listen(PORT, function () {
  console.log(`Server Listening on ${PORT}`);
});

app.use(express.json({}));

app.use(express.urlencoded({ extended: false }));

// Routes

app.use("/api/photos", photosRouter);

const CLIENT_BUILD_PATH = path.join(__dirname, "../client/build");

// Static files
app.use(express.static(CLIENT_BUILD_PATH));

// Server React Client
app.get("*", function (req: any, res: any) {
  res.sendFile(path.join(CLIENT_BUILD_PATH, "index.html"));
});
