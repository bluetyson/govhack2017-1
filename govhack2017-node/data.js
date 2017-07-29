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
    var sql = "SELECT * from vw_hospital_utilisation_predicted order by hospital;";
    db.query(sql, function(err, result, fields){
      if (err){ return res.json(err);}

      var j = -1;
      var data = [];
      
      var hospital = "";
      for (i=0; i<result.length; i++){
        
        if (hospital != result[i]["hospital"]){
          j++;
          hospital = result[i]["hospital"];
          data.push({hospital: hospital, predictions: []});
          data[j].predictions.push(result[i]);
        }
        else{
          data[j].predictions.push(result[i]);
        }
      }

      return res.json(data);
    });
});

module.exports = router;