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

    // observer: true,
    //切换效果
    effect: 'fade',
    fade: {
        crossFade: true,
    }


})

// $(function() {
//     var i = 0;
//     $('lunbo>.lun>li').hide().eq(i).show();
//     setInterval(function() {
//         $('.lunbo>.lun>li').fadeOut(1000).eq(i).fadeIn(1000);
//         i++;
//         if (i == 2) {
//             i = 0;
//         }
//     }, 2000);
// });
/*end 轮播图*/
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
