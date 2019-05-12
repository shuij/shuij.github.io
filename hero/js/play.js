/*
 *成功&&失败弹框
 *@参数param为随机文本
 *@参数bolen的值分false(表示是失败的弹框),true(表示是成功的弹框)
 */
function dialog(param,bolen){
	var $dialog = $(".dialog");
	if(!$dialog.get(0)){
		$dialog = $('<div class="dialog"><p class="name"></p><p class="dialog-btn"></p></div>');//新建弹框
		$("body").append($dialog);//把新建的弹框 添加到页面
	}
	$dialog.show();
	$(".name").html(param);
	//判断是失败的弹框还是成功的
	if(bolen){
		//如果是成功的 添加”重玩一次“和”下一关“两个按钮
		$(".dialog-btn").html('<a href="javascript:void(0);" class="play-agin">重玩一次</a><a href="javascript:void(0);" class="go-next">下一关</a>');
	}else{
		//如果是失败的 添加”再试一次“按钮
		$(".dialog-btn").html('<a href="javascript:void(0);" class="play-agin">再试一次</a>');
	}
}

//设置成功文本数组
var success = [
	'勇敢坚毅真正之才智乃刚毅之志向。 —— 拿破仑',
	'志向不过是记忆的奴隶，生气勃勃地降生，但却很难成长。 —— 莎士比亚',
	'骏马是跑出来的，强兵是打出来的。',
	'只有登上山顶，才能看到那边的风光。',
	'如果惧怕前面跌宕的山岩，生命就永远只能是死水一潭。',
	'平时没有跑发卫千米，占时就难以进行一百米的冲刺。',
	'梯子的梯阶从来不是用来搁脚的，它只是让人们的脚放上一段时间，以便让别一只脚能够再往上登。',
	'没有激流就称不上勇进，没有山峰则谈不上攀登。',
	'真正的才智是刚毅的志向。 —— 拿破仑',
	'山路曲折盘旋，但毕竟朝着顶峰延伸。',
	'只有创造，才是真正的享受，只有拚搏，才是充实的生活。',
	'敢于向黑暗宣战的人，心里必须充满光明。',
	'种子牢记着雨滴献身的叮嘱，增强了冒尖的勇气。',
	'自然界没有风风雨雨，大地就不会春华秋实。',
	'只会幻想而不行动的人，永远也体会不到收获果实时的喜悦。',
	'勤奋是你生命的密码，能译出你一部壮丽的史诗。',
	'对于攀登者来说，失掉往昔的足迹并不可惜，迷失了继续前时的方向却很危险。',
	'奋斗者在汗水汇集的江河里，将事业之舟驶到了理想的彼岸。',
	'忙于采集的蜜蜂，无暇在人前高谈阔论。',
	'勇士搏出惊涛骇流而不沉沦，懦夫在风平浪静也会溺水。'
];

//设置失败文本数组
var fail = [
	'志在峰巅的攀登者，不会陶醉在沿途的某个脚印之中。',
	'海浪为劈风斩浪的航船饯行，为随波逐流的轻舟送葬。',
	'人生最重要的一点是，永远不要迷失自己。',
	'一个人承受孤独的能力有多大，他的能力就有多大。',
	'实力塑造性格，性格决定命运。',
	'普通人成功并非靠天赋，而是靠把寻常的天资发挥到不寻常的高度。',
	'对于强者，要关注他们的灵魂，对于弱者，他关注他们的生存。',
	'积极的人在每一次忧患中都看到一个机会，而消极的人则在每个机会都看到某种忧患。',
	'成功不是将来才有的，而是从决定去做的那一刻起，持续累积而成。',
	'当你感到悲哀痛苦时，最好是去学些什么东西。学习会使你永远立于不败之地。',
	'有的人一生默默无闻，有的人一生轰轰烈烈，甚至千古流芳，为什么会这样？因为默默无闻的人只是满足于现状，而不去想怎么轰轰烈烈过一生，不要求自己，去做，去行动，怎么能够成功？',
	'人性最可怜的就是：我们总是梦想着天边的一座奇妙的玫瑰园，而不去欣赏今天就开在我们窗口的玫瑰。',
	'在人生的道路上，即使一切都失去了，只要一息尚存，你就没有丝毫理由绝望。因为失去的一切，又可能在新的层次上复得。',
	'没有一劳永逸的开始；也没有无法拯救的结束。人生中，你需要把握的是：该开始的，要义无反顾地开始；该结束的，就干净利落地结束。',
	'生命的奖赏远在旅途终点，而非起点附近。我不知道要走多少步才能达到目标，踏上第一千步的时候，仍然可能遭到失败。但我不会因此放弃，我会坚持不懈，直至成功！',
	'不要认为只要付出就一定会有回报，这是错误的。学会有效地工作，这是经营自己强项的重要课程。',
	'苦心人天不负，卧薪尝胆，三千越甲可吞吴。有志者事竞成，破釜沉舟，百二秦川终属楚。',
	'生命本身是一个过程，成功与失败只是人生过程中一些小小的片段，若果把生命与成功或失败联系在一起，生命将失去本身该有的意义。',
	'我们不要哀叹生活的不幸，诅咒命运的不公。在命运面前，我们要做强者，掐住命运的咽喉，叩问命运，改变命运。',
	'努力和效果之间，永远有这样一段距离。成功和失败的唯一区别是，你能不能坚持挺过这段无法估计的距离。'
];

var stop = true;//按钮是否可以点击
var number = 0;//用于计算移动到第几个柱子
var leval = 1;//设置关卡
var weWidth = 100;//设置柱子宽度

var play = {
	stickH:null,
	wellW:null,
	initWell:function(wh){
		play.stickH = $(".container").offset().top;//获取柱子距离顶部的距离==设置棍子的最长长度
		play.wellW = wh;//设置柱子宽度
		var param = '';
		var min = 60;//设置最小柱子距离
		var end = parseInt(play.stickH-min);//设置随机差值
		var second;//设置第二个柱子距离
		var third;//设置第三个柱子距离
		var forth;//设置第四个柱子距离
		$(".well-box").empty();//清空柱子
		for(var i=0;i<4;i++){
			var w = parseInt(Math.random()*end)+min;//获取随机值（60到棍子最长长度）
			if(i==0){
				param += ('<div class="well" style="left:0px;width:'+wh+'px"></div>');//第一个柱子对象
			}else if(i==1){
				second = wh+w;
				param += ('<div class="well" style="left:'+second+'px;width:'+wh+'px"></div>');//第二个柱子对象
			}else if(i==2){
				third = second+wh+w;
				param += ('<div class="well" style="left:'+third+'px;width:'+wh+'px"></div>');//第三个柱子对象
			}else{
				forth = third+wh+w;
				param += ('<div class="well" style="left:'+forth+'px;width:'+wh+'px"></div>');//第四个柱子对象
			}
			
		}
		$(".well-box").append(param);//页面添加柱子
		var allW = $(".well").eq(3).offset().left+wh;
		$(".well-box").width(allW);//设置柱子所在盒子的宽度
	},
	moveMan:function(num){
		var stickW = $(".stick").width();//获取倒下棍子的长度
		setTimeout(function(){
			$(".man").find("img").attr("src","img/stick.gif");
			$(".man").find("img").animate({"left":stickW+"px"},1000,function(){
				//判断人物是否落下
				var wellL = $(".well").eq(num+1).offset().left;//柱子距离屏幕左侧的距离
				var range = wellL-play.wellW;//获取两个柱子之间的距离
				if( (stickW < range) || (stickW > wellL)){
					play.faildEvent();//如果落下 调用失败
				}else{
					//如果成功
					$(".man").find("img").attr("src","img/stick_stand.png").css({"left":0}).hide();//人物变为初始
					$(".stick").removeClass("stickDown").width(0);//棍子变为初始
					var oldL = $(".well-box").offset().left;
					$(".well-box").animate({"left":-wellL+oldL},500,function(){
						$(".man").find("img").show();
						stop = true;//按钮可以点击
						number++;//走下一个柱子
						if(number==3){
							//闯关成功
							stop = false;
							play.successEvent();
							leval++;//关卡加1
						}
					});//柱子移动
				}
			});
		},600);
	},
	faildEvent:function(){
		$(".man").find("img").addClass("rotate");
		var num = parseInt(Math.random()*19);//获取随机数0-19
		dialog(fail[num],false);//调用弹框函数(传入参数fail[num]代表随机取出的文本)
	}, 
	successEvent:function(){
		var num = parseInt(Math.random()*19);//获取随机数0-19
		dialog(success[num],true);//调用弹框函数(传入参数success[num]代表随机取出的文本)
	},
};

$(function(){
	play.initWell(weWidth);
	//鼠标按下棍子变长
	$(".btnClick").mousedown(function(){
		if(stop){
			$(".stick").animate({"width":play.stickH+"px"},2500);//棍子变长
		}
	});
	//鼠标弹起
	$(".btnClick").mouseup(function(){
		if(stop){
			$(".stick").stop();//棍子停止变长
			stop = false;
			$(".stick").addClass("stickDown");//棍子倒下
			play.moveMan(number);
		}
	});

	/*
	 *@失败重新开始&&成功“重玩一次”
	 */
	$(".play-agin").live("click",function(){
		$(".dialog").hide();
		stop = true;
		$(".man").find("img").attr("src","img/stick_stand.png").css({"left":0}).removeClass("rotate");//人物变为初始
		$(".stick").removeClass("stickDown").width(0);//棍子变为初始
		$(".well-box").css("left",0);//柱子的盒子初始
		number = 0;
		play.initWell(weWidth);//重新设置柱子宽度
		var num = parseInt(Math.random()*19+1);//随机获取1-20之间的数
		$("body").removeAttr("class");//移除class属性
		$("body").addClass("bg"+num);//body 添加随机class
	});
	//闯关成功 点击下一关
	$(".go-next").live("click",function(){
		$(".dialog").hide();
		stop = true;
		$(".man").find("img").attr("src","img/stick_stand.png").css({"left":0}).removeClass("rotate");;//人物变为初始
		$(".stick").removeClass("stickDown").width(0);//棍子变为初始
		$(".well-box").css("left",0);//柱子的盒子初始
		number = 0;
		play.initWell(weWidth);//重新设置柱子宽度
		$(".play-title").text("关卡"+leval);//设置关卡级别
		var num = parseInt(Math.random()*19+1);//随机获取1-20之间的数
		$("body").removeAttr("class");//移除class属性
		$("body").addClass("bg"+num);//body 添加随机class
	});

});