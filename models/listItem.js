// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

//select everything (all the things that are in the table, create add )
//use some of the following?????

var listItem = {
  all: function(cb) {
    orm.select("list", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("list", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("list", objColVals, condition, function(res) {
      cb(res);
    });
  },
  // delete: function(condition, cb) {
  //   orm.delete("list", condition, function(res) {
  //     cb(res);
  //   });
  // }
};

// Export the database functions for the controller (catsController.js).
module.exports = listItem;
