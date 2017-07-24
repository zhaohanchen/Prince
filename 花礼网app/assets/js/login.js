$(function() {
    $('.denglu li').click(function() {
        $(this).siblings().css({
            'border-bottom': 'none',
        })
        $(this).css({
            'border-bottom': '0.05556rem solid #ff6427',
        })
        $(this).children('.iconfont').css({
            'color': '#ff6427'
        }).parent().siblings().children('.iconfont').css({
            'color': '#adadad'
        })
        $(this).children('h3').css({
            'color': '#ff6427'
        }).parent().siblings().children('h3').css({
            'color': '#adadad'
        })
        var i = $(this).index();
        $('.cards').eq(i).siblings().css({
            'display': 'none'
        })
        $('.cards').eq(i).css({
            'display': 'block'
        })
    })
})
