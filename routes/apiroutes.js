var db = require("../models");

module.export = function(app){
    // defines a route to retrieve data from the events table
    app.get("/events",function(req,res){ 
         db.Event.findALL({})
         .then(function(results){
             res.json(results);
         })
         .catch(function(err){
             console.log("Error in getting event records",err)
         })
    });
    // route for discussion board
    app.get("/board",function(req,res){ 
        db.Board.findALL({})
        .then(function(results){
            res.json(results);
        })
        .catch(function(err){
            console.log("Error in getting discussion board records",err)
        })
   });
   app.get("/store",function(req,res){ 
    db.Store.findALL({})
    .then(function(results){
        res.json(results);
    })
    .catch(function(err){
        console.log("Error in getting discussion board records",err)
    });
    
});






}