/*start 下拉菜单*/

$(function() {

        $('.list li').mouseenter(function() {

            $(this).children().stop().eq(1).slideDown();
        })
        $('.list li').mouseleave(function() {
            $(this).children().stop().eq(1).slideUp();
        })


    })
    /*end 下拉菜单*/
