// let db = require('arangojs')();
let Database = require('../node_modules/arangojs/lib').Database;

module.exports = function() {

    
    let db = new Database('http://127.0.0.1:8529');

    db.useBasicAuth('root', 'admin');
    
    // check if the DB is already present, if not then create
    // db.createDatabase('career-path').then(
    //     () => console.log('Database created'),
    //     err => console.error('Failed to create database:', err)
        
    // );
    // same thing with all the tables as well
    db.useDatabase('career-path');

    return db;
    
};