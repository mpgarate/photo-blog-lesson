$( document ).ready(function() {
    $('.gallery li').click(function(){
        $(this).fadeOut("slow", function() {
                $(this).removeClass('current');
                $(this).next().addClass('current');
                $(this).next().fadeIn("slow");
            }
        );
    });
});