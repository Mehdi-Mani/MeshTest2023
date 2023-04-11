var express = require("express");
var router = express.Router();
var hitrootCounter = require("../metrics/hitrootPath");
/* GET home page. */
router.get("/test/*", function (req, res, next) {
  res.json({
    host: req.hostname,
    ip: req.ip,
    path: req.path,
    user: JSON.parse(req.get("user")),
  });
  hitrootCounter.inc();
});
router.get("/user", function (req, res, next) {
  res.json({
    name: "alice",
    lastname: "lb",
  });
});
router.get("/health", (req, res) => {
  res.status(200).send("Ok");
});
router.get("/auth", (req, res) => {
  const authVal = req.get("auth");
  if (authVal == "123") {
    let user = { name: "alex" };
    res.set("user", JSON.stringify(user));
    res.status(200).send("Ok");
  } else {
    res.status(401).send("Bad request");
  }
});

module.exports = router;
