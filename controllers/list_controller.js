//3. Inside the `list_controller.js` file, import the following:

  // * Express
   // * `burger.js`

    //import express
   var express = require("express");
 
   //create router for app
   var router = express.Router();


   // Import the model (_what goes inplace of cat(s)_.js) to use its database functions.
   var listItem = require("../models/listItem.js");
   
   // Create all our routes and set up logic within those routes where required.
   router.get("/", function(req, res) {
    listItem.all(function(data) {
       var hbsObject = {
         list: data
       };
       console.log(hbsObject);
       res.render("index", hbsObject);
     });
   });
   
   router.post("/api/list", function(req, res) {
    listItem.create([
       "song", "removed"
     ], [
       req.body.song, req.body.removed
     ], function(result) {
       // Send back the ID of the new quote
       res.json({ id: result.insertId });
     });
   });
   
   router.put("/api/list/:id", function(req, res) {
     var condition = "id = " + req.params.id;
   
     console.log("condition", condition);
   
     listItem.update({
       remove: req.body.remove
     }, condition, function(result) {
       if (result.changedRows == 0) {
         // If no rows were changed, then the ID must not exist, so 404
         return res.status(404).end();
       } else {
         res.status(200).end();
       }
     });
   });
   
   router.delete("/api/list/:id", function(req, res) {
     var condition = "id = " + req.params.id;
   
     listItem.delete(condition, function(result) {
       if (result.affectedRows == 0) {
         // If no rows were changed, then the ID must not exist, so 404
         return res.status(404).end();
       } else {
         res.status(200).end();
       }
     });
   });
   

// 4. Create the `router` for the app, and export the `router` at the end of your file.
   // Export routes for server.js to use.
   module.exports = router;
   


