var express = require("express");
const { Send } = require("../controllers/usersControllers");
var router = express.Router();

/* GET home page. */
router.post("/confirm", Send);

module.exports = router;
