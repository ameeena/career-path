// let db = require('arangojs')();
const { database } = require("../config");
const { collectionNames } = require("../constants/careerCollections");

let Database = require("../node_modules/arangojs/lib").Database;

module.exports = function() {
  let db = new Database(database.url);
  let careerDatabase = database.name;

  db.useBasicAuth(database.username, database.password);

  db.listDatabases()
    .then(dbName => {
      if (dbName.indexOf(careerDatabase) > -1) {
        db.useDatabase(careerDatabase);
      } else {
        db.createDatabase(careerDatabase).then(
          () => console.log("Database created"),
          err => console.error("Failed to create database:", err)
        );
      }
    })
    .then(() => {
      db.get().then(
        () => console.log("Using database " + careerDatabase),
        error => console.error("Error connecting to database: " + error)
      );
      // Create all the collections required!
      createAllCollections(db);
    });

  return db;
};

//Check and create all database collections
createAllCollections = db => {
  const careerCollection = db.collection(collectionNames.CAREER_COLLECTION);
  careerCollection.get().then(
    response => {
      if (response.code == 200) {
        console.log("Career colection already exists");
      }
    },
    error => {
      if (error.code == 404) {
        careerCollection
          .create()
          .then(() => console.log("Career Collection Created!!")),
          err => console.log(err);
      }
    }
  );
};
