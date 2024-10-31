var express = require('express');
var router = express.Router();

const PariwisataController = require("../controller/steven")

router.post('/', PariwisataController.createPariwisata);

module.exports = router;