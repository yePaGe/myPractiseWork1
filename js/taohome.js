$(function () {
    var duration=5000;
    var playTime=1000;
    rotate(duration,playTime);
  var _duration=3000;
   var showTime=1000;
   scroll(_duration,showTime);

   $(".surf input").bind("keyup",function () {
       $(".surfForm").show();
   });
   $(".surf input").blur(function () {
       $(".surfForm").hide();

   });
   $("a").click(function () {

       $(this).css("text-decoration","none")
   });
    $(".searchText0").click(function () {
        $(this).attr("placeholder"," ");
        $(".searchForm").show();
    });
    $(".searchText0").blur(function () {
        $(".searchForm").hide();
    });

    $(".bb").click(function () {
        $(".bbType").show();
        $(".t").click(function () {
            var n = $(this).text();
            $(".bb").val(n);
            if(n=="宝贝"){
                $(".searchText0").attr("placeholder","请输入想找的宝贝");
            }else if(n=="店铺"){
                $(".searchText0").attr("placeholder","在找我这家吗？");
            }else if(n=="天猫"){
                $(".searchText0").attr("placeholder","想找什么天猫宝贝啊？");
            }
            $(".bbType").hide();
        });
        });

    $(".searchText").click(function () {
        $("#searchWin").animate({
            left:"0"
        },1000).show();
    });
    $(".back").click(function () {
        $(".searchText0").val("");
        $(".searchText0").attr("placeholder","请输入你想找的宝贝");
        var $docWidth = $(document).width();
        $("#searchWin").animate({
            left:$docWidth+"px"
        },1000).hide();
    });

});

function rotate(duration,playTime) {
    var $firstList = $(".slidePic>ul>li:first").clone();
    $(".slidePic>ul").append($firstList);
    var $picWidth = $(".slidePic>ul>li:first").width();
    var $rUl = $(".slidePic>ul");
    var $rLis = $rUl.children();
    var $rTurn = $(".rightTurn");
    var $lTurn = $(".leftTurn");
    var $bPoint = $(".bottomPoint li");
    var index = 0;
    var picLength =$rLis.length-1;

    $rTurn.on("click",function () {
        index++;
        if(index>picLength){
            index=1;
            $rUl.css({
                "left":0+"px"
            })
        }
        turn(index);
    });
    $lTurn.on("click",function () {
        index--;
        if(index<0){
            index=2;
            $rUl.css({
                "left":picLength*(-$picWidth)+"px"
            })
        }
        turn(index);
    });
    function turn(index) {
        $rUl.stop().animate({
                "left":index*(-$picWidth)+"px"},
            playTime);
        $bPoint.removeClass("point");
        $bPoint.eq(index>=picLength?0:index).addClass("point");
    }
    var timer = setInterval(function () {
        $rTurn.click();
    },duration);

    stopTimer($rUl);
    stopTimer($rTurn);
    stopTimer($lTurn);
    stopTimer($bPoint);

    function stopTimer($ele) {
        $ele.hover(function () {
            clearInterval(timer);
        },function () {
            timer = setInterval(function () {
                $rTurn.click();
            },duration);
        })
    }
    $bPoint.each(function () {
        var _index = $(this).index();
        $(this).on("click",function () {
            if(_index>picLength){
                _index = 1;
            }
            turn(_index);
        })
    });
    showandhide($rUl);
    showandhide($rTurn);
    showandhide($lTurn);
    function showandhide($e) {
        $e.hover(function () {
            $rTurn.css("display","block");
            $lTurn.css("display","block");
        },function () {
            $rTurn.css("display","none");
            $lTurn.css("display","none");
        })
    }
}




function scroll(_duration,showTime) {
   // var $newList = $(".slidenews li:eq(0)").clone();
 //  $(".slidenews").append($newList);
    var $nUL = $(".slidenews");
    var $nList = $nUL.children();
    var index = 0;
    var liLength = $nList.length-2;
    var liTop = $nList.height();

    setInterval(function () {
        index +=2;
        if(index>liLength){
            index = 0;
            $nUL.css({
                "top":0+"px"
            })
        }
        link(index);
        function link(index) {
            $nUL.stop().animate({
                "top":index*(-liTop)+"px"
            },showTime)
        }
    },_duration);





}