//分类页选项卡
$(function() {
    $('.cards-left li').click(function() {
        $(this).siblings().css({
            'background': '#f3f3f6',
            'border-right': '0.03704rem solid #ccc'
        })
        $(this).css({
            'background': '#fff',
            'border-right': 'none'
        })
        var i = $(this).index();
        $('.card').eq(i).siblings().css({
            'display': 'none'
        })
        $('.card').eq(i).css({
            'display': 'block'
        })

    })
})
