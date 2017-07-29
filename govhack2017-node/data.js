var express = require('express');
var mysql = require('mysql');
var db = require('./db');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res, next) {
    var sql = "SELECT * from vw_hospital_utilisation_stats;";
    db.query(sql, function(err, result, fields){
      console.log("query returned");
      if (err){ return res.json(err);}

      //console.log("result: " + result);
      return res.json(result);
      //return result[0]['response'];
    });
    //res.send("hello data");
});

/* GET home page. */
router.get('/hospital_utilisation_aggregates', function (req, res, next) {
    var sql = "SELECT * from vw_hospital_utilisation_aggregates;";
    db.query(sql, function(err, result, fields){
      console.log("query returned");
      if (err){ return res.json(err);}

      //console.log("result: " + result);
      return res.json(result);
      //return result[0]['response'];
    });
    //res.send("hello data");
});

/* GET home page. */
router.get('/hospital_utilisation_predicted', function (req, res, next) {
    var sql = "SELECT * from hospital_utilisation_predicted;";
    db.query(sql, function(err, result, fields){
      console.log("query returned");
      if (err){ return res.json(err);}

      //console.log("result: " + result);
      return res.json(result);
      //return result[0]['response'];
    });
    //res.send("hello data");
});

module.exports = router;