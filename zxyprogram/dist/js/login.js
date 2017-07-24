/*start 表单验证*/
$(function() {
        $("#login").Validform({
            // 信息展示的地方
            // tiptype: 2, // 2:在input的父级的下一个标签内展示提示信息
            tiptype: 3, // 3:在input的身后的元素展示提示信息
            // 展示所有的错误信息
            showAllError: true,
            // 自定义检验规则
            datatype: {
                "zh2-4": /^[\u4E00-\u9FA5\uf900-\ufa2d]{2,4}$/,
            }
        });
    })
    /*end 表单验证*/
