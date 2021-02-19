$(document).ready(function(){
    $("#login-Button").click(function()
    {
        //this hides the error messages
        $("#error-user").hide();
        $("#error-pass").hide();
        //this grabs the values from the text fields
        var username = $("#username").val(); 
        var password = $("#password").val(); 
        var passwordCheck = /^[A-Z][^.]*/;

        //checks to see if the variables are empty
        if( username == "")
        {
            $("#error-user").show();
        }
        if(password == "")
        {
            $("#error-pass").show();
        }
        else{
            if(!password.match(passwordCheck))
            {
                $("#error-pass").show();
            }
        }

        // var xhr;
        // if(window.XMLHttpRequest)
        // {
        //     xhr = new XMLHttpRequest();
        // }
        // else{
        //     xhr = new ActiveXObject("Microsoft.XMLHTTP");
        // }

        // xhr.onreadystatechange = function(){
        //     if(this.readyState == 4 && this.status == 200)
        //     {
        //         var txt = this.response;
        //         txt = txt.split(",");
        //         if(txt[0] == "0")
        //         {
        //             $("#error-user").show();
        //         }
        //         if(txt[1] == "0")
        //         {
        //             $("#error-pass").show();
        //         }
        //     }
        // } 
        // xhr.open("POST", "http://localhost/dashboard/finalProject/confirmLogin.php?username=" + username + "?password=" + password, true);
        // xhr.send();

        //this does an ajax call to the php and gets back the results either 0, or 1
        $.ajax({
            url:"confirmLogin.php",
            method: "post",
            data: {username: username, password: password},
            success: function(response){
                var values = response.split(",");
                var userCorrect = false;
                var passcorrect = false;
                if(values[0] == 0)
                {
                    $("#error-user").show();
                    moveOn = false;
                }
                else {
                    userCorrect = true;
                }
                if(values[1]== 0)
                {
                    $("#error-pass").show();
                    moveOn = false;
                }
                else {
                    passcorrect = true;
                }
                
                if(userCorrect && passcorrect)
                {
                    window.location.href="../ProductsPage/product.html";
                }
            } 
        });

    });
  


});