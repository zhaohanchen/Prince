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
/*购物车*/
new Vue({
    el: "#buy",
    data() {
        return {
            shoplist: [
                { img: "dist/images/149622585361.jpg", name: "nubia Z17", price: 1999, num: 1 },
                { img: "dist/images/149622558861.jpg", name: "快充移动电源", price: 149, num: 1 }
            ]
        };
    },
    methods: {
        jian(index) {
            console.log(1);
            this.shoplist[index].num--;
            if (this.shoplist[index].num <= 1) {
                this.shoplist[index].num = 1;
            }
        },
        jia(index) {
            this.shoplist[index].num++;
        },
        dele(index) {
            this.shoplist.splice(index, 1);
        }
    },
    computed: {
        total() {
            var total = { price: 0, sum: 0 };
            this.shoplist.forEach(function(value, key) {
                total.price += value.price * value.num;
                total.sum += value.num;
            })
            return total;
        }
    }

})
