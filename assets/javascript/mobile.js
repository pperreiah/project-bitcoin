$(document).ready(function () {

    if ( $(window).width() > 739) {      
        //Add your javascript for large screens here 
      } 
      else {
        //Add your javascript for small screens here 
        for (var i = 1; i < 5; i++) {
            if ($('#elements').eq(i).attr('data-name') !== name) {
                $('#elements').children().eq(i).css('display', 'none');
            }
        }
        $(document).on("click", ".navButton", function () {
            var id = $(this).attr('id');
            var name = $(this).attr('data-name');
            console.log("clicked: " + name);
            var state = $(this).attr('data-state');
    
            for (var i = 0; i < 5; i++) {
                if ($('#elements').eq(i).attr('data-name') !== name) {
                    $('#elements').children().eq(i).css('display', 'none');
                }
            }
    
            $("#" + name).css("display", 'block');
    
        });
      }

});
