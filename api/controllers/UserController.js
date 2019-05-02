import jwt from "jsonwebtoken";

export default {
  authenticate: function(req, res, next) {
    let { email, password } = req.body;
    const token = jwt.sign(
      {
        email,
        password
      },
      "this_is_very_long_secret",
      {
        expiresIn: 60 * 60
      }
    );
    res.json({
      status: "success",
      token,
      expiresIn: "60 minutes"
    });
  }
};
