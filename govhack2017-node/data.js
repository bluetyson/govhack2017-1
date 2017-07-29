var express = require('express');
var mysql = require('mysql');
var db = require('./db');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    res.send("hello data");
});

module.exports = router;