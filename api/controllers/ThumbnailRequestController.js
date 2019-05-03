import sharp from "sharp";
import jwt from "jsonwebtoken";

import GetImagebase64 from "../utils/GetImageBase64";
import settings from "../../settings";

export default {
  thumbnailResize: function(req, res, next) {
    let { url, token } = req.body;
    let { SECRET } = process.env;
    jwt.verify(token, SECRET, function(err, data) {
      if (err) {
        res.json({
          status: "fail",
          message: "Invalid token"
        });
      } else {
        GetImagebase64(url).then(image => {
          sharp(new Buffer(image, "base64"))
            .resize(50)
            .toFile(settings.imageSavePath)
            .then(() => {
              res.sendFile(settings.imageSavePath);
            })
            .catch(err => {
              console.log(err);
              res.json({
                status: "fail",
                message: "Failed to generate thumbnail"
              });
            });
        });
      }
    });
  }
};
