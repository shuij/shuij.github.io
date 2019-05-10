var url = window.location.href;//获取当前文档的URL 信息
//alert(url);
//根据#分割url信息
var arr = url.split("#"); //=> 得到 关卡数
//alert(arr[1]);
if(arr[1]==undefined)arr[1]=0;
//初始一批游戏的数据
var games = [
    {
        level: 1,
        num: 3,
        waitNum: 5,
        speed: 200
    },
    {
        level: 2,
        num: 4,
        waitNum: 5,
        speed: 200
    },
    {
        level: 3,
        num: 5,
        waitNum: 6,
        speed: 180
    },
    {
        level: 4,
        num: 5,
        waitNum: 8,
        speed: 180
    },
    {
        level: 5,
        num: 6,
        waitNum: 8,
        speed: 160
    },
    {
        level: 6,
        num: 6,
        waitNum: 8,
        speed: 150
    },
    {
        level: 7,
        num: 7,
        waitNum: 8,
        speed: 150
    },
    {
        level: 8,
        num: 8,
        waitNum: 10,
        speed: 150
    }
]

//如果关卡数超出游戏数据,则提示通关
if(arr[1]>=games.length){
    alert("您已通关!");
}

var canvas = document.getElementById("canvas");
var cxt = canvas.getContext("2d");
var bigRadius = 60;//定义关卡大圆的半径
var centerX = 400;//定义大圆中心的X坐标
var centerY =200;//定义大圆中心的Y坐标
var line = 100;//定义线条的长度
var radius = 10;//定义小球的半径

//定义游戏模拟数据(临时)
var level = games[arr[1]].level;//定义一个关卡数变量
var num = games[arr[1]].num;
var waitNum=games[arr[1]].waitNum;
var speed=games[arr[1]].speed;

var balls = [];//定义一个转动小球数组
var waitBalls=[];//定义一个等待小球数组

//准备好转动小球,包括角度信息(数字:numStr,角度:angle)
for(var i=0;i<num;i++){
    var angle = (360/num)*(i+1);//获得每个小球的角度
    balls.push({
        numStr:"",
        angle:angle
    })
}

//定义好等待小球,包括等待小球的信息(数字:numStr,角度:angle)
for(var j=waitNum;j>0;j--){
    waitBalls.push({
        numStr:j,
        angle:""
    })
}

console.log(waitBalls);


//定义一个绘制转动小球函数
function drawBalls(){
    //绘制转动小球
    balls.forEach(function(e){//通过forEach() 遍历等待小球数组,并绘制  e是每次遍历数组的元素
        cxt.save();
        cxt.translate(centerX,centerY);
        //绘制线条
        cxt.rotate(Math.PI/180* e.angle);
        //当小球绘制完毕之后,准备下一次出现的角度
        e.angle+=1+(level/6);
        if(e.angle>=360)e.angle=0;
        console.log(e.angle);

        cxt.moveTo(0,0);
        cxt.lineTo(0,-(bigRadius+radius+line));
        cxt.stroke();
//绘制小球
        cxt.beginPath();
        cxt.arc(0,-(bigRadius+radius+line),radius,0,Math.PI*2);
        cxt.fill();

        if(e.numStr!=""){
            //绘制小球上的数字
            cxt.fillStyle="#fff";
            cxt.textAlign="center";
            cxt.textBaseline="middle";
            cxt.fillText(e.numStr,0,-(bigRadius+radius+line));
        }


        cxt.closePath();
        cxt.restore();
    })
}

//定义一个绘制等待小球的函数
function drawWait(){
    waitBalls.forEach(function(e,index){
        //绘制等待小球
        cxt.save();
        cxt.beginPath();
        cxt.arc(centerX,centerY+bigRadius+radius*8+line+(index*3*radius),radius,0,Math.PI*2);
        cxt.closePath();
        cxt.fill();
        cxt.fillStyle="#fff";
        cxt.textAlign="center";
        cxt.textBaseline="middle";
        cxt.fillText(e.numStr,centerX,centerY+bigRadius+radius*8+line+(index*3*radius));
        cxt.restore();
    })

}

//定义一个绘制大圆函数
function drawBig(){
    //绘制大圆
    cxt.save();
    cxt.beginPath();
    cxt.translate(centerX,centerY);//将原点坐标移动
    cxt.arc(0,0,bigRadius,0,Math.PI*2);
    cxt.fill();
    cxt.closePath();
//绘制关卡数
    cxt.fillStyle="#fff";
    cxt.textAlign="center";
    cxt.font="50px 微软雅黑";
    cxt.textBaseline="middle";
    cxt.fillText(level,0,0);
    cxt.restore();
}

//定义一个初始函数
function init(){
    drawBalls();//调用绘制转动小球
    drawBig()//调用绘制大圆
    drawWait();//调用绘制等待小球
}


//执行函数调用
init();

setInterval(function(){
    //清除已存在的画布内容
    cxt.clearRect(0,0,800,400);
    drawBalls();//调用绘制转动小球
    drawBig()//调用绘制大圆
},1000/60);


var play = true;//用于标识是否过关
//canvas 添加点击事件
canvas.onclick=function(){
    if(!play) window.location.reload();//当游戏过关失败,重新刷新
    //将等待小球数组中的第一个删除
    var tmp = waitBalls.shift();
    //给删除的小球设置一个角度
    tmp.angle=180;
    for(i in balls){//循环遍历转动小球数组,从中判断是否有小球被撞
        if(balls[i].angle>=175&& balls[i].angle<=190){
            play=false;//设置过关失败的标识
            alert("小球被撞!");
            window.location.reload();//当游戏过关失败,重新刷新
        }
    }
    if(waitBalls.length==0&&play){
        //window.location.href=arr[0]+"#"+level;
        window.location.replace(arr[0]+"#"+level);
        window.location.reload();//刷新页面
    }

    //把删除的那个小球放入到转动小球数组中
    balls.push(tmp);
    //清除等待小球区域内容
    cxt.clearRect(380,380,40,500);
    drawWait();//调用绘制等待小球

}

//定义一个小球被撞提示框
