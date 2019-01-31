var path = require("path");

module.exports = function(app){
    app.get("/band",function(req,res){
           console.log("/ band")
           res.sendFile(path.join(__dirname,"../public/html/Band.html"));
    });
    app.get("/about",function(req,res){
        console.log("about")
        res.sendFile(path.join(__dirname,"../public/html/About.html"));
    });
   app.get("/store",function(req,res){
       console.log("store")
    res.sendFile(path.join(__dirname,"../public//html/Store.html"));
    });
    app.get("/tour",function(req,res){
        console.log("tour")
        res.sendFile(path.join(__dirname,"../public/html/TourDates.html"));
    });
    app.get("/forum",function(req,res){
        console.log("forum")
        res.sendFile(path.join(__dirname,"../public/html/Forum.html"));
    }); 
    app.get("/",function(req,res){
        console.log("/ route");
        res.sendFile(path.join(__dirname,"../public/html/index.html"));
    });
    app.get("/TSA",function(req,res){
        res.sendFile(path.join(__dirname,"../public/html/TSA.html"));
    });
    app.get("/*",function(req,res){
        console.log("/ route");
        res.sendFile(path.join(__dirname,"../public/html/index.html"));
    });

}