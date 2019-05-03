import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";

import UserRoutes from "./api/routes/UserRoutes";
import JsonPatchRoutes from "./api/routes/JsonPatchRoutes";
import ThumbnailRequestRoutes from "./api/routes/ThumbnailRequestRoutes";

dotenv.config();

var accessLogStream = fs.createWriteStream(
  path.join(__dirname, "logs/access.log"),
  { flags: "a" }
);

const app = express();

app.use(morgan("combined", { stream: accessLogStream }));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function(req, res) {
  res.json({ data: "home" });
});

app.use("/user", UserRoutes);
app.use("/json", JsonPatchRoutes);
app.use("/image", ThumbnailRequestRoutes);

app.listen(3000, function() {
  console.log("Node server listening on port 3000");
});

export default app;
