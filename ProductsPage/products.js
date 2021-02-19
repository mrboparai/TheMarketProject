$(document).ready(function(){
        //when each of these are clicked the others z-index will be set less to the one that is clicked bring that image to the front of the stack
        $("#trex-black").click(function(){
            $("#trex-black").css("z-index","10");
            $("#trex-red").css("z-index","2");
            $("#trex-green").css("z-index","3");
        });
       
        $("#trex-red").click(function(){
            $("#trex-black").css("z-index","1");
            $("#trex-red").css("z-index","10");
            $("#trex-green").css("z-index","3");
        });
            
        $("#trex-green").click(function() {
            $("#trex-black").css("z-index","1");
            $("#trex-red").css("z-index","2");
            $("#trex-green").css("z-index","10");
        });
           
});
