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
    });
    $("#login").click(function () {
        $(".loginForm").show();
    });
    $("#close").click(function () {
        $(".loginForm").hide();

    })
});
angular.module('myApp', [])
//创建一个控制器controller
    .controller('loginController',function($scope)
    {
        $scope.userData={};
        $scope.loginForm=function()
        {
            $(".loginForm").hide();
            $("#login").html("欢迎您！")

        };

    })

    .directive('compare',function () {
        var o ={};
        o.strict='AE';
        o.scope={
            orgText:'=compare'
        };
        o.require='ngModel';
        o.link=function(sco,ele,att,con){
            con.$validators.compare=function(v){
                return v == sco.orgText;
            };
            sco.$watch('orgText',function () {
                con.$validate();
            })
        };
        return o;
    });