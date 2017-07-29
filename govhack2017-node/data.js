var express = require('express');
var mysql = require('mysql');
var db = require('./db');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res, next) {
  var sql = "SELECT * from vw_hospital_utilisation_stats;";
  db.query(sql, function (err, result, fields) {
    console.log("query returned");
    if (err) { return res.json(err); }

    //console.log("result: " + result);
    return res.json(result);
    //return result[0]['response'];
  });
  //res.send("hello data");
});

/* GET home page. */
router.get('/hospital_utilisation_aggregates', function (req, res, next) {
  var sql = "SELECT * from vw_hospital_utilisation_aggregates;";
  db.query(sql, function (err, result, fields) {
    console.log("query returned");
    if (err) { return res.json(err); }

    //console.log("result: " + result);
    return res.json(result);
    //return result[0]['response'];
  });
  //res.send("hello data");
});

/* GET home page. */
router.get('/hospital_utilisation_predicted', function (req, res, next) {
  var sql = "SELECT * from vw_hospital_utilisation_predicted order by hospital;";
  db.query(sql, function (err, result, fields) {
    if (err) { return res.json(err); }

    var j = -1;
    var data = [];

    var hospital = "";
    for (i = 0; i < result.length; i++) {

      if (hospital != result[i]["hospital"]) {
        j++;
        hospital = result[i].avg_attendances;
        var avg_attendances = result[i].avg_attendances;
        var sd_attendances = result[i].sd_attendances;
        var avg_admissions = result[i].avg_admissions;
        var sd_admissions = result[i].sd_admissions;
        var avg_triage_1 = result[i].avg_triage_1;
        var sd_triage_1 = result[i].sd_triage_1;
        var avg_triage_2 = result[i].avg_triage_2;
        var sd_triage_2 = result[i].sd_triage_2;
        var avg_triage_3 = result[i].avg_triage_3;
        var sd_triage_3 = result[i].sd_triage_3;
        var avg_triage_4 = result[i].avg_triage_4;
        var sd_triage_4 = result[i].sd_triage_4;
        var avg_triage_5 = result[i].avg_triage_5;
        var sd_triage_5 = result[i].sd_triage_5;

        data.push({
          hospital: hospital,
          stats: {
            avg_attendances: avg_attendances,
            sd_attendances: sd_attendances,
            avg_admissions: avg_admissions,
            sd_admissions: sd_admissions,
            avg_triage_1: avg_triage_1,
            sd_triage_1: sd_triage_1,
            avg_triage_2: avg_triage_2,
            sd_triage_2: sd_triage_2,
            avg_triage_3: avg_triage_3,
            sd_triage_3: sd_triage_3,
            avg_triage_4: avg_triage_4,
            sd_triage_4: sd_triage_4,
            avg_triage_5: avg_triage_5,
            sd_triage_5: sd_triage_5
          },
          predictions: []
        });
      }
      data[j].predictions.push({
        probability_above: result[i].probability_above,
        score_above: result[i].score_above,
        probability_below: result[i].probability_below,
        score_below: result[i].score_below,
      }
      );
    }

    return res.json(data);
  });
});

module.exports = router;