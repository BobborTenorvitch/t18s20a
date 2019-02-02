

$(document).ready(function(){
    console.log("Before Ajax call")
    $.ajax({
      url:"/api/events",
      method: "GET"
    }, function(err,results){
        if(err) throw err;
        console.log("The events are",results,isError);
    });

});
