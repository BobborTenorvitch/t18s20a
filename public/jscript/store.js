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
                <div class='card storecard'>
                <h4 "card-title">${results[i].productId}</h4>
                <h5 class="card-title">${results[i].description}</h5>
                CATEGORY: <h6 class "card-subtitle">${results[i].category}</h6>
                Quantity: <p class = "card-text">${results[i].item.Quantity}</p>
                Price: <p class = "card-text">${results[i].item.price}</p>
                </div>`);
            }
        }
        
    });

});
