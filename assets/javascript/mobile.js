$(document).ready(function () {

    // if ( $(window).width() > 768) {      
    //     //Add your javascript for large screens here 
    //   } else 
    if(document.documentElement.clientWidth < 768){
        //Add your javascript for small screens here 
        console.log('js for mobile!!!!!!!!!!!!!!!!!!!!!!!!');
        for (var i = 1; i < 5; i++) {
            if ($('#elements').eq(i).attr('data-name') !== name) {
                $('#elements').children().eq(i).css('display', 'none');
            }
        }
        $(document).on("click", ".navButton", function () {
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
