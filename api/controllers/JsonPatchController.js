import jsonpatch from "json-patch";
import jwt from "jsonwebtoken";

export default {
  patchJson: function(req, res) {
    let { token, jsonData, patchObject } = req.body;
    let { SECRET } = process.env;

    try {
      jsonData = JSON.parse(jsonData);
      patchObject = JSON.parse(patchObject);
      jwt.verify(token, SECRET, function(err, data) {
        if (err) {
          res.status(401);
          res.json({
            status: "fail",
            message: "Invalid token"
          });
        } else {
          try {
            let patchedJson = jsonpatch.apply(jsonData, patchObject);
            res.json({
              status: "success",
              message: "Patching done",
              patched: patchedJson
            });
          } catch (err) {
            res.status(400);
            res.json({
              status: "fail",
              message: "Patching failed, please validate patch object"
            });
          }
        }
      });
    } catch (err) {
      res.status(400);
      res.json({
        status: "fail",
        message: "Unable to parse json data or patch object"
      });
    }
  }
};
