const jwt = require("jsonwebtoken");

class AuthController {
  async protected(req, res) {
    jwt.verify(req.token, "my_secret_key", function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        res.json({ text: "this is pritected", data: data });
      }
    });
  }
  // authorization
  async login(req, res) {
    const user = { id: 3 };
    const token = jwt.sign({ user }, "my_secret_key");
    res.json({
      token: token,
    });
  }

  ensureToken(req, res, next) {
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== "undefined") {
      const bearer = bearerHeader.split(" ");
      const bearerToken = bearer[1];
      req.token = bearerToken;
      next();
    } else {
      res.sendStatus(403);
    }
  }
}

module.exports = new AuthController();
