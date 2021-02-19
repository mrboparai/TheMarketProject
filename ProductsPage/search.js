$(document).ready(function(){
   //when the search box gets a letter it will check back with the PHP code to see if it matches the query
    $("#search-box").on({
        
        keyup: function(){
            //checks to see if the value isnt empty
            str = $("#search-box").val();
            if(str == 0)
            {
                $("#suggestions").text("");
                $("#theMenu").empty();
                return;
            }
            else{
                $.ajax({
                    url: "searchquery.php",
                    method: "GET",
                    data: {word: str},
                    success: function(response){
                            $("#suggestions").text(response);
                            var suggestions = response.split(", ");
                            $("#theMenu").empty();
                            
                            for(var i = 0; i < suggestions.length; i++)
                            {
                                var listitem = document.createElement("li");
                                listitem.className = "search-menu-item";
                                listitem.textContent = suggestions[i];
                               // $("#theMenu").append('<li class="search-menu-item">' + suggestions[i] + '</li>');
                               $("#theMenu").append(listitem);

                            }
                    }
                });
            }

        },
        // check to see if the user has left the search box
        blur: function(){
            $("#theMenu").empty();
        },
    });
    
    $(".search-menu-item").mouseenter(function(){
        alert($(".search-menu-item").text());
        });
        
    $(".search-menu-item").click(function(){
        $("#search-box").val($(".search-menu-item").text());
    });

  
});