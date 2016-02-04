// YOUR CODE GOES HERE
var clientID = "36aa5c6b3029e11d9b4daeea8da6276e";

$(document).ready(function() {
    // your code here
    $("#search-btn").click(function() {
        var userSelection = $("#search-query").val();
        searchFlickr(clientID, userSelection, 10, function(photos) {
            for (i = 0; i < 10; i++) {
                $("#search-results").append("<img src=" + photos.photo[i].url_m + ">");
            }
            console.log(photos.photo[i]);
            $("#reset-btn").click(function(){
                $("#search-results").empty()
            })
        })
    });

});