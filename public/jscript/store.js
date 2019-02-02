$(document).ready(function(){
    console.log("Before Ajax call")
    $.get(
      "/api/store"
    , function(results,err){
        if(err != "success"){
            console.log("Error in fetching product data",err) ;
        } 
        else{
            console.log("The products are",results);
            for(let i=0;i<results.length;i++)
            {
                $("#catalogue").append(`
               
                ${results[i].description}
                ${results[i].category}
                ${results[i].item.Quantity}
                ${results[i].item.price}`
               
                );
            }
        }
        
    });

});
