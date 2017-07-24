/*start轮播图*/
new Swiper('.swiper-container', {
    // direction: 'vertical',
    loop: true,

    // 如果需要分页器
    pagination: '.swiper-pagination',

    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',


    autoplayDisableOnInteraction: false,
    autoplay: 5000,
    // 点击分页按钮进行轮播
    paginationClickable: true,

    // 分页样式
    paginationElement: 'li',

    observer: true,
    // 自定义小圆点
    paginationType: 'custom',

})
var i = 0;

function dianPlay() {
    setInterval(function() {
        i++;
        if (i == 3) {
            i = 0;
        }
        $('.b-dian li').removeClass().eq(i).addClass('showme');
    }, 5200)
}
dianPlay();
/*end 轮播图*/
$(function() {
    // $('.list li').hover(function() {
    //     var i = $(this).index();
    //     console.log(i)
    //     $(this).children().eq(1).slideDown();
    // }, function() {
    //     $(this).children().eq(1).slideUp();
    // })

    $('.list li').mouseenter(function() {

        $(this).children().stop().eq(1).slideDown();
    })
    $('.list li').mouseleave(function() {
            $(this).children().stop().eq(1).slideUp();
        })
        // $('.leftjian').click(function() {
        //     $('.p-list').css({
        //         left: '0px'
        //     })
        // })
        // $('.rightjian').click(function() {
        //     $('.p-list').css({
        //         left: '2340px'
        //     })
        // })
})
