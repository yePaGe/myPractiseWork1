$(function () {
    //倒计时；
  timeCount();

  //图片轮播
  var durationOne = 2000,
      $slideOne = $(".ypzhjshow>ul>li"),
      $chosenBtnOne= $(".chooseBtnOne>ul>li");
  var durationTwo = 2000,
      $slideTwo = $(".zhiboshow>ul>li"),
      $chosenBtnTwo= $(".chooseBtnTwo>ul>li");
        rotate($slideOne,durationOne,$chosenBtnOne);
        rotate($slideTwo,durationTwo,$chosenBtnTwo);

 //图片右移动；
    var $quanCon = $(".quanCon");
    var $pinzhiPic = $(".pinzhiPic>ul>li");
    var $tuijian = $(".tuijian");
    var $sheji = $(".sheji");
    slideRight($quanCon);
    slideRight($pinzhiPic);
    slideRight($tuijian);
    slideRight($sheji);

  //图片左移动；
    var $fxhhPhoto = $(".haohuoLi");
   // alert($fxhhPhoto.eq(0).find("p").html());
    slideLeft($fxhhPhoto);

  //盒子滚动条移动
   // alert($("#left>li:eq(0)").width());
    var $anouncement = $("#left>li");
    var $pxbPhoto = $(".pxbPhoto>ul>li");
    movediv($anouncement);
    movediv($pxbPhoto);
});

    $(".mess").on({
        mouseover:function () {
            $(this).addClass("active");
            $(this).children("div").show();
        },
        mouseout:function () {
        $(this).removeClass("active");
            $(this).children("div").hide();

        }
    });
    $(".locationMess>ul>li>a").on({
        mouseover:function () {
            $(this).css("background-color","rgba(227,228,229,1)");
        },
        mouseout:function () {
            $(this).css("background-color","rgba(255,255,255,1)") ;
        },
        click:function () {
            var lName = $(this).text();
            $(".lo").text(lName);
            $(this).parents(".locationMess").hide();
            $(".locCh").removeClass("locCh");
            $(this).addClass("locCh");
            //$(this).css("background-color","red");
            // alert($(this).id);
        }
    });
    $(".location").on({
        mouseover: function () {
            $(".locationMess").show();
            $(this).addClass("locationHover");
            /* $(".locationMess>ul>li>a").forEach(function () {
             var name = $(this).text();
             if(name==$(".lo").text()){
             $(this).addClass("messChoose");
             }
             });*/
        },
        mouseout: function () {
            $(this).removeClass("locationHover");
            $(".locationMess").hide();
        }
    });
    $(".goodsList>ul>li").on({
       mouseover:function () {
          // alert("");
           $(this).css("background-color","rgba(153,164,188,0.3) ");
           $(this).children("div").show();
           var h0 =( $(this).index()+1)*30;
         //  alert(h0);
           var h=$(this).children("div").height();
           var h1 = h0-h+30;
           if(h<h0){
               $(this).children("div").css("top",h1+"px");
           }
       } ,
        mouseout:function () {
            $(this).css("background-color","rgba(110,101,104,1)");
            $(this).children("div").hide();

        }
    });

    $(".goods").on({
        mouseenter:function () {
            $(this).find("img").stop().animate({
                "top":"-10px"
            },500)
        },
        mouseleave:function () {
            $(this).find("img").stop().animate({
                "top":"0"
            },500)
        }
    });
   /* $(".haohuoLi").on({
        mouseenter:function () {
            $(this).find("img").stop().animate({
                "padding-right":"15px"
            },500)
        },
        mouseleave:function () {
            $(this).find("img").stop().animate({
                "padding-right":"0"
            },500)
        }
    });
$(".haohuoLi").on({
    mouseenter:function () {
        $(this).find(".haohuoPic").animate({
            "padding-right":"15px"
        },500)
    },  mouseleave:function () {
        $(this).find(".haohuoPic").animate({
            "padding-right":"0"
        },500)
    }
});*/

    $(window).scroll(function (event) {
        var hhh= $(window).scrollTop();
        //console.log(hhh);
        if(hhh>300){
            $("#scrollTop").stop().animate({
                "top":"0"
            },50);
        }else {
            $("#scrollTop").stop().animate({
                "top":"-70px"
            },50);

        }
    });
/*$("#left>li").mouseover(function () {
    var $index = $(this).index();
    var $width=$("#left>li:eq(0)").width();
    //console.log(index);
    if(index == 0){
        $("#move").stop().animate({
            "left":"10px"
        });
        $(".chuxiao").show();
    }else if(index == 1){
        $("#move").stop().animate({
            "left":"60px"
        });
        $(".chuxiao").hide();

    }
});*/

function timeCount() {
    var today = new Date(),
        lastday = new Date("2017/4/29,20:20:40"),
        leftTime = parseInt(lastday.getTime()-today.getTime()),
        hour = parseInt(leftTime/1000/60/60),
        minute = parseInt(leftTime/1000/60%60),
        second = parseInt(leftTime/1000%60);
    $(".hour").html(hour);
    $(".minute").html( minute);
    $(".second").html(second);
    var hl = $(".hour").html().length,
        ml = $(".minute").html().length,
        sl = $(".second").html().length;
    if(sl!=2){
        $(".second").html("0"+second);
    }else {
        $(".second").html(second);
    }
    if(ml!=2){
        $(".minute").html("0"+minute);
    }else {
        $(".minute").html( minute);
    }
    if(hl==1){
        $(".hour").html("0"+hour);
    }else {
        $(".hour").html(hour);
    }
    // console.log(hl);
    // console.log(ml);
    // console.log(sl);
    //alert();
    if(leftTime<0){
        $(".mshaClock p").empty().html("当前场次已结束抢购！");
        $(".mshaClock p").css("font-size","16px");
        $(".mshaClock p").css("color","#fff");
        $(".mshaClock p").css("margin-top","10px");
    }
    setTimeout(timeCount,1000);
}


function movediv($ele) {
    $ele.hover(function () {
        var $index = $(this).index();
        var $width=$(this).width();
        //alert($index*$width);
     //   alert($(".showthing").index());
       $(this).parent().prev(".move").stop().animate({
            "left":$width*$index+"px"
        });
        $(this).parent().next().children(".showthing").eq($index).css("display","block").siblings().css("display","none");
    })
}


function slideLeft($ele) {
    $ele.hover(function () {
            $(this).find("img").stop().animate({
                "padding-right":"10px"
            },500)
        },function () {
            $(this).find("img").stop().animate({
                "padding-right":"0"
            },500)
        }

    )
}
function slideRight($ele) {
    $ele.hover(function () {
        //alert("");
            $(this).find("img").stop().animate({
                "margin-right":"0"
            },500)
        },function () {
            $(this).find("img").stop().animate({
                "margin-right":"15px"
            },500)
        }

    )
}

 function rotate($slide,duration,$chooseBtn) {
     var $lTurn = $(".picleftBtn"),
         $rTurn = $(".picrightBtn"),
         $ulLength = $slide.length-1,
         index=0;
        //alert($ulLength);
       //$slide.get(1).css("display","block");
    //alert($picslide[0].className);
     $rTurn.on("click",function () {
         index++;
         if(index>$ulLength){
             index=0;
         }
       // console.log(index);
         turnTo(index);
     });
     $lTurn.on("click",function () {
         index--;
         if(index<0){
             index=$ulLength;
         }
       //console.log(index);
         turnTo(index);
     });
     $chooseBtn.each(function () {
         var _index = $(this).index();
         $(this).click(function() {
             turnTo(_index);
         })
     });
     function turnTo(e) {
         $slide.eq(e).css("display","block").siblings().css("display","none");
        // alert(e);
        /* if(e==0){
             $(".ypzhjPhoto>div>ul>li:eq(0)").css("display","block");
             $(".ypzhjPhoto>div>ul>li:eq(1)").css("display","none");
             $(".ypzhjPhoto>div>ul>li:eq(2)").css("display","none");
         }else if(e==1){
             $(".ypzhjPhoto>div>ul>li:eq(0)").css("display","none");
             $(".ypzhjPhoto>div>ul>li:eq(1)").css("display","block");
             $(".ypzhjPhoto>div>ul>li:eq(2)").css("display","none");
         }else if(e==2){
             $(".ypzhjPhoto>div>ul>li:eq(0)").css("display","none");
             $(".ypzhjPhoto>div>ul>li:eq(1)").css("display","none");
             $(".ypzhjPhoto>div>ul>li:eq(2)").css("display","block");
         }*/
         $chooseBtn.removeClass("chosen");
         $chooseBtn.eq(e).addClass("chosen");
     }
     var timer = setInterval(function () {
         $rTurn.click();
     },duration);

     stopTimer($lTurn);
     stopTimer($rTurn);
     stopTimer($chooseBtn);

     function stopTimer($ele) {
         $ele.hover(function () {
             clearInterval(timer);
         },function () {
             timer = setInterval(function () {
                 $rTurn.click();
             },duration);
         })
     }

 }







