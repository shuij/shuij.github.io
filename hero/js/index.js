$(function(){
	var gameDialog = $(".gameDialog");//弹框对象
	var shadowBox = $(".shadow");//黑色背景弹层对象
	//游戏说明弹层
	$("#game-info").click(function(){
		/**如果说明弹框不存在  在页面添加**/
		if(!gameDialog.get(0)){
			//创建说明弹框
			gameDialog = $('<div class="gameDialog"><p class="info"></p><a href="javascript:void(0);" class="close">返回</a></div>');
			//页面添加说明弹框
			$("body").append(gameDialog);
		}
		gameDialog.show();//弹框显示
		//说明内容添加
		$(".info").html("游戏说明：<br/>1、该游戏为一款好玩的闯关挑战类游戏，可以锻炼玩家的判断力，提高玩家的敏捷思维能力。<br/>2、可以选择闯关模式或者挑战模式开始游戏。进入闯关模式后点击上方按钮可选择已解锁的关卡。<br/>3、闯关模式总共有十个关卡，每通过一个关卡，游戏难度会逐渐增大。如果玩家玩通关闯关模式，会获得W币奖励。<br/>4、挑战模式会计算积分，玩家可以在线存档，也可以提交自己的积分来查看自己的排行。<br/>5、本游戏引入了金币机制，即W币，初始金币为3个，玩家可以通过每日签到(+1 W币，连续签到从第二天起+2 W币)和完成每日的挑战任务(随机+7或8或9 W币)或玩通关闯关模式(随机+10或11或12 W币)来获得W币，W币可以用来购买道具。本游戏目前含有四种道具，分别是原地复活道具、水波特效道具、蝴蝶跟随鼠标特效道具和下雪特效道具。原地复活道具只可以在挑战模式使用，其它三种道具均为特效道具，每次购买后有七天使用期限，七天后需再次购买才可继续使用。");
		
		/*
		 *添加背景弹层
		 **/
		/**如果说明弹层不存在  在页面添加**/
		if(!shadowBox.get(0)){
			//创建黑色半透明弹层
			shadowBox = $('<div class="shadow"></div>');
			//页面添加黑色半透明弹层
			$("body").append(shadowBox);
		}
		//设置弹层的高度  宽度
		var w = Math.max($(window).innerWidth(),$("body").innerWidth());
		var h = Math.max($(window).innerHeight(),$("body").innerHeight());
		shadowBox.css({"width":w,"height":h});
		shadowBox.show();//黑色半透明弹层显示
	});
	
	//点击弹框 返回按钮
	$(".close").live("click",function(){
		//弹框&&弹层隐藏
		gameDialog.hide();
		shadowBox.hide();
	});
});
