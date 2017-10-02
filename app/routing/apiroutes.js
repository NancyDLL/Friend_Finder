// ===============================================================================
// LOAD DATA - From Hot Restraurant Example
// Linking routes to the friend "data" source.
// ===============================================================================
var friends = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function(app) {
  // API GET Request
  // ---------------------------------------------------------------------------
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });


  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
  // will handle the incoming survey results and compatibility logic
  });
