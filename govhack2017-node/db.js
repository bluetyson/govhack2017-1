var express = require("express");
var dotenv = require('dotenv');   // use dotenv for aws credentials https://medium.com/@rafaelvidaurre/managing-environment-variables-in-node-js-2cb45a55195f
var mysql = require('mysql');

// load the environment variables (.env) -- this is excluded in .gitignore because
// the aws environment variables will be used in the actual Beanstalk environment
// dotenv takes care of .env; if it is not found it will ignore it
dotenv.load();

var pool      =    mysql.createPool({
    connectionLimit : 100, //important
    host     : process.env.RDS_HOSTNAME,
    user     : process.env.RDS_USERNAME,
    password : process.env.RDS_PASSWORD,
    port     : 3306,
    database : process.env.RDS_SCHEMA,
    debug    :  false,
    timezone : 'utc' 
});

exports.query = function(query, callback) {

    pool.getConnection(function(err,connection){
        if (err) {
          //res.json({"code" : 100, "status" : "Error in connection database"});
          callback(err,{"code" : 100, "status" : "Error in connection database"});
          return;
        }   

        // powerful mysql resources:  https://github.com/mysqljs/mysql

        connection.query(query,function(err,rows,fields){
            connection.release();
            //console.log("payload: " + payload);
            if(!err) {
                callback(err,rows);
                //res.json(rows);
            }else{
                callback(err, rows);
            }
        });

        /*
        connection.on('error', function(err) {      
              //res.json({"code" : 100, "status" : "Error in connection database"});
              return callback({"code" : 100, "status" : "Error in connection database"});
              ;
        });
        */
        
  });
}
