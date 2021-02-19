$(document).ready(function(){
    //what this does it disables many of the dropdown menu items when they clicked according to size and color 
    $("#sweater-sizes").change(function(){
        //intentionally disables all the color attributes and rmeoves disable from all sizes
        $("#sweater-colors").children().attr('disabled','disabled');
        $("#sweater-sizes").children().removeAttr('disabled');
        
        var clothessize = $("#sweater-sizes").val();
        clothessize = clothessize.toUpperCase();
        var c = $("#sweater-colors").children();
        var colors = [];
    
        $.ajax({
            url: 'sizes.json',
            method: 'GET',
            success: function(response){
                var myObj = response;
                // this searches for the colors of the size and finds it and disables all the enables that can be used
                for(var i = 0; i < myObj.sizes.length; i++)
                {
                   
                    if(myObj.sizes[i].size == clothessize)
                    {
                       
                        colors = (myObj.sizes[i].colors);
                        break;
                    }
                }
    
                for(var j = 0; j < colors.length; j++)
                {
                    for(var x = 0; x < c.length; x++)
                    {
                        if(c.eq(x).text() == colors[j])
                        {
                            //this line checks for each child at the index x and removes there disbaled property
                            c.eq(x).removeAttr('disabled'); 
                        }
                    }
                }
            }
        });
    });
    //this function is the same thing but for the colors 
    $("#sweater-colors").change(function(){
        $("#sweater-sizes").children().attr('disabled','disabled');
        $("#sweater-colors").children().removeAttr('disabled');
        var colorName = $("#sweater-colors").val();

        var c = $("#sweater-sizes").children();
        var sizes = []

        $.ajax({
            url: 'sizes.json',
            method: 'GET',
            success: function(response){
                var myObj = response;

                for(var i = 0; i < myObj.colors.length; i++)
                {
                    if(myObj.colors[i].color == colorName)
                    {
                        sizes = (myObj.colors[i].sizes);
                        break;
                    }
                }

                for(var j = 0; j < sizes.length; j++)
                {
                    for(var x = 0; x < c.length; x++)
                    {
                        if(c.eq(x).text() == sizes[j])
                        {
                            c.eq(x).removeAttr('disabled');
                        }
                    }
                }
            }
        })
    });
    
});