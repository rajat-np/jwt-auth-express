import jsonpatch from "json-patch";
import jwt from "jsonwebtoken";

module.exports = {
  patchJson: function(req, res, next) {
    let { token, jsonData, patchObject } = req.body;
    jsonData = JSON.parse(jsonData);
    patchObject = JSON.parse(patchObject);
    jwt.verify(token, "this_is_very_long_secret", function(err, data) {
      if (err) {
        res.json({
          status: "fail",
          message: "Invalid token"
        });
      } else {
        let patchedJson = jsonpatch.apply(jsonData, patchObject);
        res.json({
          status: "success",
          message: "Patching done",
          patched: patchedJson
        });
      }
    });
  }
};