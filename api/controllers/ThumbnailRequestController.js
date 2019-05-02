import sharp from "sharp";

import GetImagebase64 from "../utils/GetImageBase64";

export default {
  thumbnailResize: function(req, res, next) {
    let { url } = req.body;
    GetImagebase64(url).then(image => {
      sharp(new Buffer(image, "base64"))
        .resize(50)
        .toFile(__dirname + "/output.png")
        .then(() => {
          res.sendFile(__dirname + "/output.png");
        })
        .catch(() =>
          res.json({
            status: "fail",
            message: "Failed to generate thumbnail"
          })
        );
    });
  }
};
