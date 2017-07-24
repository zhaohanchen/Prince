$(function() {
    $('.zhuce li').click(function() {
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
        $('.card').eq(i).siblings().css({
            'display': 'none'
        })
        $('.card').eq(i).css({
            'display': 'block'
        })
    })


    var change = document.querySelector('.change');
    var bian = document.querySelector('.bian>img');
    change.onclick = function() {
        bian.src = 'assets/images/' + rand(1, 5) + '.png';
    }

    function rand(m, n) {
        return Math.floor(Math.random() * (n - m + 1) + m);
    }
})
