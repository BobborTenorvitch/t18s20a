var db = require("../models");

module.exports = function (app) {
    // defines a route to retrieve data from the events table
    app.get("/api/events", function (req, res) {
        console.log("the api route");
        db.Event.find({})
            .then(function (results) {
                console.log("The api events results", results);
                res.json(results);
            })
            .catch(function (err) {
                console.log("Error in getting event records", err);
                res.json(err);
            });
    });

    // route for discussion board
    app.get("/api/board", function (req, res) {
        db.Board.find({})
            .then(function (results) {
                res.json(results);
            })
            .catch(function (err) {
                console.log("Error in getting discussion board records", err)
            })
    });


    app.get("/api/store", function (req, res) {
        db.Store.find({})
            .then(function (results) {
                res.json(results);
            })
            .catch(function (err) {
                console.log("Error in getting discussion board records", err)
            });

    });






}