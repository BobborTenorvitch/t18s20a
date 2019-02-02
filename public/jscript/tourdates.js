

$(document).ready(function(){
    console.log("Before Ajax call")
    $.get(
      "/api/events"
    , function(results,err){
        if(err != "success"){
            console.log("Error in fetching data",err) ;
        } 
        else{
            console.log("The events are",results);
        }
        
    });

});
