/**
 * Created by Administrator on 2017/4/14.
 */
$(function () {
  //  alert( $(".navbar-nav>li").length);
   $(".navbar-nav>li").mouseover(function () {
       $(this).addClass("active");
   });
    $(".navbar-nav>li").mouseout(function () {
        $(this).removeClass("active");
    });
    $("#menuList a").click(function () {
        var href = $(this).attr("href");
        $("#showList a[href='"+href+"'] ").tab("show");
    });
    $("#sth a").click(function () {
        var href = $(this).attr("href");
        $("#showList a[href='"+href+"'] ").tab("show");
    })


});