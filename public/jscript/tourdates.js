

$(document).ready(function(){
    console.log("Before Ajax call")
    $.get(
      "/api/events"
    , function(results,err){
        if(err != "success"){
            console.log("Error in fetching event data",err) ;
        } 
        else{
            console.log("The events are",results);
            for(let i=0;i<results.length;i++)
            {
                $("#tourdates").append(`
                <tr>
                <td>${results[i].date}</td>
                <td>${results[i].location}</td>
                <td>${results[i].tickets.price}</td>
                <td>${results[i].tickets.reserved}</td>
                <td>${results[i].tickets.total}</td>
                </tr>`);
            }
        }
        
    });

});
