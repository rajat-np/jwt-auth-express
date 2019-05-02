import jsonpatch from "json-patch";
import jwt from "jsonwebtoken";

export default {
  patchJson: function(req, res, next) {
    let { token, jsonData, patchObject } = req.body;
    let { secret } = process.env;
    jsonData = JSON.parse(jsonData);
    patchObject = JSON.parse(patchObject);
    jwt.verify(token, secret, function(err, data) {
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
