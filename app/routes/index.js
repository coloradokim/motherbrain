var express = require("express");
var router = express.Router();

router.get("/", require("../controllers/index"));

module.exports = router;
