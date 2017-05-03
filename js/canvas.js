window.onload = function () {
  //var screen = document.getElementById("canvas");
  //var keys = document.getElementById("canvas1");
  //var context = screen.getContext("2d");
 // var context1 = keys.getContext("2d");

   // roundRect(context,0,0,300,200,25,"black");
   // roundRect(context,20,20,260,160,5,"white");
   /// changeRect(context1,0,0,400,80,20,6,"gray");
};
//圆角平行四边形绘制函数；
function changeRect(cxt1,x,y,width,height,r1,r2,color) {
    cxt1.save();//保存当前绘制上下文环境。
    cxt1.translate(x,y);//重置画布的绘制原点为（x,y）。
    pathChangeRect(cxt1,width,height,r1,r2);
    cxt1.fillStyle=color;
    cxt1.lineWidth="3";
    cxt1.fill();
    cxt1.restore();//重置当前绘制上下文环境。
}
function pathChangeRect(cxt1,width,height,r1,r2){
   cxt1.beginPath();
   cxt1.arc(3/4*width,height-r1,r1,Math.PI/4,Math.PI/2);
   cxt1.lineTo(r2,height);
   cxt1.arc(r2,height-r2,r2,Math.PI/2,5/4*Math.PI);
   cxt1.lineTo(1/4*width,0);
   cxt1.lineTo(width,0);
   cxt1.closePath();
}


//圆角矩形绘制函数；
function roundRect(cxt,x,y,width,height,radius,color) {
    cxt.save();//保存当前绘制上下文环境。
    cxt.translate(x,y);//重置画布的绘制原点为（x,y）。
    pathRoundRect(cxt,width,height,radius);
    cxt.fillStyle=color;
    cxt.fill();
    cxt.restore();//重置当前绘制上下文环境。
}
function pathRoundRect(cxt,width,height,radius) {
    cxt.beginPath();
    cxt.arc(radius,radius,radius,Math.PI,1.5*Math.PI);//左上圆角
    cxt.lineTo(width-radius,0);//上边线
    cxt.arc(width-radius,radius,radius,1.5*Math.PI,2*Math.PI);//右上圆角
    cxt.lineTo(width,height);//右边线
    cxt.lineTo(0,height);//下边线
    cxt.closePath();// 结束路径，左边线
}