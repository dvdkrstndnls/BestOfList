// Import MySQL connection.
var connection = require("../config/connection.js");


// * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.


// * `selectAll()` DONE?
var orm = {
    select: function(whatToSelect, cb) {
        var queryString = "SELECT * FROM " + whatToSelect + ";";
        connection.query(queryString, function(err, result) {
          if (err) throw err;
          console.log(result);
          cb(result);
        });
       
      },
    // * `insertOne()` DONE?
    create: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO list (song) VALUES ('"+ vals + "');";
    
  
    
        console.log(queryString);
    
        connection.query(queryString, vals, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      },
    // * `updateOne()` DONE?
    update: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;
    
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
    
        console.log(queryString);
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      }
    };




//---------------------------//

// Export the orm object for the model (listitem.js).   DONE
module.exports = orm;
