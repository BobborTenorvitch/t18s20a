$(document).ready(function(){

    $.ajax({
      url:"/api/events",
      method: "GET"}, function(err,results){
        if(err) throw err;
        console.log("The events are",results);
    });

});
