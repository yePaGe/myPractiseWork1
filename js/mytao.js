$(function () {
    //获取相同字符的个数；
    function getString(str,n) {
        var tmp = 0;
        for(var i=0;i<str.length;i++){
            if (str.substring(i,i+1)==n){
                tmp++;
            }
        }return tmp;
    }
    //帐号框和密码框的样式效果；
    //输入框聚焦时的效果；
    $(".accounterInput").click(function () {
        $(".acc").hide();
        $(this).next().show();
        $(this).parents(".accounter").css("border-color","rgba(240,68,0,1)");
        event.stopPropagation();
    });
    $(".accounterInput:eq(0)").click(function () {
        $(".acc1").attr("src","picture/account1.png")
    });
    $(".accounterInput:eq(1)").click(function () {
        $(".pass1").attr("src","picture/lock1.png")
    });

    $(".acc").click(function () {
        $(this).prev().val("");
        $(this).hide();
        event.stopPropagation();
    });
    //聚焦body时，文字删除键隐藏；
    $("body").click(function () {
        $(".acc").hide();
    });
    //帐号框失去焦点时的效果；
    $(".accounterInput:eq(0)").blur(function () {
        var retN = /([^\w\d_])+/g;
        if(retN.test(this.value)){
            $(".alertWin").css("display","-webkit-flex");
            $(".alertMess").html("请输入正确的帐号！");
        }else if(this.value.length>10){
            $(".alertWin").css("display","-webkit-flex");
            $(".alertMess").html("帐号的字符数不能超过10个！");
        }
        $(this).prev().attr("src","picture/account.png");
        $(this).parents(".accounter").css("border-color","rgba(240,240,240,1)");
            });


    //密码框失去焦点时动态效果；
    $(".accounterInput:eq(1)").blur(function () {
       var m = getString(this.value,this.value[0]);
        $(this).prev().attr("src","picture/lock.png");
        $(this).parents(".accounter").css("border-color","rgba(240,240,240,1)");
      if(m == this.value.length){
           $(".alertWin").css("display","-webkit-flex");
           $(".alertMess").html("密码不应该为相同的字符！！！");
       }
    });

    //输入框验证错误时弹出提示框；点击表示收起提示框；
    $(".alertBtn").click(function () {
        $(".alertWin").css("display","none");
        $(".accounterInput").val("");

    });
   //登录按钮动态效果；点击验证帐号密码并跳转到主页；
    $(".loginBtnInput").click(function () {
        var $docWidth = $(document).width();
        $(".loginWin").animate({
            left:$docWidth+"px"
        },1000);
    });

    //右上角交叉按钮；点击判断离开当前页面还是留下
    $(".choose").click(function () {
        $(".comfWin").css("display","-webkit-flex");
        $(".comfBtn>input").click(function () {
            var b = $(this).val();
            if(b=="离开"){
                $(".comfWin").hide();
                $(".loginWin").hide();
                $(".comfBtn>input").attr("href","https://yepage.github.io/myPractiseWork1/taohome.html")
            }
            if(b=="返回"){
                $(".comfWin").hide();
            }
        })
    });






});