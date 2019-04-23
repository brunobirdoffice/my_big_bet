var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.send('My Big Bet Api v1.0');
});

module.exports = router;
