$(function () {
  timeCount();
   // srollShow();
});


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
    $("#left>li").mouseover(function () {
      var index = $(this).index();
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
    });
    $(".goods").on({
        mouseenter:function () {
            $(this).children(".pic").children("img").stop().animate({
                "top":"-10px"
            },500)
        },
        mouseleave:function () {
            $(this).children(".pic").children("img").stop().animate({
                "top":"0"
            },500)
        }
    });
    $(window).scroll(function (event) {
        var hhh= $(window).scrollTop();
        console.log(hhh);
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







