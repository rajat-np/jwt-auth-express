import express from "express";
import logger from "morgan";
import bodyParser from "body-parser";

import UserRoutes from "./api/routes/UserRoutes";
import JsonPatchRoutes from "./api/routes/JsonPatchRoutes";
import ThumbnailRequestRoutes from "./api/routes/ThumbnailRequestRoutes";

const app = express();

app.use(logger("dev"));
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
