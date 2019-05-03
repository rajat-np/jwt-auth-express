import jwt from "jsonwebtoken";

export default {
  authenticate: function(req, res, next) {
    let { email, password } = req.body;
    let { SECRET } = process.env;
    if (email && password) {
      const token = jwt.sign(
        {
          email,
          password
        },
        SECRET,
        {
          expiresIn: 60 * 60
        }
      );
      res.json({
        status: "success",
        token,
        expiresIn: "60 minutes",
        message: "Token generated"
      });
    } else {
      res.status(400);
      res.json({
        status: "fail",
        message: "Email/password is missing"
      });
    }
  }
};
