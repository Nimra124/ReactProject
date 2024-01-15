"use strict";

var dbm;
var type;
var seed;
const fs = require("fs").promises;
var path = require("path");
var Promise;


exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
  Promise = options.Promise;
};

exports.up = function (db) {
  const folderPath = './migrations/sqls';
  const desiredExtension = '.sql';

  return fs.readdir(folderPath)
    .then(files => {
      const filteredFiles = files.filter(file => path.extname(file) === desiredExtension);
      const upFiles = filteredFiles.filter(file => file.includes('-up.sql'));

      // Use Promise.all to run all migrations concurrently
      return Promise.all(upFiles.map(file => runMigration(file,db)));
    })
    .then(results => {
      console.log('Migration results:', results);
    })
    .catch(error => {
      console.error('Error running migrations:', error);
    });
};



function runMigration(file,db) {
  const filePath = path.join(__dirname, 'sqls', file);

  return fs.readFile(filePath, { encoding: 'utf-8' })
    .then(data => {
      console.log('Read data from file:', data);
      return db.runSql(data);
    })
    .then(result => {
      console.log(`Migration successful for ${file}`);
      return result;
    })
    .catch(error => {
      console.error(`Error running migration for ${file}:`, error);
      throw error; 
    });
}



exports.down = function (db) {
  var filePath = path.join(
    __dirname,
    "sqls",
    "20240110145710-Login-Table-down.sql"
  );
  return new Promise(function (resolve, reject) {
    fs.readFile(filePath, { encoding: "utf-8" }, function (err, data) {
      if (err) return reject(err);
      console.log("received data: " + data);

      resolve(data);
    });
  }).then(function (data) {
    return db.runSql(data);
  });
};

exports._meta = {
  version: 1,
};
