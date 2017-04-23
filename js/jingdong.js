$(function () {
  timeCount();
  var duration = 2000;
    rotate(duration);
   // srollShow();
    var $fxhhPhoto = $(".haohuoLi");
   // alert($fxhhPhoto.eq(0).find("p").html());
    slideRight($fxhhPhoto);
   // alert($("#left>li:eq(0)").width());
    var $anouncement = $("#left>li");
    movediv($anouncement);
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
        lastday = new Date("2017/4/25,20:20:40"),
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
    setTimeout(timeCount,1000);
}


function movediv($ele) {
    $ele.hover(function () {
        var $index = $(this).index();
        var $width=$(this).width()+10;
        //alert($index*$width);
     //   alert($(".showthing").index());
       $("#move").stop().animate({
            "left":$width*$index+"px"
        });
        $(".showthing").eq($index).css("display","block").siblings().css("display","none");
    })
}


function slideRight($ele) {
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

 function rotate(duration) {
     var $lTurn = $(".picleftBtn"),
         $rTurn = $(".picrightBtn"),
         $slide = $(".ypzhjPhoto>div>ul>li"),
         $ulLength = ($slide.length)/2,
         $chooseBtn = $(".chooseBtn>ul>li"),
         index=0;
        // alert($ulLength);
       //$slide.get(1).css("display","block");
    //alert($picslide[0].className);
     $rTurn.on("click",function () {
         index++;
         if(index>$ulLength-1){
             index=0;
         }
        // alert(index);
         turnTo(index);
     });
     $lTurn.on("click",function () {
         index--;
         if(index<0){
             index=$ulLength-1;
         }
         //alert(index);
         turnTo(index);
     });
     $chooseBtn.each(function () {
         var _index = $(this).index();
         $(this).click(function() {
             turnTo(_index);
         })
     });
     function turnTo(e) {
         $slide.siblings().css("display","none");
         $slide.eq(e).css("display","block");
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







