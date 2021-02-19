$("document").ready(function(){
    //when the text box is in focus it will increase
    $("#search-box").focus(function(){

        $(this).animate({
            width: $(this).width()*2.5
        });
    });
    //when the search box is blurred without any text in it, will shrink back
    $("#search-box").blur(function(){
        var value = $(this).val();
        if(value == "")
        {
            $(this).animate({
                width: $(this).width()/2.5
            });
        }
    });

    
});