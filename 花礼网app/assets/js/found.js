$(function() {
    //大选项卡start
    $('.cardhead li').click(function() {
            $(this).siblings().css({
                'color': '#555',
                'border-bottom': 'none'
            })
            $(this).css({
                'color': '#ff6600',
                'border-bottom': '0.05556rem solid #ff6600'
            })
            var i = $(this).index();
            $('.card').eq(i).siblings().css({
                'display': 'none'
            })
            $('.card').eq(i).css({
                'display': 'block'
            })
        })
        //大选项卡end

    //小选项卡start
    $('.aboutflower div').click(function() {
        $(this).css({
            'backgroundColor': '#c1a485'
        })
        $(this).siblings().css({
            'backgroundColor': '#efefef'
        })
        $(this).children('span').css({
            'borderColor': 'transparent transparent #fff transparent;'
        }).parent().siblings().children('span').css({
            'borderColor': 'transparent transparent #efefef transparent'
        })
        $(this).children('h3').css({
            'color': '#fff'
        }).parent().siblings().children('h3').css({
            'color': '#777'
        })
        var i = $(this).index();
        $('.floweryu').eq(i).siblings().css({
            'display': 'none'
        })
        $('.floweryu').eq(i).css({
            'display': 'block'
        })
    })

    //小选项卡end
})
