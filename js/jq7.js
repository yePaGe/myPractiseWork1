;(function ($) {
    $.fn.extend({
        "colorPoint":function (li_col) {
            var def_col = "#000";  //默认有焦点的颜色
            var los_col = "#fff";    // 默认无焦点的颜色
            li_col = (li_col == undefined) ? def_col : li_col;
            //若颜色设置为空，则为默认有焦点颜色，否则为设置颜色
            $("li").each(function () {   // 跟$(this).find("li")没差啊？
            $(this).mouseover(
                function () {
                    //alert("over");
                    $(this).css("background-color",li_col);
                }
            ).mouseout(
                function () {
                   // alert("out");
                    $(this).css("background-color","#fff");
                }
                );
            });
            //return $(this);  为什么要return？ 返回jquery对象，保持链式操作？怎么理解啊？

        }
    });
})(jQuery);

